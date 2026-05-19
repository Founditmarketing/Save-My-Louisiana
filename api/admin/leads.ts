import { sql } from '@vercel/postgres';

export default async function handler(req: any, res: any) {
  // CORS setup
  const allowedOrigins = [
    'https://savemylouisiana.org',
    'https://www.savemylouisiana.org',
    'http://localhost:3000',
  ];
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Authorization Check
  const auth = req.headers.authorization;
  const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
  if (auth !== `Bearer ${validPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Handle Fetch Request
  if (req.method === 'GET') {
    try {
      const { rows } = await sql`
        SELECT * FROM contact_leads
        ORDER BY createdAt DESC;
      `;
      return res.status(200).json(rows);
    } catch (error: any) {
      console.error('Error fetching leads:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
