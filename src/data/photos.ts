/**
 * The photo catalogue: every master in src/assets/photos/, what it shows, which group it belongs
 * to and alt text in both languages. Placement on the site follows `group` and the suite lists
 * in site.ts — nothing is placed by filename. The masters are the property's own Google Maps
 * photos (placeholders until the owner sends originals).
 */
export type Group = 'double' | 'twin' | 'living' | 'kitchen' | 'bathroom';

export interface Photo { id: string; group: Group; alt: { en: string; ar: string }; caption?: { en: string; ar: string } }

export const PHOTOS: Photo[] = [
  { id: 'living-tv', group: 'living', alt: { en: 'Sitting room: a cream sofa, a small black-framed table, a grey rug and a wall-mounted TV, floor-length curtains with a light strip above', ar: 'غرفة الجلوس: كنبة بلون الكريم وطاولة صغيرة بإطار أسود وسجادة رمادية وتلفاز على الجدار، وستائر حتى الأرض فوقها شريط إضاءة' }, caption: { en: 'The sitting room, curtains drawn', ar: 'غرفة الجلوس والستائر مسدلة' } },
  { id: 'living-art', group: 'living', alt: { en: 'Sitting room with a two-seat sofa, two glass nesting tables, a woven floor lamp and an abstract print', ar: 'غرفة جلوس بكنبة لشخصين وطاولتين زجاجيتين وأباجورة منسوجة ولوحة تجريدية' }, caption: { en: 'A sofa, a lamp and a print', ar: 'كنبة وأباجورة ولوحة' } },
  { id: 'double-bed', group: 'double', alt: { en: 'Bedroom with a wide double bed, a gold runner, lamps on both sides and a lit panelled headboard wall', ar: 'غرفة نوم بسرير مزدوج عريض وشريط ذهبي ومصباحين على الجانبين وجدار خلفي بألواح مضاءة' }, caption: { en: 'The double bedroom', ar: 'غرفة النوم المزدوجة' } },
  { id: 'twin-beds', group: 'twin', alt: { en: 'Bedroom with two single beds, gold-trimmed runners and cushions, a lamp between them and a lit panelled wall', ar: 'غرفة نوم بسريرين منفصلين بأشرطة ووسائد ذهبية الحواف ومصباح بينهما وجدار بألواح مضاءة' }, caption: { en: 'The twin bedroom', ar: 'غرفة النوم بسريرين' } },
  { id: 'kitchen', group: 'kitchen', alt: { en: 'Kitchen with a fridge, a gas cooker with oven, a sink on a stone counter, a washing machine and a water heater', ar: 'مطبخ فيه ثلاجة وموقد غاز مع فرن ومغسلة على سطح حجري وغسالة ملابس وسخان ماء' }, caption: { en: 'The kitchen: cooker, oven, fridge and washing machine', ar: 'المطبخ: موقد وفرن وثلاجة وغسالة' } },
  { id: 'kitchenette', group: 'kitchen', alt: { en: 'Kitchenette with white cabinets, a microwave and a small dining table with white chairs', ar: 'مطبخ صغير بخزائن بيضاء وميكروويف وطاولة طعام صغيرة بكراسٍ بيضاء' }, caption: { en: 'The kitchenette and the dining table', ar: 'المطبخ الصغير وطاولة الطعام' } },
  { id: 'bathroom', group: 'bathroom', alt: { en: 'Bathroom tiled in dark blue-grey, a white basin on a floating shelf, a hand shower and a window', ar: 'حمّام ببلاط رمادي مزرق داكن ومغسلة بيضاء على رف معلّق ودُش يدوي ونافذة' }, caption: { en: 'The bathroom', ar: 'الحمّام' } },
];

export const photo = (id: string): Photo => {
  const p = PHOTOS.find((p) => p.id === id);
  if (!p) throw new Error(`Unknown photo id: ${id}`);
  return p;
};
