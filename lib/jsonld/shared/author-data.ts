import { WEBSITE_BASE_URL } from './constants';

export const DEFAULT_AUTHOR_DATA = {
  '@type': 'Organization',
  name: 'Praxis Notes Team',
  url: `${WEBSITE_BASE_URL}/about`,
  description: 'Expert team of ABA professionals and technology specialists',
} as const;
