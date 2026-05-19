import type { VercelRequest, VercelResponse } from '@vercel/node';
import { appendLeadToSheet, ensureHeaderRow } from './_lib/sheets.js';
import { sendLeadEmails } from './_lib/resend.js';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST and OPTIONS
  if (req.method !== 'POST' && req.method !== 'OPTIONS') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS — allow the live domain and localhost during dev
  const allowedOrigins = [
    'https://savemylouisiana.org',
    'https://www.savemylouisiana.org',
    'http://localhost:3000',
  ];
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse body
  const {
    firstName,
    lastName,
    email,
    phone,
    parish,
    message,
  } = req.body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    parish?: string;
    message?: string;
  };

  // Validate required fields
  if (!firstName?.trim() || !email?.trim()) {
    return res.status(400).json({ error: 'First name and email are required.' });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const sourceUrl = req.headers.referer || 'Direct';

  try {
    // 1. Ensure the sheet has a header row (idempotent)
    await ensureHeaderRow();

    // 2. Write to Google Sheet (primary data store — instant)
    await appendLeadToSheet([
      timestamp,
      firstName.trim(),
      lastName?.trim() || '',
      email.trim().toLowerCase(),
      phone?.trim() || '',
      parish?.trim() || '',
      message?.trim() || '',
      sourceUrl,
      'New',
    ]);

    // 2.5 Ensure it's stored in Postgres for the Admin Dashboard
    await sql`
      INSERT INTO contact_leads (firstName, lastName, email, phone, parish, message, sourceUrl)
      VALUES (${firstName.trim()}, ${lastName?.trim() || ''}, ${email.trim().toLowerCase()}, ${phone?.trim() || ''}, ${parish?.trim() || ''}, ${message?.trim() || ''}, ${sourceUrl})
    `;

    // 3. Send emails via Resend (pre-wired — no-op until API key added)
    await sendLeadEmails({
      firstName: firstName.trim(),
      lastName: lastName?.trim(),
      email: email.trim().toLowerCase(),
      parish: parish?.trim(),
      message: message?.trim(),
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you for joining Save My Louisiana!',
    });
  } catch (error: any) {
    console.error('[submit-lead] Error:', error);
    return res.status(500).json({
      error: error.message || 'Something went wrong.',
    });
  }
}
