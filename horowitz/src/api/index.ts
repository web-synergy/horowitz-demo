import { client } from '../lib/client';

export const getHomeData = async (language = 'ua') => {
  return await client.fetch(`*[_type == 'home'][1]{

    'quote':quote{
       'author': author[_key =='${language}'].value,
         'desc':desc[_key =='${language}'].value,
     },
         
      'banner':banner{
      'title':  title[_key =='${language}'].value,
       'dateBegin':dateBegin[_key =='${language}'].value,
       'img':img.asset ->url

      },
    'winner':winner[]{
    'name': name[_key =='${language}'].value,
    'champion': champion[_key =='${language}'].value,
      'img':img.asset ->url

    },
    'allNews':allNews[]{
      'description':description[_key =='${language}'].value,
      'titleNews':titleNews[_key =='${language}'].value,
      'imgSrcNew':imgSrcNew.asset->url

    },
    sponsors,
    'videos':videos[]{
      'title':title[_key =='${language}'].value,
      link
    },
}`);
};
