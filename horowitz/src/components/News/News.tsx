import { Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getNews } from '../../api';
import { INews } from '../../api';
import { urlFor } from '../../lib/client';
import { useTranslation } from 'react-i18next';
import {
  useLoaderData,
  ActionFunctionArgs,
  Params,
  ParamParseKey,
  LoaderFunction,
} from 'react-router-dom';
import { PortableText } from '@portabletext/react';

const PathNames = {
  newsDetail: '/:lang/news',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.newsDetail>>;
}

export const newsLoader: LoaderFunction = async ({ params }: Args) => {
  const language = params.lang || '';
  const data = await getNews(language);
  return { news: data };
};

const News = () => {
  const { news } = useLoaderData() as { news: INews[] };
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <Container>
      {news.length > 0 && (
        <Stack gap={3} py={3}>
          {news.map((item) => (
            <Stack key={item._id} direction="row" gap={3}>
              <img
                src={urlFor(item.img)
                  .auto('format')
                  .fit('scale')
                  .url()
                  .toString()}
                alt="news foto"
                style={{
                  width: 200,
                  height: 200,
                  display: 'block',
                  borderRadius: '4px',
                }}
              />
              <Stack>
                <Link to={`/${language}/news/${item.slug}`}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: '20px',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: 'normal',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Link>

                <Typography
                  variant="body2"
                  component={'span'}
                  sx={{
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    textTransform: 'uppercase',
                  }}
                >
                  <PortableText value={item.description[0]} />
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default News;
