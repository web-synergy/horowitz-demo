import { Stack, Typography } from '@mui/material';
import {
  useLoaderData,
  ActionFunctionArgs,
  Params,
  ParamParseKey,
  LoaderFunction,
} from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { getNewsBySlug } from '../../api';
import { INews } from '../../api';

const PathNames = {
  newsDetail: '/news/:newsSlug',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.newsDetail>>;
}
export const newsLoader: LoaderFunction = async ({ params, request }: Args) => {
  const url = new URL(request.url);
  const draft = url.searchParams.get('draft');
  const newSlug = params.newsSlug;
  console.log(newSlug);
  const article = await getNewsBySlug(newSlug ?? '', !!draft);
  return { article };
};

const NewsItem = () => {
  const { article } = useLoaderData() as { article: INews };

  if (!article) {
    return (
      <Stack p={6}>
        <Typography variant="h2">Такої новини немає</Typography>
      </Stack>
    );
  }

  console.log(article);
  return (
    <Stack p={6}>
      <Typography variant="h2">{article.title}</Typography>
      <PortableText value={article.description[0]} />
    </Stack>
  );
};

export default NewsItem;
