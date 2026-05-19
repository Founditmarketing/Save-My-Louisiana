import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'save-my-louisiana',
  title: 'Save My Louisiana — Content Manager',

  // TODO: Replace with your actual Sanity project ID after running `npx sanity init`
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: Site Settings (only one, always accessible)
            S.listItem()
              .title('⚙️ Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Articles listing
            S.listItem()
              .title('📰 Articles & News')
              .schemaType('article')
              .child(S.documentTypeList('article').title('Articles & News')),
          ]),
    }),
    visionTool(), // GROQ query explorer — useful during development
  ],

  schema: {
    types: schemaTypes,
  },
});
