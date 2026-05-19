import { useState, useEffect } from 'react';
import { fetchSiteSettings } from '../lib/sanity';

interface SiteSettings {
  gofundmeEnabled: boolean;
  gofundmeCampaignTitle: string;
  gofundmeUrl: string;
  gofundmeDescription: string;
  gofundmeGoalAmount?: number;
  announcementBanner?: string;
  primaryEmail?: string;
  primaryPhone?: string;
}

const FALLBACK_SETTINGS: SiteSettings = {
  gofundmeEnabled: false,
  gofundmeCampaignTitle: 'Support Our Legal Fight',
  gofundmeUrl: '',
  gofundmeDescription:
    'Help fund our legal challenge against unconstitutional CCS eminent domain in Louisiana.',
};

/**
 * Hook that returns live site settings from Sanity CMS.
 * Falls back to hardcoded defaults if Sanity is not yet configured.
 * 
 * Usage:
 *   const { settings, loading } = useSiteSettings();
 *   if (settings.gofundmeEnabled) { ... }
 */
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(FALLBACK_SETTINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

    // Skip fetch if Sanity is not configured yet
    if (!projectId) {
      setLoading(false);
      return;
    }

    fetchSiteSettings()
      .then((data) => {
        if (data) setSettings(data);
      })
      .catch((err) => {
        console.warn('[useSiteSettings] Sanity fetch failed, using fallback:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { settings, loading };
}
