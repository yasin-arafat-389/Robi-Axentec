"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import "./Unique.css";

const Unique = () => {
  const divRef = useRef(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsOnScreen(true);
      } else {
        setIsOnScreen(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    const currentDivRef = divRef.current;
    return () => {
      if (currentDivRef) {
        observer.unobserve(currentDivRef);
      }
    };
  }, []);

  return (
    <div className="bg-black py-20">
      <div
        ref={divRef}
        className="text-white relative h-[720px] overflow-hidden py-10 "
      >
        <video
          className="absolute top-0 bottom-0 left-0 right-0 object-cover w-screen overflow-hidden h-[720px]"
          id="background-video"
          autoPlay={true}
          loop
          muted
        >
          <source src="bg.mp4" type="video/mp4" />
        </video>

        <div className="w-full h-full relative flex justify-end items-center">
          <div
            className={`content w-[100%] md:w-[50%] px-10 md:px-20 ${
              isOnScreen && "unique-fadeEffect"
            }`}
          >
            <h1 className="text-[30px] md:text-[40px] font-bold">
              What makes us unique?
            </h1>

            <p className="text-[18px] md:text-[20px] font-normal my-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </p>

            <div className="group flex gap-3 items-center cursor-pointer">
              <span className="text-white font-medium text-[18px] transition-transform group-hover:translate-x-[-8px] duration-500">
                Find Out More
              </span>

              <div className="w-6 h-6 bg-white flex justify-center items-center relative transition-transform transform-gpu group-hover:translate-x-2 duration-500">
                <RxCaretRight className="text-black font-medium text-[25px]" />
              </div>
            </div>
          </div>

          <div
            className={`absolute w-full h-full  left-0  ${
              isOnScreen ? "top-[26%]" : "top-0"
            } overflow-hidden transition-all duration-700 hidden md:flex`}
          >
            <Image
              src={"/why.jpg"}
              alt="about-image"
              fill
              className={`object-cover ${
                isOnScreen ? "!h-1/2 !w-1/2" : "h-full w-full"
              }   overflow-hidden transition-all duration-700`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
