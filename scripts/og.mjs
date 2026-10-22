// Renders public/og-image.jpg (1200×630): the sitting room, darkened, with the brass arch mark
// and wordmark — what WhatsApp, X and Facebook show when the link is shared. Also writes the
// apple-touch-icon and icon-512 from the mark.   node scripts/og.mjs
import sharp from 'sharp';

const W = 1200, H = 630;
const photo = await sharp('src/assets/photos/living-tv.jpg').resize(W, H, { fit: 'cover', position: 'centre' }).modulate({ brightness: 0.62 }).toBuffer();
const mark = (c) => `<g fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 92V46Q14 18 42 6Q70 18 70 46V92"/><path d="M26 92V52Q26 32 42 22Q58 32 58 52V92"/>
  <path d="M42 36l5 7-5 7-5-7z" fill="${c}" stroke="none"/><path d="M26 66h32" stroke-width="1.6"/><path d="M4 92h76"/></g>`;
const overlay = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2125" stop-opacity=".2"/><stop offset="1" stop-color="#1b2125" stop-opacity=".9"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="28" y="28" width="${W - 56}" height="${H - 56}" fill="none" stroke="#d2b385" stroke-opacity=".7"/>
  <g transform="translate(84 318) scale(1.25)">${mark('#d2b385')}</g>
  <text x="220" y="402" font-family="Marcellus, Georgia, serif" font-size="96" letter-spacing="14" fill="#f3efe8">KATARA</text>
  <text x="226" y="448" font-family="Helvetica, Arial, sans-serif" font-size="22" letter-spacing="10" fill="#d2b385">SUITES · SALALAH</text>
  <text x="${W - 80}" y="430" font-family="'Reem Kufi', 'Geeza Pro', 'Noto Kufi Arabic', sans-serif" font-size="58" fill="#f3efe8" text-anchor="end">أجنحة كتارا</text>
  <text x="226" y="540" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#f3efe8" fill-opacity=".9">Furnished suites by Salalah Gardens Mall · enquire on WhatsApp</text>
</svg>`;
await sharp(photo).composite([{ input: Buffer.from(overlay) }]).jpeg({ quality: 86, mozjpeg: true }).toFile('public/og-image.jpg');

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#1b2125"/><g transform="translate(18 8) scale(1)">${mark('#d2b385').replace('stroke-width="2.4"', 'stroke-width="4.5"')}</g></svg>`;
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(icon)).resize(512, 512).png().toFile('public/icon-512.png');
console.log('og-image.jpg, apple-touch-icon.png, icon-512.png written');
