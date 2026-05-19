import { google } from 'googleapis';

/**
 * Appends a row of values to the configured Google Sheet.
 * Auth uses a Service Account whose JSON key is stored as a
 * base64-encoded environment variable to avoid newline issues.
 *
 * Setup:
 *   1. Create a Google Cloud project + enable Sheets API
 *   2. Create a Service Account → download JSON key
 *   3. Share your Google Sheet with the service account email (Editor role)
 *   4. base64-encode the key:  base64 < key.json | tr -d '\n'
 *   5. Add to Vercel env vars:
 *        GOOGLE_SERVICE_ACCOUNT_JSON = <base64 output>
 *        GOOGLE_SPREADSHEET_ID       = <the id from the sheet URL>
 */
export async function appendLeadToSheet(values: string[]): Promise<void> {
  const encodedCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!encodedCreds || !spreadsheetId) {
    console.warn(
      '[Sheets] Missing GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SPREADSHEET_ID — skipping sheet write.'
    );
    return;
  }

  const credentialsJson = Buffer.from(encodedCreds, 'base64').toString('utf-8');
  const credentials = JSON.parse(credentialsJson);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    // Targets Sheet1 — rename if your sheet tab has a different name
    range: 'Sheet1!A:I',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [values],
    },
  });
}

/**
 * Ensures the header row exists in the sheet on first run.
 * Safe to call on every request — does nothing if row 1 is already populated.
 */
export async function ensureHeaderRow(): Promise<void> {
  const encodedCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!encodedCreds || !spreadsheetId) return;

  const credentialsJson = Buffer.from(encodedCreds, 'base64').toString('utf-8');
  const credentials = JSON.parse(credentialsJson);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // Check if row 1 is already filled
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A1:I1',
  });

  if (existing.data.values && existing.data.values.length > 0) return;

  // Write header row
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Sheet1!A1:I1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Parish',
        'Message',
        'Source URL',
        'Status',
      ]],
    },
  });
}
