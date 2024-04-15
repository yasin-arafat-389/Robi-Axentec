import Attributes from "@/components/Attributes/Attributes";
import ClientPortfolio from "@/components/ClientPortfolio/ClientPortfolio";
import SwiperCarousel from "@/components/HeroSlider/Swiper";
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
    </div>
  );
}
