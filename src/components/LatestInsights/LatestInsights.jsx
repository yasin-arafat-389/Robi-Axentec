"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "./LatestInsights.css";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const LatestInsights = () => {
  let blogs = [
    {
      thumbnail: "/blog-1.jpg",
      title:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      thumbnail: "/blog-2.jpg",
      title:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      thumbnail: "/blog-3.jpg",
      title:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      thumbnail: "/blog-1.jpg",
      title:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      thumbnail: "/blog-2.jpg",
      title:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      thumbnail: "/blog-3.jpg",
      title:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="pt-20">
        <div className="text-white flex justify-center items-center gap-2">
          <h1 className="text-[18px] font-medium text-center">Our Solutions</h1>
          <span className="w-11 h-[1px] bg-white"></span>
        </div>

        <h1 className="text-white text-[42px] font-bold text-center py-3">
          Latest Insights
        </h1>
      </div>

      {/* Blog Slider */}
      <div className="pt-5">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="blogsSlider"
        >
          {blogs.map((slide, index) => (
            <>
              <SwiperSlide key={index}>
                <div className="text-white flex flex-col justify-center items-center w-full">
                  <div className="w-full h-52 relative">
                    <Image
                      src={slide.thumbnail}
                      alt=""
                      fill={true}
                      objectFit="cover"
                      className="rounded-t-2xl"
                    />
                  </div>

                  <div
                    className="bg-white p-6 rounded-b-2xl"
                    style={{ color: "rgba(34, 30, 31, 1)" }}
                  >
                    <h1 className="text-[18px] font-medium">{slide.title}</h1>

                    <p
                      className="text-[14px] font-normal mt-4"
                      style={{ color: "rgba(88, 88, 88, 1)" }}
                    >
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestInsights;
