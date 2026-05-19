import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  const allowedOrigins = [
    'https://savemylouisiana.org',
    'https://www.savemylouisiana.org',
    'http://localhost:3000',
    'http://localhost:5173',
  ];
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { rows } = await sql`
      SELECT * FROM calendar_events
      ORDER BY start_date ASC;
    `;

    // Map to expected format
    const events = rows.map((row) => ({
      id: String(row.id),
      title: row.title || 'Untitled Event',
      description: row.description || '',
      location: row.location || '',
      start: row.start_date ? new Date(row.start_date).toISOString() : '',
      end: row.end_date ? new Date(row.end_date).toISOString() : '',
      allDay: Boolean(row.all_day),
      htmlLink: '', // Removed Google link
      imageUrl: row.image_url || '',
    }));

    // Filter to upcoming events only (from today onward)
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const upcomingEvents = events.filter((ev) => ev.start && new Date(ev.start) >= now);

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
    return res.status(200).json({ events: upcomingEvents });
  } catch (err: any) {
    console.error('[calendar-events] Error:', err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
