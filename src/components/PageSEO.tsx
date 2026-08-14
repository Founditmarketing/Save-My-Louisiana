import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ORGANIZATION_SCHEMA, buildBreadcrumbSchema } from '../lib/schema';

const SITE_URL = 'https://savemylouisiana.org';
const SITE_NAME = 'Save My Louisiana';
const DEFAULT_IMAGE = `${SITE_URL}/Save-My-LA-logo.png`;

interface PageSEOProps {
    /** Page-specific title. Rendered as "{title} | Save My Louisiana" unless rawTitle is set. */
    title: string;
    /** Use the title exactly as given, with no " | Save My Louisiana" suffix (for the homepage tagline). */
    rawTitle?: boolean;
    description: string;
    /** Route path starting with "/", e.g. "/about". Used to build the canonical URL and og:url. */
    path: string;
    image?: string;
    noIndex?: boolean;
    /** One or more JSON-LD objects to embed as <script type="application/ld+json"> tags. */
    schema?: object | object[];
}

export const PageSEO: React.FC<PageSEOProps> = ({
    title,
    rawTitle = false,
    description,
    path,
    image = DEFAULT_IMAGE,
    noIndex = false,
    schema,
}) => {
    const url = `${SITE_URL}${path}`;
    const fullTitle = rawTitle ? title : `${title} | ${SITE_NAME}`;
    const customSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const schemas = noIndex
        ? customSchemas
        : [
              ORGANIZATION_SCHEMA,
              ...(path !== '/' ? [buildBreadcrumbSchema(title, path)] : []),
              ...customSchemas,
          ];

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={SITE_NAME} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(s)}
                </script>
            ))}
        </Helmet>
    );
};
