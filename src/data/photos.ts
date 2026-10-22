/**
 * The photo catalogue: every master in src/assets/photos/, what it shows, which group it belongs
 * to and alt text in both languages. Placement on the site follows `group` and the unit lists
 * in site.ts — nothing is placed by filename. 29 masters are the owner's own photos (sent on
 * 2026-10-22); `double-bed`, `living-art`, `kitchen` and `bathroom` are still the listing's
 * Google Maps photos.
 */
export type Group = 'double' | 'twin' | 'living' | 'kitchen' | 'bathroom' | 'building';

export interface Photo { id: string; group: Group; alt: { en: string; ar: string }; caption?: { en: string; ar: string } }

export const PHOTOS: Photo[] = [
  // sitting rooms
  { id: 'living-tv', group: 'living', alt: { en: 'Sitting room: a cream sofa, a small black-framed table, a grey rug and a wall-mounted TV, floor-length curtains with a light strip above', ar: 'غرفة الجلوس: كنبة بلون الكريم وطاولة صغيرة بإطار أسود وسجادة رمادية وتلفاز على الجدار، وستائر حتى الأرض فوقها شريط إضاءة' }, caption: { en: 'The sitting room, curtains drawn', ar: 'غرفة الجلوس والستائر مسدلة' } },
  { id: 'living-wide', group: 'living', alt: { en: 'Sitting room with a cream sofa and an armchair, a wall-mounted TV over a wooden console, a rug and the doors to the bedrooms', ar: 'غرفة جلوس بكنبة كريمية وكرسي، وتلفاز على الجدار فوق طاولة خشبية، وسجادة، وأبواب غرف النوم' }, caption: { en: 'The sitting room and the bedroom doors', ar: 'غرفة الجلوس وأبواب الغرف' } },
  { id: 'living-tv-on', group: 'living', alt: { en: 'Sitting room with a cream sofa, an armchair, a floor lamp and a smart TV switched on over a long console', ar: 'غرفة جلوس بكنبة كريمية وكرسي وأباجورة أرضية وتلفاز ذكي يعمل فوق طاولة طويلة' }, caption: { en: 'The smart TV', ar: 'التلفاز الذكي' } },
  { id: 'living-window', group: 'living', alt: { en: 'Sitting room with a cream sofa and a navy cushion by a white-framed window, a glass table with flowers and a woven floor lamp', ar: 'غرفة جلوس بكنبة كريمية ووسادة كحلية عند نافذة بإطار أبيض، وطاولة زجاجية عليها زهور وأباجورة منسوجة' }, caption: { en: 'The sofa by the window', ar: 'الكنبة عند النافذة' } },
  { id: 'window-mall', group: 'living', alt: { en: 'The view from the sitting room window: the Salalah Gardens Mall signs across the road', ar: 'المنظر من نافذة غرفة الجلوس: لافتات صلالة جاردنز مول عبر الشارع' }, caption: { en: 'The mall, from the window', ar: 'المول من النافذة' } },
  { id: 'living-art', group: 'living', alt: { en: 'Sitting room with a two-seat sofa, two glass nesting tables, a woven floor lamp and an abstract print', ar: 'غرفة جلوس بكنبة لشخصين وطاولتين زجاجيتين وأباجورة منسوجة ولوحة تجريدية' }, caption: { en: 'A sofa, a lamp and a print', ar: 'كنبة وأباجورة ولوحة' } },
  // double bedrooms
  { id: 'double-wide', group: 'double', alt: { en: 'Double bedroom: a wide bed with a beige runner, lamps on both sides, a panelled wall and an open wardrobe', ar: 'غرفة نوم مزدوجة: سرير عريض بشريط بيج ومصباحان على الجانبين وجدار بألواح وخزانة مفتوحة' }, caption: { en: 'The double bedroom', ar: 'غرفة النوم المزدوجة' } },
  { id: 'double-front', group: 'double', alt: { en: 'Double bed seen from the foot, two gold-trimmed cushions, a lamp on each bedside table and a lit panelled headboard wall', ar: 'سرير مزدوج من جهة القدمين، ووسادتان ذهبيتا الحواف، ومصباح على كل كومودينو، وجدار خلفي بألواح مضاءة' }, caption: { en: 'The double bed', ar: 'السرير المزدوج' } },
  { id: 'double-runner', group: 'double', alt: { en: 'Double bed with a gold runner and a gold cushion, curtains behind and a lit wardrobe with shelves', ar: 'سرير مزدوج بشريط ذهبي ووسادة ذهبية، وستائر خلفه وخزانة مضاءة برفوف' }, caption: { en: 'The gold runner', ar: 'الشريط الذهبي' } },
  { id: 'double-wardrobe', group: 'double', alt: { en: 'Double bed with gold cushions, bedside lamps, an open wardrobe with hangers and a dressing mirror', ar: 'سرير مزدوج بوسائد ذهبية ومصباحين وخزانة مفتوحة بعلّاقات ومرآة زينة' }, caption: { en: 'The bedroom and the wardrobe', ar: 'غرفة النوم والخزانة' } },
  { id: 'dressing-table', group: 'double', alt: { en: 'Dressing table with a drawer and a tall mirror beside open wardrobe shelves, the bed with gold cushions to the side', ar: 'طاولة زينة بدرج ومرآة طويلة بجانب رفوف خزانة مفتوحة، والسرير بوسائد ذهبية إلى الجانب' }, caption: { en: 'The dressing table', ar: 'طاولة الزينة' } },
  { id: 'double-bed', group: 'double', alt: { en: 'Bedroom with a wide double bed, a gold runner, lamps on both sides and a lit panelled headboard wall', ar: 'غرفة نوم بسرير مزدوج عريض وشريط ذهبي ومصباحين على الجانبين وجدار خلفي بألواح مضاءة' }, caption: { en: 'The double bedroom', ar: 'غرفة النوم المزدوجة' } },
  // twin bedrooms
  { id: 'twin-front', group: 'twin', alt: { en: 'Twin bedroom seen from the foot of the beds: gold runners, a lamp between the beds and the door to the hall', ar: 'غرفة بسريرين من جهة القدمين: أشرطة ذهبية ومصباح بين السريرين وباب إلى الممر' }, caption: { en: 'The twin bedroom', ar: 'غرفة النوم بسريرين' } },
  { id: 'twin-beds', group: 'twin', alt: { en: 'Bedroom with two single beds, gold-trimmed runners and cushions, a lamp between them and a lit panelled wall', ar: 'غرفة نوم بسريرين منفصلين بأشرطة ووسائد ذهبية الحواف ومصباح بينهما وجدار بألواح مضاءة' }, caption: { en: 'Two single beds', ar: 'سريران منفصلان' } },
  { id: 'twin-tv', group: 'twin', alt: { en: 'Two single beds with gold-trimmed cushions and a smart TV on the wall opposite', ar: 'سريران منفصلان بوسائد ذهبية الحواف وتلفاز ذكي على الجدار المقابل' }, caption: { en: 'Twin beds and the TV', ar: 'السريران والتلفاز' } },
  { id: 'twin-cushions', group: 'twin', alt: { en: 'Close view of the twin beds: gold-trimmed cushions and a small lamp on the shared bedside table', ar: 'لقطة قريبة للسريرين: وسائد ذهبية الحواف ومصباح صغير على الكومودينو المشترك' }, caption: { en: 'Gold-trimmed cushions', ar: 'وسائد ذهبية الحواف' } },
  { id: 'twin-angle', group: 'twin', alt: { en: 'Twin beds at an angle, gold runners and cushions, the bedroom door open', ar: 'السريران بزاوية جانبية، أشرطة ووسائد ذهبية، وباب الغرفة مفتوح' }, caption: { en: 'Two beds', ar: 'سريران' } },
  { id: 'twin-wardrobe', group: 'twin', alt: { en: 'Twin bedroom seen past an open wardrobe with lit shelves and a dressing table', ar: 'غرفة بسريرين تُرى من خلف خزانة مفتوحة برفوف مضاءة وطاولة زينة' }, caption: { en: 'The wardrobe and the twin beds', ar: 'الخزانة والسريران' } },
  // kitchens
  { id: 'kitchen-full', group: 'kitchen', alt: { en: 'Kitchen with a tall fridge, a gas cooker with oven, a sink under a window, a microwave and a washing machine', ar: 'مطبخ بثلاجة طويلة وموقد غاز مع فرن ومغسلة تحت نافذة وميكروويف وغسالة' }, caption: { en: 'The kitchen', ar: 'المطبخ' } },
  { id: 'kitchen', group: 'kitchen', alt: { en: 'Kitchen with a fridge, a gas cooker with oven, a sink on a stone counter, a washing machine and a water heater', ar: 'مطبخ فيه ثلاجة وموقد غاز مع فرن ومغسلة على سطح حجري وغسالة ملابس وسخان ماء' }, caption: { en: 'The kitchen: cooker, oven, fridge and washing machine', ar: 'المطبخ: موقد وفرن وثلاجة وغسالة' } },
  { id: 'kitchenette', group: 'kitchen', alt: { en: 'Kitchenette with white cabinets, a microwave, a kettle and a small dining table with white chairs', ar: 'مطبخ صغير بخزائن بيضاء وميكروويف وغلاية وطاولة طعام صغيرة بكراسٍ بيضاء' }, caption: { en: 'The kitchenette and the dining table', ar: 'المطبخ الصغير وطاولة الطعام' } },
  { id: 'minibar', group: 'kitchen', alt: { en: 'A small fridge with a kettle, cups and water bottles on top, by the bedroom door', ar: 'ثلاجة صغيرة فوقها غلاية وأكواب وقوارير ماء، عند باب غرفة النوم' }, caption: { en: 'Kettle and fridge', ar: 'الغلاية والثلاجة' } },
  // bathrooms
  { id: 'bathroom-wide', group: 'bathroom', alt: { en: 'Bathroom in blue mosaic tiles with a floating basin, a mirror, a rain shower and a small window', ar: 'حمّام ببلاط فسيفساء أزرق ومغسلة معلّقة ومرآة ودُش مطري ونافذة صغيرة' }, caption: { en: 'The bathroom', ar: 'الحمّام' } },
  { id: 'bathroom-basin', group: 'bathroom', alt: { en: 'Bathroom basin on a white shelf under a mirror, folded towels on a rack above', ar: 'مغسلة الحمّام على رف أبيض تحت مرآة، ومناشف مطوية على حامل فوقها' }, caption: { en: 'Towels and the basin', ar: 'المناشف والمغسلة' } },
  { id: 'bathroom-shower', group: 'bathroom', alt: { en: 'Bathroom tiled in blue and white with a rain shower, a toilet and a white basin', ar: 'حمّام ببلاط أزرق وأبيض ودُش مطري ومرحاض ومغسلة بيضاء' }, caption: { en: 'The shower', ar: 'الدُّش' } },
  { id: 'bathroom-window', group: 'bathroom', alt: { en: 'Bathroom with an arched window, a shower, a mirror reflecting the bedroom and a water heater', ar: 'حمّام بنافذة مقوّسة ودُش ومرآة تعكس غرفة النوم وسخان ماء' }, caption: { en: 'The bathroom', ar: 'الحمّام' } },
  { id: 'bathroom', group: 'bathroom', alt: { en: 'Bathroom tiled in dark blue-grey, a white basin on a floating shelf, a hand shower and a window', ar: 'حمّام ببلاط رمادي مزرق داكن ومغسلة بيضاء على رف معلّق ودُش يدوي ونافذة' }, caption: { en: 'The bathroom', ar: 'الحمّام' } },
  { id: 'bathroom-blue', group: 'bathroom', alt: { en: 'Bathroom in blue evening light: shower, toilet and basin', ar: 'حمّام في ضوء المساء الأزرق: دُش ومرحاض ومغسلة' }, caption: { en: 'The bathroom at dusk', ar: 'الحمّام عند الغروب' } },
  // the building
  { id: 'exterior', group: 'building', alt: { en: 'The Katara Suites building, cream with arched windows and the name over the entrance, with Salalah Gardens Mall across the road', ar: 'مبنى أجنحة كتارا، كريمي اللون بنوافذ مقوّسة والاسم فوق المدخل، وصلالة جاردنز مول عبر الشارع' }, caption: { en: 'The building, with the mall across the road', ar: 'المبنى والمول عبر الشارع' } },
  { id: 'reception', group: 'building', alt: { en: 'The reception: a marble-fronted desk with the Katara name on the wall, a chandelier, plants and a round table', ar: 'الاستقبال: مكتب بواجهة رخامية واسم كتارا على الجدار وثريا ونباتات وطاولة مستديرة' }, caption: { en: 'The reception', ar: 'الاستقبال' } },
  { id: 'reception-lounge', group: 'building', alt: { en: 'The reception lounge: a sofa and an armchair by a round table, the desk and a chandelier', ar: 'صالة الاستقبال: كنبة وكرسي حول طاولة مستديرة، والمكتب وثريا' }, caption: { en: 'The lounge by the reception', ar: 'صالة الاستقبال' } },
  { id: 'lobby', group: 'building', alt: { en: 'The entrance corridor: a patterned lift door, crystal chandeliers, a chair and the reception beyond', ar: 'ممر المدخل: باب مصعد منقوش وثريات كريستال وكرسي والاستقبال في العمق' }, caption: { en: 'The entrance', ar: 'المدخل' } },
  { id: 'lift', group: 'building', alt: { en: 'The lift door, patterned in black and cream, under two crystal chandeliers', ar: 'باب المصعد بنقش أسود وكريمي تحت ثريتين من الكريستال' }, caption: { en: 'The lift', ar: 'المصعد' } },
];

export const photo = (id: string): Photo => {
  const p = PHOTOS.find((p) => p.id === id);
  if (!p) throw new Error(`Unknown photo id: ${id}`);
  return p;
};
