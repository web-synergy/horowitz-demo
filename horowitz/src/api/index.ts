import { client } from '../lib/client';
import { PortableTextBlock } from '@portabletext/types';

export async function sanityFetch<T>(
  draft: boolean,
  query: string
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
    .fetch<T>(query);
}

export const getHomeData = async (language = 'ua') => {
  return client.fetch(`*[_type == 'home'][0]{

    'quote':quote{
       'author': author[_key ==${language}'].value,
         'quote':quote[_key =='${language}'].value,
     },
         
      'banner':banner{
      'title':  title[_key =='${language}'].value,
       'dateEvent':dateEvent[_key =='${language}'].value,
       'img':img.asset ->url

      },
    'winner':winner[]{
    'name': name[_key =='${language}'].value,
    'champion': champion[_key =='${language}'].value,
      'img':img.asset ->url

    },
    'news':news[]->{
      'description':description[_key =='${language}'].value,
      'title':title[_key =='${language}'].value,
      'img':img.asset->url

    },
    sponsors,
    'videos':videos[]{
      'title':title[_key =='${language}'].value,
      link
    },
}`);
};

export interface INews {
  _id: string;
  slug: string;
  title: string;
  description: PortableTextBlock[];
  img: string;
}
export const getNews = async (lang: string) => {
  return client.fetch<INews[]>(`*[_type=='news']{
    _id, 
    'slug':slug.current,
    'description':description[_key =='${lang}'].value,
    'title':title[_key =='${lang}'].value,
    'img':img.asset->url
  }`);
};

export const getNewsBySlug = async (slug: string, draft: boolean) => {
  const query = `*[_type =="news" && slug.current=="${slug}"]{
    _id, 
    'slug':slug.current,
    'description':description[_key =='ua'].value,
    'title':title[_key =='ua'].value,
    'img':img.asset->url
  }`;
  const result = await sanityFetch<INews[]>(draft, query);
  console.log(result);
  return result[0];
};
