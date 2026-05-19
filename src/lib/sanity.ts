import { createClient } from '@sanity/client';

/**
 * Sanity client for the main React frontend.
 * Uses the public read-only CDN endpoint — safe to expose in the browser.
 * 
 * Environment variables (add to .env.local + Vercel dashboard):
 *   VITE_SANITY_PROJECT_ID  = your project ID from sanity.io/manage
 *   VITE_SANITY_DATASET     = production
 */
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';

export const sanityClient = projectId ? createClient({
  projectId,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  // useCdn: true uses Sanity's edge CDN — fast + free for reads
  useCdn: true,
}) : null;

/**
 * Typed helper for common queries.
 * Usage: import { fetchSiteSettings } from '@/src/lib/sanity'
 */
export async function fetchSiteSettings() {
  if (!sanityClient) return null;
  return sanityClient.fetch<{
    gofundmeEnabled: boolean;
    gofundmeCampaignTitle: string;
    gofundmeUrl: string;
    gofundmeDescription: string;
    gofundmeGoalAmount?: number;
    announcementBanner?: string;
    primaryEmail?: string;
    primaryPhone?: string;
  }>(
    `*[_type == "siteSettings"][0]{
      gofundmeEnabled,
      gofundmeCampaignTitle,
      gofundmeUrl,
      gofundmeDescription,
      gofundmeGoalAmount,
      announcementBanner,
      primaryEmail,
      primaryPhone
    }`
  );
}

export async function fetchArticles(limit = 12) {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "article"] | order(publishedAt desc) [0...$limit]{
      _id,
      title,
      slug,
      category,
      publishedAt,
      excerpt,
      videoUrl,
      "featuredImageUrl": featuredImage.asset->url,
      "featuredImageAlt": featuredImage.alt
    }`,
    { limit }
  );
}

export async function fetchArticleBySlug(slug: string) {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      category,
      publishedAt,
      excerpt,
      videoUrl,
      body,
      "featuredImageUrl": featuredImage.asset->url,
      "featuredImageAlt": featuredImage.alt
    }`,
    { slug }
  );
}
