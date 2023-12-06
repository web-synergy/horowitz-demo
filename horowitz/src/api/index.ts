import { client } from '../lib/client';

export const getHomeData = async (language = 'ua') => {
  return await client.fetch(`*[_type == 'home'][0]{

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
}`);
};
