import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NewsSection from '../NewsSection/NewsSection';
import QuotSection from '../QuotSection/QuotSection';
import WinnersSection from '../WinnersSection/WinnersSection';
import Hero from '../Hero/Hero';
import ResultsSection from '../ResultsSection/ResultsSection';
import SponsorsSection from '../SponsorsSection/SponsorsSection';
import { useHomeData } from '../../store';
import { useLiveQuery } from '@sanity/preview-kit';
import { homeQuery } from '../../api/query';

const MainPage = () => {
  const { getData, getPreview } = useHomeData();
  const {
    i18n: { language },
  } = useTranslation();

  const [data] = useLiveQuery(null, homeQuery, { language });

  useEffect(() => {
    getData(language);
  }, [getData, language]);

  useEffect(() => {
    if (data) {
      getPreview(data);
    }
  }, [data]);

  return (
    <>
      <Hero />
      <NewsSection />
      <QuotSection />
      <WinnersSection />
      <ResultsSection />
      <SponsorsSection />
    </>
  );
};

export default MainPage;
