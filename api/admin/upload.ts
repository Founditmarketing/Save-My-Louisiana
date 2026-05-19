import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization;
      const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
      if (auth !== `Bearer ${validPassword}`) return res.status(401).json({error: 'Unauthorized'});

      const filename = req.query.filename as string;
      if (!filename) return res.status(400).json({error: 'Filename is required'});

      const blob = await put(filename, req, { 
        access: 'public',
        addRandomSuffix: true
      });
      
      return res.status(200).json(blob);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
  return res.status(405).end();
}
