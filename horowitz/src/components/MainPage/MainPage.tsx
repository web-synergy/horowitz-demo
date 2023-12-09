import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NewsSection from "../NewsSection/NewsSection";
import QuotSection from "../QuotSection/QuotSection";
import WinnersSection from "../WinnersSection/WinnersSection";
import Hero from "../Hero/Hero";
import ResultsSection from "../ResultsSection/ResultsSection";
import SponsorsSection from "../SponsorsSection/SponsorsSection";
import { useHomeData } from "../../store";

const MainPage = () => {
  const { getData } = useHomeData();
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    getData(language);
  }, [getData, language]);

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
