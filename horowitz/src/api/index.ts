import { client } from '../lib/client';
import { PortableTextBlock } from '@portabletext/types';
import groq from 'groq';

export async function sanityFetch<T>(query: string, draft = false) {
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

interface HomeDataType {
  banner: any;
  news: any[];
  sponsors: any[];
  winner: any[];
  videos: any[];
  quote: any;
}
export const getHomeData = async (language = 'ua') => {
  const query = groq`*[_type == 'home'][0]{
  'quote':quote{
     'author': author[_key =='${language}'].value,
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
  }`;

  const result = await sanityFetch<HomeDataType>(query);

  return result;
};

export interface INews {
  _id: string;
  slug: string;
  title: string;
  description: PortableTextBlock[];
  img: string;
}
export const getNews = async (lang: string) => {
  return client.fetch<INews[]>(groq`*[_type=='news']{
    _id, 
    'slug':slug.current,
    'description':description[_key =='${lang}'].value,
    'title':title[_key =='${lang}'].value,
    'img':img.asset->url
  }`);
};

export const getNewsBySlug = async (
  slug: string,
  lang: string,
  draft: boolean
) => {
  const query = groq`*[_type =="news" && slug.current=="${slug}"]{
    _id, 
    'slug':slug.current,
    'description':description[_key =='${lang}'].value,
    'title':title[_key =='${lang}'].value,
    'img':img.asset->url
  }`;
  const result = await sanityFetch<INews[]>(query, draft);
  console.log(result);
  return result[0];
};
