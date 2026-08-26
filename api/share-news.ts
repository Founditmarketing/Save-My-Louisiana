import { sql } from '@vercel/postgres';

// Serves /news/:id (rewritten here by vercel.json) with the article's Open Graph
// tags injected into index.html, so Facebook/X/iMessage crawlers - which do not
// run JavaScript - see a per-article preview card. Browsers get the same SPA as
// always; React Router renders the article from the URL.

const SITE_URL = 'https://savemylouisiana.org';
const DEFAULT_IMAGE = `${SITE_URL}/Save-My-LA-logo.png`;

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const isImage = (fileName?: string | null) =>
  !!fileName && /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName);

export default async function handler(req: any, res: any) {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';

  let html: string;
  try {
    const shell = await fetch(`${proto}://${host}/index.html`);
    html = await shell.text();
  } catch {
    // Can't load the app shell; send the visitor to the news list instead of erroring.
    res.setHeader('Location', '/news');
    return res.status(302).end();
  }

  try {
    const id = parseInt(String(req.query.id), 10);
    if (Number.isFinite(id)) {
      const { rows } = await sql`SELECT * FROM news_updates WHERE id = ${id};`;
      const item = rows[0];
      if (item) {
        const fullTitle = `${item.title} | Save My Louisiana`;
        const rawDesc = (item.content || 'News from the Save My Louisiana campaign.')
          .replace(/\s+/g, ' ')
          .trim();
        const desc = rawDesc.length > 200 ? `${rawDesc.slice(0, 197)}...` : rawDesc;
        const image = isImage(item.filename) && item.fileurl ? item.fileurl : DEFAULT_IMAGE;
        const url = `${SITE_URL}/news/${item.id}`;

        const t = escapeHtml(fullTitle);
        const d = escapeHtml(desc);
        const i = escapeHtml(image);
        const tags = [
          `<title>${t}</title>`,
          `<meta name="description" content="${d}" />`,
          `<link rel="canonical" href="${url}" />`,
          `<meta property="og:type" content="article" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:title" content="${t}" />`,
          `<meta property="og:description" content="${d}" />`,
          `<meta property="og:image" content="${i}" />`,
          `<meta property="og:site_name" content="Save My Louisiana" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${t}" />`,
          `<meta name="twitter:description" content="${d}" />`,
          `<meta name="twitter:image" content="${i}" />`,
        ].join('\n  ');
        html = html.replace('</head>', `  ${tags}\n</head>`);
      }
    }
  } catch {
    // On any DB error, fall through and serve the untagged app shell.
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
  return res.status(200).send(html);
}
