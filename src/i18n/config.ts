/**
 * Locale configuration: the single place that decides which languages exist
 * and what their URLs look like.
 *
 * To add French later:
 *   1. add an `fr` entry here,
 *   2. add `fr` to the dictionary in ./ui.ts,
 *   3. fill in the `fr` texts TypeScript then asks for in src/data/*.
 * Pages, hreflang tags and the language switcher follow automatically.
 */
export const locales = {
  de: {
    htmlLang: 'de-CH',
    ogLocale: 'de_CH',
    label: 'DE',
    name: 'Deutsch',
    base: '/',
    projectsSegment: 'projekte',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    label: 'EN',
    name: 'English',
    base: '/en/',
    projectsSegment: 'projects',
  },
} as const;

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = 'de';
export const localeCodes = Object.keys(locales) as Locale[];

/** A value that must exist in every language. */
export type Localized<T> = Record<Locale, T>;

export function homePath(locale: Locale): string {
  return locales[locale].base;
}

export function projectPath(locale: Locale, slug: string): string {
  const { base, projectsSegment } = locales[locale];
  return `${base}${projectsSegment}/${slug}/`;
}

/** Link to a section of the home page, e.g. sectionPath('en', 'contact'). */
export function sectionPath(locale: Locale, id: string): string {
  return `${homePath(locale)}#${id}`;
}
