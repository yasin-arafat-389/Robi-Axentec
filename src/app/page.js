import Attributes from "@/components/Attributes/Attributes";
import SwiperCarousel from "@/components/HeroSlider/Swiper";
import Navbar from "@/components/Navbar/Navbar";
import SolutionsSlider from "@/components/SolutionsSlider/SolutionsSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SwiperCarousel />
      <Attributes />
      <SolutionsSlider />
    </div>
  );
}
