import { Resend } from 'resend';

/**
 * Resend email helper for Save My Louisiana contact form submissions.
 *
 * Environment variables required (set in Vercel + .env.local):
 *   RESEND_API_KEY      — Resend secret key (re_xxxx)
 *   RESEND_FROM_EMAIL   — Verified sender on savemylouisiana.org domain
 *                         (defaults to hello@savemylouisiana.org)
 *
 * Email flow on each form submission:
 *   1. Confirmation → sent TO the supporter, FROM hello@savemylouisiana.org
 *   2. Internal alert → sent TO info@savemylouisiana.org,
 *                       REPLY-TO set to the supporter's email so replies
 *                       go directly back to them.
 */

interface LeadEmailPayload {
  firstName: string;
  lastName?: string;
  email: string;
  parish?: string;
  message?: string;
}

export async function sendLeadEmails(payload: LeadEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  // Guard: silently skip if the key is not yet configured
  if (!apiKey) {
    console.log('[Resend] No API key configured — skipping email send.');
    return;
  }

  const resend = new Resend(apiKey);

  // FROM — verified custom-domain sender (e.g. hello@savemylouisiana.org)
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || 'hello@savemylouisiana.org';

  // TO — organisation inbox that receives all leads
  const orgEmail = 'info@savemylouisiana.org';

  // Run both sends concurrently; neither failure blocks the other
  const [confirmResult, notifyResult] = await Promise.allSettled([

    // ── 1. Supporter confirmation ──────────────────────────────────────────
    resend.emails.send({
      from: `Save My Louisiana <${fromEmail}>`,
      to: payload.email,           // supporter's address from the form
      reply_to: orgEmail,          // replies come back to the org
      subject: 'Thank you for joining Save My Louisiana',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #1976D2; padding: 24px; text-align: center;">
            <img src="https://savemylouisiana.org/cropped-Save-My-LA-logo.png"
                 alt="Save My Louisiana" style="height: 60px; object-fit: contain;" />
          </div>
          <div style="padding: 40px 32px;">
            <h1 style="color: #1976D2; font-size: 24px; margin-bottom: 16px;">
              Thank you, ${payload.firstName}!
            </h1>
            <p style="font-size: 16px; line-height: 1.6; color: #444;">
              You've joined thousands of Louisianans standing up to protect our land, water,
              and constitutional rights from the unchecked expansion of Carbon Capture &amp; Sequestration.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #444;">
              We'll be in touch soon with updates on our legal challenge and ways you can help.
            </p>
            <div style="margin: 32px 0; text-align: center;">
              <a href="https://savemylouisiana.org/donate"
                 style="background: #D32F2F; color: white; padding: 14px 32px;
                        border-radius: 50px; text-decoration: none; font-weight: bold;
                        letter-spacing: 0.1em; text-transform: uppercase; font-size: 13px;">
                Support the Cause
              </a>
            </div>
            <p style="font-size: 14px; color: #888; line-height: 1.6;">
              Save My Louisiana is a 501(c)(4) non-profit citizen volunteer organization.
              We rely solely on the support of individual Louisiana citizens.
            </p>
          </div>
          <div style="background: #f5f5f5; padding: 16px 32px; text-align: center;">
            <p style="font-size: 12px; color: #999;">
              © ${new Date().getFullYear()} Save My Louisiana ·
              <a href="mailto:info@savemylouisiana.org" style="color: #999;">info@savemylouisiana.org</a>
            </p>
          </div>
        </div>
      `,
    }),

    // ── 2. Internal org notification ───────────────────────────────────────
    resend.emails.send({
      from: `SML Contact Form <${fromEmail}>`,
      to: orgEmail,                     // always delivered to the org inbox
      reply_to: payload.email,          // hitting Reply goes to the supporter
      subject: `New Supporter: ${payload.firstName} ${payload.lastName || ''} — ${payload.parish || 'Unknown Parish'}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
          <h2 style="color: #1976D2;">New Lead from savemylouisiana.org</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${payload.firstName} ${payload.lastName || ''}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">
                <a href="mailto:${payload.email}">${payload.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Parish</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${payload.parish || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${payload.message || '—'}</td>
            </tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 16px;">
            Reply directly to this email to respond to the supporter.
            This lead has also been saved to your Google Sheet and Admin Dashboard.
          </p>
        </div>
      `,
    }),
  ]);

  // Log any send errors without throwing (form submission should still succeed)
  if (confirmResult.status === 'rejected') {
    console.error('[Resend] Supporter confirmation failed:', confirmResult.reason);
  }
  if (notifyResult.status === 'rejected') {
    console.error('[Resend] Internal notification failed:', notifyResult.reason);
  }
}
