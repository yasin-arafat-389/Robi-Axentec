"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./Attributes.css";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";

const Attributes = () => {
  let ref = useRef(null);
  let isInView = useInView(ref);
  let animationControls = useAnimation();

  const variant = {
    initial: {
      x: -550,
    },
    animate: {
      x: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      animationControls.start("animate");
    }
  }, [animationControls, isInView]);

  return (
    <div className="bg-black" ref={ref}>
      {/* Slide attributes */}
      <div className="w-[80%] mx-auto py-10 group">
        <div className="flex text-[96px] font-bold text-white transition-transform duration-500 group-hover:translate-x-[60px]">
          <div className="overflow-hidden">
            <motion.h1
              variants={variant}
              initial="initial"
              animate={animationControls}
              transition={{ duration: 1 }}
            >
              Innovate,
            </motion.h1>{" "}
          </div>
          &nbsp;
          <div className="overflow-hidden">
            <motion.h1
              variants={variant}
              initial="initial"
              animate={animationControls}
              transition={{ duration: 1 }}
            >
              Integrate
            </motion.h1>
          </div>
        </div>

        <div className="flex justify-end text-[96px] font-bold text-white">
          <div className="overflow-hidden transition-transform duration-500 group-hover:translate-x-[-60px]">
            <motion.h1
              variants={variant}
              initial="initial"
              animate={animationControls}
              transition={{ duration: 1 }}
            >
              Inspire
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Attributes Card */}
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="attrCard h-[460px] w-full relative overflow-hidden group">
            <Image
              layout="fill"
              src="/card-bg-1.jpg"
              alt=""
              className="object-cover absolute top-0 left-0 w-full h-full attrImage"
            />

            <div className="absolute top-0 left-0 w-full h-full py-10 px-5">
              <h1 className="text-[18px] font-normal text-white mb-6">
                Business
              </h1>
              <h1 className="text-[24px] font-medium text-white">
                Experience superior service that serves what your Enterprise
                needs
              </h1>

              <div className="mt-5 translate-x-[300px] group-hover:translate-x-[0px] duration-700">
                <h1 className="text-[16px] font-medium text-white">
                  A global retailer and Accenture co-created a multiyear
                  inclusion and diversity strategy to facilitate a greater sense
                  of belonging for their people.
                </h1>
              </div>

              <div>
                <h1 className="text-lg font-medium text-white flex items-center justify-end mt-10 cursor-pointer gap-2 opacity-0 group-hover:opacity-100 duration-700">
                  Find Out More <RxCaretRight className="text-2xl" />{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="attrCard h-[460px] w-full relative overflow-hidden group">
            <Image
              layout="fill"
              src="/card-bg-2.jpg"
              alt=""
              className="object-cover absolute top-0 left-0 w-full h-full attrImage"
            />

            <div className="absolute top-0 left-0 w-full h-full py-10 px-5">
              <h1 className="text-[18px] font-normal text-white mb-6">
                Connectivity
              </h1>
              <h1 className="text-[24px] font-medium text-white">
                Experience superior service that serves what your Enterprise
                needs
              </h1>

              <div className="mt-5 translate-x-[300px] group-hover:translate-x-[0px] duration-700">
                <h1 className="text-[16px] font-medium text-white">
                  A global retailer and Accenture co-created a multiyear
                  inclusion and diversity strategy to facilitate a greater sense
                  of belonging for their people.
                </h1>
              </div>

              <div>
                <h1 className="text-lg font-medium text-white flex items-center justify-end mt-10 cursor-pointer gap-2 opacity-0 group-hover:opacity-100 duration-700">
                  Find Out More <RxCaretRight className="text-2xl" />{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="attrCard h-[460px] w-full relative overflow-hidden group"
            style={{ background: "rgba(77, 0, 176, 1)" }}
          >
            <div className="absolute top-0 left-0 w-full h-full py-10 px-5">
              <h1 className="text-[18px] font-normal text-white mb-6">
                ICT Solutions
              </h1>
              <h1 className="text-[24px] font-medium text-white">
                Experience superior service that serves what your Enterprise
                needs
              </h1>

              <div className="mt-5 translate-x-[300px] group-hover:translate-x-[0px] duration-700">
                <h1 className="text-[16px] font-medium text-white">
                  A global retailer and Accenture co-created a multiyear
                  inclusion and diversity strategy to facilitate a greater sense
                  of belonging for their people.
                </h1>
              </div>

              <div>
                <h1 className="text-lg font-medium text-white flex items-center justify-end mt-10 cursor-pointer gap-2 opacity-0 group-hover:opacity-100 duration-700">
                  Find Out More <RxCaretRight className="text-2xl" />{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="attrCard h-[460px] w-full relative overflow-hidden group">
            <Image
              layout="fill"
              src="/card-bg-3.jpg"
              alt=""
              className="object-cover absolute top-0 left-0 w-full h-full attrImage"
            />

            <div className="absolute top-0 left-0 w-full h-full py-10 px-5">
              <h1 className="text-[18px] font-normal text-white mb-6">
                Cloud Solutions
              </h1>
              <h1 className="text-[24px] font-medium text-white">
                Experience superior service that serves what your Enterprise
                needs
              </h1>

              <div className="mt-5 translate-x-[300px] group-hover:translate-x-[0px] duration-700">
                <h1 className="text-[16px] font-medium text-white">
                  A global retailer and Accenture co-created a multiyear
                  inclusion and diversity strategy to facilitate a greater sense
                  of belonging for their people.
                </h1>
              </div>

              <div>
                <h1 className="text-lg font-medium text-white flex items-center justify-end mt-10 cursor-pointer gap-2 opacity-0 group-hover:opacity-100 duration-700">
                  Find Out More <RxCaretRight className="text-2xl" />{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="attrCard h-[460px] w-full relative overflow-hidden group"
            style={{ background: "rgba(0, 98, 4, 1)" }}
          >
            <div className="absolute top-0 left-0 w-full h-full py-10 px-5">
              <h1 className="text-[18px] font-normal text-white mb-6">
                Selfcare Portal
              </h1>
              <h1 className="text-[24px] font-medium text-white">
                Experience superior service that serves what your Enterprise
                needs
              </h1>

              <div className="mt-5 translate-x-[300px] group-hover:translate-x-[0px] duration-700">
                <h1 className="text-[16px] font-medium text-white">
                  A global retailer and Accenture co-created a multiyear
                  inclusion and diversity strategy to facilitate a greater sense
                  of belonging for their people.
                </h1>
              </div>

              <div>
                <h1 className="text-lg font-medium text-white flex items-center justify-end mt-10 cursor-pointer gap-2 opacity-0 group-hover:opacity-100 duration-700">
                  Find Out More <RxCaretRight className="text-2xl" />{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="attrCard h-[460px] w-full relative overflow-hidden group">
            <Image
              layout="fill"
              src="/card-bg-3.jpg"
              alt=""
              className="object-cover absolute top-0 left-0 w-full h-full attrImage"
            />

            <div className="absolute top-0 left-0 w-full h-full py-10 px-5">
              <h1 className="text-[18px] font-normal text-white mb-6">
                Cloud Solutions
              </h1>
              <h1 className="text-[24px] font-medium text-white">
                Experience superior service that serves what your Enterprise
                needs
              </h1>

              <div className="mt-5 translate-x-[300px] group-hover:translate-x-[0px] duration-700">
                <h1 className="text-[16px] font-medium text-white">
                  A global retailer and Accenture co-created a multiyear
                  inclusion and diversity strategy to facilitate a greater sense
                  of belonging for their people.
                </h1>
              </div>

              <div>
                <h1 className="text-lg font-medium text-white flex items-center justify-end mt-10 cursor-pointer gap-2 opacity-0 group-hover:opacity-100 duration-700">
                  Find Out More <RxCaretRight className="text-2xl" />{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="attrCard h-[460px] w-full relative overflow-hidden group">
            <Image
              layout="fill"
              src="/card-bg-4.jpg"
              alt=""
              className="object-cover absolute top-0 left-0 w-full h-full attrImage"
            />

            <div className="absolute top-0 left-0 w-full h-full py-10 px-5">
              <h1 className="text-[18px] font-normal text-white mb-6">
                IOT and Smart Solutions
              </h1>
              <h1 className="text-[24px] font-medium text-white">
                Experience superior service that serves what your Enterprise
                needs
              </h1>

              <div className="mt-5 translate-x-[300px] group-hover:translate-x-[0px] duration-700">
                <h1 className="text-[16px] font-medium text-white">
                  A global retailer and Accenture co-created a multiyear
                  inclusion and diversity strategy to facilitate a greater sense
                  of belonging for their people.
                </h1>
              </div>

              <div>
                <h1 className="text-lg font-medium text-white flex items-center justify-end mt-10 cursor-pointer gap-2 opacity-0 group-hover:opacity-100 duration-700">
                  Find Out More <RxCaretRight className="text-2xl" />{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div
            className="attrCard h-[460px] w-full relative overflow-hidden group"
            style={{ background: "rgba(99, 18, 0, 1)" }}
          >
            <div className="absolute top-0 left-0 w-full h-full py-10 px-5">
              <h1 className="text-[18px] font-normal text-white mb-6">
                AdTech & Data Analytics
              </h1>
              <h1 className="text-[24px] font-medium text-white">
                Experience superior service that serves what your Enterprise
                needs
              </h1>

              <div className="mt-5 translate-x-[300px] group-hover:translate-x-[0px] duration-700">
                <h1 className="text-[16px] font-medium text-white">
                  A global retailer and Accenture co-created a multiyear
                  inclusion and diversity strategy to facilitate a greater sense
                  of belonging for their people.
                </h1>
              </div>

              <div>
                <h1 className="text-lg font-medium text-white flex items-center justify-end mt-10 cursor-pointer gap-2 opacity-0 group-hover:opacity-100 duration-700">
                  Find Out More <RxCaretRight className="text-2xl" />{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
