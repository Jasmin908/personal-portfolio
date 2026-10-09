# Portfolio – Jasmin Loeffel

Personal developer portfolio, built with [Astro](https://astro.build). German (`/`) and English (`/en/`).

## Commands

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Local dev server at http://localhost:4321        |
| `npm run build`   | Production build into `dist/`                    |
| `npm run preview` | Serve the production build locally               |
| `npm run check`   | Type-check, including missing translations       |
| `npm run og`      | Regenerate the social images `public/og-*.png`   |

## Where things live

```
src/
  i18n/config.ts     languages and URL structure
  i18n/ui.ts         all interface and page texts (DE + EN)
  data/projects.ts   projects: one entry per project
  data/skills.ts     skill groups
  data/site.ts       name and contact links
  components/        building blocks (Nav, Hero, ProjectCard, ...)
  views/             the two page types: home and project detail
  layouts/Base.astro <head>, SEO, hreflang, nav, footer
  pages/[...path].astro   generates every page in every language
  styles/global.css  design tokens (colours, fonts, spacing)
```

## Add a project

1. Open `src/data/projects.ts` and append an entry to `projects` (copy an existing one).
2. Pick a `slug` (used in the URL), a `status` and fill in the German and English texts.
3. Run `npm run check`. TypeScript reports any text that is missing in one language.

The card on the home page and both detail pages are generated automatically.

**Real images:** put them in `src/assets/projects/`, import them in `projects.ts`
and set `image` (card and header) and `screenshots` (detail page). Without an image
the generated placeholder (`cover: 'grid' | 'dialog' | 'timeline' | 'scan'`) is used.

**Links:** set `demoUrl` and `repoUrl` once they exist. Until then they are shown
as "to follow" and are not clickable.

**Status values:** `planned`, `prototype`, `in-development`, `completed`.
Labels are in `src/i18n/ui.ts` under `status`.

## Other common edits

- **Contact details:** `src/data/site.ts`. An entry set to `null` (e.g. LinkedIn) is not shown.
- **Skills and tools:** `src/data/skills.ts`. Icons are in `src/data/icons.ts`.
- **Texts:** `src/i18n/ui.ts`. German is the source; English must have the same keys.
- **Colours and fonts:** the `:root` block in `src/styles/global.css`.

## Add a language (e.g. French)

1. Add an `fr` entry to `locales` in `src/i18n/config.ts`.
2. Add the `fr` dictionary in `src/i18n/ui.ts`.
3. Run `npm run check` and fill in every `fr` text it asks for in `src/data/`.

Routes, hreflang tags and the language switcher pick it up automatically.

## Deploy on Netlify

Connect the repository; `netlify.toml` already sets the build command and publish
directory. Netlify's `URL` variable provides the domain for canonical links and
the sitemap, so nothing needs to be configured by hand.
