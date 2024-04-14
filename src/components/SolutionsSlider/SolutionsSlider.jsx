"use client";

import "./SolutionsSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const SolutionsSlider = () => {
  let services = [
    {
      thumbnail: "solution-1.svg",
      name: "Aerospace & Defense",
    },
    {
      thumbnail: "solution-2.svg",
      name: "Automotive",
    },
    {
      thumbnail: "solution-3.svg",
      name: "Apparel & Footwear",
    },
    {
      thumbnail: "solution-4.svg",
      name: "Food & Beverage",
    },
    {
      thumbnail: "solution-5.svg",
      name: "Distribution",
    },
    {
      thumbnail: "solution-6.svg",
      name: "Healthcare",
    },
    {
      thumbnail: "solution-7.svg",
      name: "High Tech",
    },
    {
      thumbnail: "solution-7.svg",
      name: "Industrial Manufacturing",
    },
  ];

  return (
    <div className="bg-black">
      <div className="pt-28">
        <h1 className="text-[42px] font-bold text-white text-center">
          Solutions Spotlight for Industries
        </h1>

        <div>
          <Swiper
            slidesPerView={7}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="solutionSlider"
          >
            {services.map((slide, index) => (
              <>
                <SwiperSlide key={index}>
                  <div className="text-white flex flex-col gap-3 justify-center items-center w-full h-full">
                    <div>
                      <Image
                        src={slide.thumbnail}
                        alt=""
                        width={74}
                        height={74}
                      />
                    </div>

                    <div>
                      <h1 className="text-white font-normal text-[16px] text-center">
                        {slide.name}
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSlider;
