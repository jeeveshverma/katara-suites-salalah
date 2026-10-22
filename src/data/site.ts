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
  /** The phone on the Google listing; the owner confirmed it as the WhatsApp number (2026-10-22). */
  whatsapp: '96891477727',
  whatsappDisplay: '+968 9147 7727',
  phone: '+96891477727',
  phoneDisplay: '+968 9147 7727',
  instagram: 'katara.suites',
  instagramUrl: 'https://www.instagram.com/katara.suites/',
  googleReviewsUrl: 'https://maps.google.com/?cid=13574446066571705381',
  bookingUrl: 'https://www.booking.com/hotel/om/jnh-ktr-sll.en-gb.html',
  /** Guest scores as published on 2026-10-22, shown on the site by the owner's choice. */
  scores: {
    google: { score: '4.5', outOf: '5', count: 17 },
    booking: { score: '9.1', outOf: '10', count: 16 },
  },
  /** Khareef (monsoon) season window used by the date-aware ribbon, as the owner states it: late June to the end of August. Month is 1-based. */
  khareef: { start: { month: 6, day: 21 }, end: { month: 8, day: 31 } },
} as const;

export type RoomId = 'suite' | 'apartment' | 'studio' | 'deluxe';

export type Amenity = 'sofa' | 'livingArea' | 'kitchen' | 'kitchenette' | 'washer' | 'ac' | 'wifi' | 'tv' | 'parking';

/**
 * The four unit types, as the owner listed them on 2026-10-22: a suite (two bedrooms, sitting
 * room, kitchen, two bathrooms), a one-bedroom apartment (bedroom, sitting room, kitchen,
 * bathroom), a studio (room, living area, bathroom) and a deluxe room (room, kitchenette,
 * bathroom). Which photo shows which unit is read from the photos, not confirmed. Photo ids
 * refer to src/data/photos.ts; the first non-bathroom photos pair with the walk-through steps.
 */
export const ROOMS: { id: RoomId; photos: string[]; hero: string; amenities: Amenity[] }[] = [
  { id: 'suite', hero: 'living-wide', photos: ['living-wide', 'double-wide', 'twin-front', 'kitchen-full', 'bathroom-wide', 'bathroom-shower'], amenities: ['sofa', 'kitchen', 'washer', 'ac', 'wifi', 'tv', 'parking'] },
  { id: 'apartment', hero: 'double-front', photos: ['double-front', 'living-tv-on', 'kitchenette', 'bathroom'], amenities: ['sofa', 'kitchen', 'ac', 'wifi', 'tv', 'parking'] },
  { id: 'studio', hero: 'twin-tv', photos: ['twin-tv', 'living-window', 'bathroom-window'], amenities: ['livingArea', 'ac', 'wifi', 'tv', 'parking'] },
  { id: 'deluxe', hero: 'double-runner', photos: ['double-runner', 'minibar', 'bathroom-basin'], amenities: ['kitchenette', 'ac', 'wifi', 'tv', 'parking'] },
];
