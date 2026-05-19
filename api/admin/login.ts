export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { password } = req.body;
    // Default fallback locally if they forget to set it
    const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
    
    if (password === validPassword) {
      return res.status(200).json({ token: validPassword });
    }
    return res.status(401).json({ error: 'Invalid password' });
  }
  return res.status(405).end();
}
