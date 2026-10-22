/**
 * Lines from five-star Google reviews of Katara Suites, quoted verbatim, collected 2026-10-22.
 * Google shows them as review highlights, so they carry no reviewer name. The scores themselves
 * live in SITE.scores (src/data/site.ts).
 */
export interface Review { name?: string; lang: 'en' | 'ar'; text: string; translated?: boolean; local?: boolean; when: { en: string; ar: string } }

export const REVIEWS: Review[] = [
  { lang: 'en', when: { en: 'Google review, 2026', ar: 'مراجعة على Google، 2026' }, text: 'Abdul Malik is an excellent host' },
  { lang: 'en', when: { en: 'Google review, 2026', ar: 'مراجعة على Google، 2026' }, text: 'Clean new apartments' },
  { lang: 'en', when: { en: 'Google review, 2026', ar: 'مراجعة على Google، 2026' }, text: 'Location, price, service are c really good' },
];
