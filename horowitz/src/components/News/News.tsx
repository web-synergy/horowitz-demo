import { useState, useEffect } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { getNews } from '../../api';
import { useTranslation } from 'react-i18next';
import { INews } from '../../api';
import { urlFor } from '../../lib/client';
import { PortableText } from '@portabletext/react';

const News = () => {
  const [news, setNews] = useState<INews[]>([] as INews[]);
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      const data = await getNews(language);
      setNews(data);
    };
    getData();
  }, [language]);

  console.log(news);
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
                  height: 'auto',
                  display: 'block',
                  borderRadius: '4px',
                }}
              />
              <Stack>
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
