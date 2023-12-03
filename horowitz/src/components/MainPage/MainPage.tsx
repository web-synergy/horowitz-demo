import Header from "../Header/Header";
import NewsSection from "../NewsSection/NewsSection";
import QuotSection from "../QuotSection/QuotSection";
import WinnersSection from "../WinnersSection/WinnersSection";
import Hero from "../Hero/Hero";
import ResultsSection from "../ResultsSection/ResultsSection";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <NewsSection />
      <QuotSection />
      <WinnersSection />
      <ResultsSection />
    </div>
  );
};

export default MainPage;
