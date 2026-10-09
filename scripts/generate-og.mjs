// Renders the social sharing images (public/og-<locale>.png).
// Run with `npm run og` after changing the texts below.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const cards = {
  de: { line1: 'Aus Neugier', line2: 'wird Code.', sub: 'Lernende Informatikerin EFZ · Applikationsentwicklung' },
  en: { line1: 'Curiosity,', line2: 'turned into code.', sub: 'Software development apprentice · Switzerland' },
};

const svg = ({ line1, line2, sub }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="a" cx="88%" cy="8%" r="75%">
      <stop offset="0" stop-color="#8b5cf6" stop-opacity=".75"/>
      <stop offset=".55" stop-color="#3b82f6" stop-opacity=".22"/>
      <stop offset="1" stop-color="#0b0b12" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="t" x1="0" x2="1">
      <stop offset="0" stop-color="#c4b5fd"/>
      <stop offset=".45" stop-color="#8b5cf6"/>
      <stop offset="1" stop-color="#3b82f6"/>
    </linearGradient>
    <radialGradient id="s" cx="32%" cy="28%" r="75%">
      <stop offset="0" stop-color="#ede9fe"/>
      <stop offset=".3" stop-color="#8b5cf6"/>
      <stop offset=".62" stop-color="#3b82f6"/>
      <stop offset="1" stop-color="#15132b"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b0b12"/>
  <rect width="1200" height="630" fill="url(#a)"/>
  <g fill="none" stroke="#ffffff" stroke-opacity=".2">
    <ellipse cx="985" cy="330" rx="250" ry="86" transform="rotate(-18 985 330)"/>
    <ellipse cx="985" cy="330" rx="330" ry="116" transform="rotate(-18 985 330)" stroke-dasharray="4 8"/>
  </g>
  <circle cx="985" cy="330" r="118" fill="url(#s)"/>
  <circle cx="742" cy="404" r="9" fill="#b6f36a"/>
  <g transform="translate(80 66) scale(2)" fill="none">
    <rect x="1.25" y="1.25" width="29.5" height="29.5" rx="8.5" fill="#8b5cf6" fill-opacity=".14" stroke="#8b5cf6" stroke-width="1.25"/>
    <path d="M14.25 9.25v9a4 4 0 0 1-4 4H8.75M18.5 9.25v13H24" stroke="#f3f2f8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="23.5" cy="10" r="1.75" fill="#b6f36a"/>
  </g>
  <g font-family="Segoe UI, Helvetica, Arial, sans-serif" fill="#f3f2f8">
    <text x="80" y="330" font-size="96" font-weight="800" letter-spacing="-4">${line1}</text>
    <text x="80" y="436" font-size="96" font-weight="800" letter-spacing="-4" fill="url(#t)">${line2}</text>
    <text x="80" y="548" font-size="27" fill="#aaa8c0">Jasmin Loeffel  ·  ${sub}</text>
  </g>
</svg>`;

for (const [locale, card] of Object.entries(cards)) {
  const file = fileURLToPath(new URL(`../public/og-${locale}.png`, import.meta.url));
  await sharp(Buffer.from(svg(card))).png().toFile(file);
  console.log(`written ${file}`);
}
