const SITE_URL = 'https://savemylouisiana.org';

export const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Save My Louisiana',
    alternateName: 'SML',
    url: SITE_URL,
    logo: `${SITE_URL}/Save-My-LA-logo.png`,
    description:
        'Save My Louisiana (SML) is a 501(c)(4) non-profit citizen volunteer organization dedicated to educating and empowering Louisianans to defend their constitutional rights to Life, Liberty, and Property against unsafe carbon capture and sequestration (CCS) projects.',
    email: 'info@savemylouisiana.org',
    areaServed: {
        '@type': 'State',
        name: 'Louisiana',
    },
    sameAs: [
        'https://www.facebook.com/savemylouisiana/photos',
        'https://x.com/savemylouisiana',
        'https://www.youtube.com/@SAVEMYLOUISIANA-p4l',
    ],
};

export function buildBreadcrumbSchema(pageTitle: string, path: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: SITE_URL + '/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: pageTitle,
                item: SITE_URL + path,
            },
        ],
    };
}
