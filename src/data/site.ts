/**
 * Every public fact about Katara Suites, in one place. Only what the property already publishes
 * (the Google Maps listing, the Booking.com listing) goes here — no prices, unit counts or times.
 */
export const SITE = {
  url: 'https://jeeveshverma.github.io/katara-suites-salalah',
  name: { en: 'Katara Suites Salalah', ar: 'أجنحة كتارا صلالة' },
  shortName: { en: 'Katara Suites', ar: 'أجنحة كتارا' },
  city: { en: 'Salalah', ar: 'صلالة' },
  region: { en: 'Dhofar', ar: 'ظفار' },
  country: { en: 'Sultanate of Oman', ar: 'سلطنة عُمان' },
  /** The neighbourhood (Agoda files the property under Al Wadi); the pin sits just east of Salalah Gardens Mall. */
  street: { en: 'Al Wadi, by Salalah Gardens Mall', ar: 'الوادي، بجوار صلالة جاردنز مول' },
  postal: '211',
  /** Google Maps pin: plus code 23C9+F3Q Salalah, decoded. */
  geo: { lat: 17.021212, lng: 54.067734 },
  plusCode: '23C9+F3Q Salalah',
  /** Google's listing by its CID (feature id 0xbc621ec6ecb47c25 in decimal). */
  mapsUrl: 'https://maps.google.com/?cid=13574446066571705381',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=17.021212,54.067734',
  /** The phone on the Google listing; also used for WhatsApp until the owner says otherwise. */
  whatsapp: '96891477727',
  whatsappDisplay: '+968 9147 7727',
  phone: '+96891477727',
  phoneDisplay: '+968 9147 7727',
  googleReviewsUrl: 'https://maps.google.com/?cid=13574446066571705381',
  bookingUrl: 'https://www.booking.com/hotel/om/jnh-ktr-sll.en-gb.html',
  /** Guest scores as published on 2026-10-22, shown on the site by the owner's choice. */
  scores: {
    google: { score: '4.5', outOf: '5', count: 17 },
    booking: { score: '9.1', outOf: '10', count: 16 },
  },
  /** Khareef (monsoon) season window used by the date-aware ribbon. Month is 1-based. */
  khareef: { start: { month: 6, day: 21 }, end: { month: 9, day: 21 } },
} as const;

export type RoomId = 'double' | 'twin';

/**
 * Suite *styles*: what the listing photos show, not an inventory. Every suite has a sitting room,
 * a kitchen and a bathroom; they differ by the bedroom. Provisional until the owner confirms the
 * layouts. Photo ids refer to src/data/photos.ts.
 */
export const ROOMS: { id: RoomId; photos: string[]; hero: string }[] = [
  { id: 'double', hero: 'double-bed', photos: ['double-bed', 'living-tv', 'kitchen', 'bathroom'] },
  { id: 'twin', hero: 'twin-beds', photos: ['twin-beds', 'living-art', 'kitchenette', 'bathroom'] },
];
