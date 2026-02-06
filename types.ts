
export type Perspective = 'environmental' | 'legal';

export interface HighlightedFact {
  statistic: string; // The big number/text (e.g., "$85", "Forever")
  label: string;    // The context (e.g., "Per Ton Tax Credit")
  description: string; // The paragraph explaining why this matters
}

export interface SectionContent {
  title: string;
  subtitle: string;
  body: string[]; // Array of paragraphs

  bulletPoints?: string[];
  features?: { title: string; description: string; backgroundImage?: string }[]; // New field for the 3 main points
  cta?: string;
  fact: HighlightedFact; // Changed from statistics[] to a single impactful fact
}

export interface SectionData {
  id: string;
  menuLabel: string;
  baseTitle: string; // Title that doesn't change
  environmental: SectionContent;
  legal: SectionContent;
  imageAlt: string;
  imageSrc: string; // URL for the background or side image
  videoUrl?: string; // Optional YouTube embed URL
  galleryImages?: string[]; // Optional array of images for a slider
}
