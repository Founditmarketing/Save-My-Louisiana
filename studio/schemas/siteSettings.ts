import { defineType, defineField } from 'sanity';

/**
 * Singleton document — there is only ONE siteSettings document.
 * The client edits this to update the GoFundMe block, donation CTAs,
 * and other site-wide content without touching any code.
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Prevent creating multiple instances
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ─── GoFundMe Block ───────────────────────────────────────────────
    defineField({
      name: 'gofundmeEnabled',
      title: 'Show GoFundMe Block',
      type: 'boolean',
      description: 'Toggle to show or hide the GoFundMe fundraising block on the Donate page.',
      initialValue: true,
    }),
    defineField({
      name: 'gofundmeCampaignTitle',
      title: 'GoFundMe Campaign Title',
      type: 'string',
      description: 'e.g. "Help Fund Our Legal Battle Against CCS"',
      validation: Rule => Rule.max(100),
    }),
    defineField({
      name: 'gofundmeUrl',
      title: 'GoFundMe Campaign URL',
      type: 'url',
      description: 'Paste the full GoFundMe link here. It goes live instantly.',
      validation: Rule =>
        Rule.uri({ scheme: ['https'] }).error('Must be a full https:// URL'),
    }),
    defineField({
      name: 'gofundmeDescription',
      title: 'GoFundMe Description',
      type: 'text',
      rows: 3,
      description: 'Short text displayed below the campaign title on the Donate page.',
      validation: Rule => Rule.max(250),
    }),
    defineField({
      name: 'gofundmeGoalAmount',
      title: 'Fundraising Goal ($)',
      type: 'number',
      description: 'Displayed as the target amount. E.g. 50000 shows as $50,000.',
    }),

    // ─── Homepage Settings ────────────────────────────────────────────
    defineField({
      name: 'announcementBanner',
      title: 'Announcement Banner Text',
      type: 'string',
      description: 'Overrides the scrolling marquee text at the top of every page. Leave blank to use the default.',
    }),

    // ─── Contact Settings ─────────────────────────────────────────────
    defineField({
      name: 'primaryEmail',
      title: 'Primary Contact Email',
      type: 'string',
      initialValue: 'info@savemylouisiana.org',
    }),
    defineField({
      name: 'primaryPhone',
      title: 'Primary Phone Number',
      type: 'string',
      initialValue: '318.542.6856',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
