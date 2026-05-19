import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // 1. Verify Authentication
    const authHeader = req.headers.authorization;
    const validPassword = process.env.ADMIN_PASSWORD || 'louisiana-admin';
    if (authHeader !== `Bearer ${validPassword}`) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    if (req.method === 'GET') {
        try {
            const { rows } = await sql`
                SELECT * FROM calendar_events
                ORDER BY start_date DESC;
            `;
            return res.status(200).json(rows);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    if (req.method === 'POST') {
        try {
            const { title, description, location, start_date, end_date, all_day, imageUrl } = req.body;

            if (!title || !start_date) {
                return res.status(400).json({ error: 'Title and start date are required' });
            }

            const { rows } = await sql`
                INSERT INTO calendar_events (title, description, location, start_date, end_date, all_day, image_url)
                VALUES (${title}, ${description}, ${location}, ${start_date}, ${end_date || null}, ${all_day || false}, ${imageUrl || null})
                RETURNING *;
            `;
            return res.status(201).json(rows[0]);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    if (req.method === 'PUT') {
        try {
            const id = req.query.id as string;
            if (!id) return res.status(400).json({ error: 'ID is required' });

            const { title, description, location, start_date, end_date, all_day, imageUrl } = req.body;

            const { rows } = await sql`
                UPDATE calendar_events
                SET title = ${title},
                    description = ${description},
                    location = ${location},
                    start_date = ${start_date},
                    end_date = ${end_date || null},
                    all_day = ${all_day || false},
                    image_url = ${imageUrl || null}
                WHERE id = ${id}
                RETURNING *;
            `;
            return res.status(200).json(rows[0]);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    if (req.method === 'DELETE') {
        try {
            const id = req.query.id as string;
            if (!id) return res.status(400).json({ error: 'ID is required' });

            await sql`
                DELETE FROM calendar_events WHERE id = ${id};
            `;
            return res.status(200).json({ success: true });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
}
