import Header from "../Header/Header";
import NewsSection from "../NewsSection/NewsSection";
import QuotSection from "../QuotSection/QuotSection";
import WinnersSection from "../WinnersSection/WinnersSection";
import Hero from "../Hero/Hero";
import ResultsSection from "../ResultsSection/ResultsSection";
import SponsorsSection from "../SponsorsSection/SponsorsSection";
import Footer from "../Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <NewsSection />
      <QuotSection />
      <WinnersSection />
      <ResultsSection />
      <SponsorsSection />
      <Footer />
    </>
  );
};

export default MainPage;
