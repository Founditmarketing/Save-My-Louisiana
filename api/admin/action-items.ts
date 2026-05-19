import { sql } from '@vercel/postgres';

export default async function handler(req: any, res: any) {
  const method = req.method;

  try {
    if (method === 'GET') {
      const { rows } = await sql`SELECT * FROM action_items ORDER BY pinned DESC, createdAt DESC;`;
      return res.status(200).json(rows);
    } 

    if (method === 'POST') {
      const auth = req.headers.authorization;
      const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
      if (auth !== `Bearer ${validPassword}`) return res.status(401).json({error: 'Unauthorized'});

      const { title, description, fileUrl, fileName, pinned } = req.body;
      const { rows } = await sql`
        INSERT INTO action_items (title, description, fileUrl, fileName, pinned)
        VALUES (${title}, ${description}, ${fileUrl || null}, ${fileName || null}, ${pinned || false})
        RETURNING *;
      `;
      return res.status(200).json(rows[0]);
    }

    if (method === 'PUT') {
      const auth = req.headers.authorization;
      const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
      if (auth !== `Bearer ${validPassword}`) return res.status(401).json({error: 'Unauthorized'});

      const { id } = req.query;
      const { title, description, fileUrl, fileName, pinned } = req.body;
      const { rows } = await sql`
        UPDATE action_items 
        SET title = ${title}, description = ${description}, fileurl = ${fileUrl || null}, filename = ${fileName || null}, pinned = ${pinned || false}
        WHERE id = ${id}
        RETURNING *;
      `;
      return res.status(200).json(rows[0]);
    }

    if (method === 'DELETE') {
      const auth = req.headers.authorization;
      const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
      if (auth !== `Bearer ${validPassword}`) return res.status(401).json({error: 'Unauthorized'});
      
      const { id } = req.query;
      await sql`DELETE FROM action_items WHERE id = ${id}`;
      return res.status(200).json({ success: true });
    }

    return res.status(405).end();
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
