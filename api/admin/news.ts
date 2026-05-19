import { sql } from '@vercel/postgres';

export default async function handler(req: any, res: any) {
  const method = req.method;

  try {
    if (method === 'GET') {
      const { rows } = await sql`SELECT * FROM news_updates ORDER BY createdAt DESC;`;
      return res.status(200).json(rows);
    } 

    if (method === 'POST') {
      const auth = req.headers.authorization;
      const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
      if (auth !== `Bearer ${validPassword}`) return res.status(401).json({error: 'Unauthorized'});

      const { title, type, content, fileUrl, fileName, gofundmeUrl, documentUrl, documentName } = req.body;
      const { rows } = await sql`
        INSERT INTO news_updates (title, type, content, fileUrl, fileName, gofundmeUrl, documentUrl, documentName)
        VALUES (${title}, ${type}, ${content || null}, ${fileUrl || null}, ${fileName || null}, ${gofundmeUrl || null}, ${documentUrl || null}, ${documentName || null})
        RETURNING *;
      `;
      return res.status(200).json(rows[0]);
    }

    if (method === 'PUT') {
      const auth = req.headers.authorization;
      const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
      if (auth !== `Bearer ${validPassword}`) return res.status(401).json({error: 'Unauthorized'});

      const { id } = req.query;
      const { title, type, content, fileUrl, fileName, gofundmeUrl, documentUrl, documentName } = req.body;
      const { rows } = await sql`
        UPDATE news_updates 
        SET title = ${title}, type = ${type}, content = ${content || null}, fileurl = ${fileUrl || null}, filename = ${fileName || null}, gofundmeurl = ${gofundmeUrl || null}, documenturl = ${documentUrl || null}, documentname = ${documentName || null}
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
      await sql`DELETE FROM news_updates WHERE id = ${id}`;
      return res.status(200).json({ success: true });
    }

    return res.status(405).end();
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
