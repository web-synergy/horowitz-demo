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
import { useLiveQuery } from '@sanity/preview-kit';
import { currentNewsQuery } from '../../api/query';
import { useTranslation } from 'react-i18next';

const PathNames = {
  newsDetail: '/:lang/news/:newsSlug',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.newsDetail>>;
}

export const newsItemLoader: LoaderFunction = async ({
  params,
  request,
}: Args) => {
  const url = new URL(request.url);
  const draft = url.searchParams.get('draft');
  const slug = params.newsSlug ?? '';
  const lang = params.lang ?? '';

  const article = await getNewsBySlug(slug, lang, !!draft);
  return { article, slug };
};

const NewsItem = () => {
  const { article, slug } = useLoaderData() as {
    article: INews;
    slug: boolean;
  };
  const {
    i18n: { language },
  } = useTranslation();

  const [data] = useLiveQuery([article], currentNewsQuery, { language, slug });

  if (!data) {
    return (
      <Stack p={6}>
        <Typography variant="h2">Такої новини немає</Typography>
      </Stack>
    );
  }

  return (
    <Stack p={6}>
      <Typography variant="h2">{data[0]?.title}</Typography>
      <PortableText value={data[0]?.description[0]} />
    </Stack>
  );
};

export default NewsItem;
