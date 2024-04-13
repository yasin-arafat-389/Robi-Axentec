import Attributes from "@/components/Attributes/Attributes";
import SwiperCarousel from "@/components/HeroSlider/Swiper";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SwiperCarousel />
      <Attributes />
    </div>
  );
}
