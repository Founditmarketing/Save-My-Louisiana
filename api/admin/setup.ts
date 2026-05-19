import { sql } from '@vercel/postgres';

export default async function handler(req: any, res: any) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS action_items (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        fileUrl VARCHAR(1000),
        fileName VARCHAR(255),
        pinned BOOLEAN DEFAULT false,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS news_updates (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        content TEXT,
        fileUrl VARCHAR(1000),
        fileName VARCHAR(255),
        gofundmeUrl VARCHAR(1000),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Add new columns safely if they don't exist yet for "Resource Block" feature
    await sql`ALTER TABLE news_updates ADD COLUMN IF NOT EXISTS documentUrl VARCHAR(1000);`;
    await sql`ALTER TABLE news_updates ADD COLUMN IF NOT EXISTS documentName VARCHAR(255);`;

    await sql`
      CREATE TABLE IF NOT EXISTS contact_leads (
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        parish VARCHAR(255),
        message TEXT,
        sourceUrl VARCHAR(1000),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS calendar_events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        location VARCHAR(255),
        start_date TIMESTAMP NOT NULL,
        end_date TIMESTAMP,
        all_day BOOLEAN DEFAULT false,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`ALTER TABLE calendar_events ADD COLUMN IF NOT EXISTS image_url VARCHAR(1000);`;
    return res.status(200).json({ success: true, message: "Tables created successfully." });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
