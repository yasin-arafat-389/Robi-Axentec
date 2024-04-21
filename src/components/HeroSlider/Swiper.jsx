"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { RxCaretRight } from "react-icons/rx";
import "./Swiper.css";

const SwiperCarousel = () => {
  const slides = [
    {
      thumbnail: "heroSliderImage1.jpg",
    },
    {
      thumbnail: "heroSliderImage2.jpg",
    },
    {
      thumbnail: "heroSliderImage3.jpg",
    },
    {
      thumbnail: "heroSliderImage4.jpg",
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(1.07);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1.07);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <>
            <SwiperSlide
              key={index}
              style={{
                background: `url(${slide.thumbnail})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="h-full flex items-center ml-12">
                <div>
                  <h1 className="text-white text-[35px] md:text-[54px] font-bold">
                    Own The Future
                  </h1>

                  <p className="text-white font-normal text-[16px] md:text-[18px] mt-5">
                    How can network modernization help communications service{" "}
                    <br />
                    providers in their sustainability strategies?
                  </p>

                  <div className="group flex gap-3 items-center cursor-pointer mt-5">
                    <span className="text-white font-medium text-[18px]">
                      Find Out More
                    </span>

                    <div className="w-6 h-6 bg-white flex justify-center items-center relative transition-transform transform-gpu group-hover:translate-x-4 duration-500">
                      <RxCaretRight className="text-black font-medium text-[25px]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
