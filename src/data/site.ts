/**
 * Personal details used across the site.
 *
 * A contact entry left as `null` is not shown at all. Fill in a value and
 * its row appears in the contact section.
 */
export const site = {
  name: 'Jasmin Loeffel',
  country: 'CH',
  contact: {
    email: 'loeffeljasmin@gmail.com' as string | null,
    github: 'https://github.com/Jasmin908' as string | null,
    linkedin: null as string | null, // e.g. 'https://www.linkedin.com/in/username'
  },
};
