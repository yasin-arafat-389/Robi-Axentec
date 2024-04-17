import Attributes from "@/components/Attributes/Attributes";
import ClientPortfolio from "@/components/ClientPortfolio/ClientPortfolio";
import Footer from "@/components/Footer/Footer";
import SwiperCarousel from "@/components/HeroSlider/Swiper";
import LatestInsights from "@/components/LatestInsights/LatestInsights";
import LetsTalk from "@/components/LetsTalk/LetsTalk";
import Navbar from "@/components/Navbar/Navbar";
import SolutionsSlider from "@/components/SolutionsSlider/SolutionsSlider";
import Unique from "@/components/Unique/Unique";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SwiperCarousel />
      <Attributes />
      <SolutionsSlider />
      <Unique />
      <ClientPortfolio />
      <LatestInsights />
      <LetsTalk />
      <Footer />
    </div>
  );
}
