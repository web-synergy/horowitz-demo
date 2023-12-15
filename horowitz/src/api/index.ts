import { client } from '../lib/client';
import { PortableTextBlock } from '@portabletext/types';

import { currentNewsQuery, homeQuery, newsQuery } from './query';
import { QueryParams } from '@sanity/client';
const DEFAULT_PARAMS = {} as QueryParams;
export async function sanityFetch<T>(
  query: string,
  params = DEFAULT_PARAMS,
  draft?: boolean
): Promise<T> {
  const secretToken = import.meta.env.VITE_SANITY_SECRET_TOKEN ?? '';
  const token = draft ? secretToken : '';

  if (draft && token === '') {
    throw new Error(
      'The `VITE_SANITY_SECRET_TOKEN` environment variable is required.'
    );
  }

  const perspective = draft ? 'previewDrafts' : 'published';

  return client
    .withConfig({ token: token, perspective: perspective })
    .fetch<T>(query, params);
}
export const token = import.meta.env.VITE_SANITY_SECRET_TOKEN;

export const getHomeData = async (language: string, draft?: boolean) => {
  return sanityFetch(homeQuery, { language }, draft);
};

export interface INews {
  _id: string;
  slug: string;
  title: string;
  description: PortableTextBlock[];
  img: string;
}
export const getNews = async (language: string) => {
  return client.fetch<INews[]>(newsQuery, { language });
};

export const getNewsBySlug = async (
  slug: string,
  draft: boolean,
  language = 'ua'
) => {
  const result = await sanityFetch(
    currentNewsQuery,
    {
      language,
      slug,
    },
    draft
  );
  console.log(result);
  return result[0];
};
