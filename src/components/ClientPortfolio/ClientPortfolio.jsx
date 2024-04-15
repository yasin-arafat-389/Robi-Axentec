"use client";

import { RxCaretRight } from "react-icons/rx";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const ClientPortfolio = () => {
  let tabs = [
    {
      tabName: "ICT Solutions",
    },
    {
      tabName: "Connectivity",
    },
    {
      tabName: "Cloud Solutions",
    },
    {
      tabName: "Data Analytics",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-black">
      <div>
        <h1 className="text-[42px] font-bold text-center text-white">
          Discover our client portfolio
        </h1>

        <div className="group flex gap-3 items-center justify-center cursor-pointer mt-7">
          <span className="text-white font-medium text-[18px] transition-transform group-hover:translate-x-[-8px] duration-500">
            Find Out More
          </span>

          <div className="w-6 h-6 bg-white flex justify-center items-center relative transition-transform transform-gpu group-hover:translate-x-2 duration-500">
            <RxCaretRight className="text-black font-medium text-[25px]" />
          </div>
        </div>

        {/* Marquee */}
        <div className="Marquee">
          <div className="w-[90%] mx-auto mt-12">
            <Marquee>
              <div style={{ marginRight: "30px" }}>
                <Image src={"/marquee-1.svg"} alt="" width={214} height={64} />
              </div>
              <div style={{ marginRight: "30px" }}>
                <Image src={"/marquee-2.svg"} alt="" width={214} height={64} />
              </div>
              <div style={{ marginRight: "30px" }}>
                <Image src={"/marquee-1.svg"} alt="" width={214} height={64} />
              </div>
              <div style={{ marginRight: "30px" }}>
                <Image src={"/marquee-2.svg"} alt="" width={214} height={64} />
              </div>
              <div style={{ marginRight: "30px" }}>
                <Image src={"/marquee-1.svg"} alt="" width={214} height={64} />
              </div>
              <div style={{ marginRight: "30px" }}>
                <Image src={"/marquee-2.svg"} alt="" width={214} height={64} />
              </div>
            </Marquee>
          </div>
        </div>

        {/* Tab */}
        <div className="mt-[90px]">
          <div className="text-white flex justify-center items-center gap-2">
            <h1 className="text-[18px] font-medium text-center">
              Our Solutions
            </h1>
            <span className="w-11 h-[1px] bg-white"></span>
          </div>

          <h1 className="text-white text-[42px] font-bold text-center my-3">
            Products & Services
          </h1>

          <span className="text-white text-[16px] font-normal text-center flex w-[630px] mx-auto">
            The facts of our service and solution provider can vary based on the
            specific company, its offerings, and its market focus.
          </span>

          <div className="mt-14">
            <div className="flex flex-col items-center">
              <div className="flex">
                {tabs.map((item, index) => (
                  <button
                    key={index}
                    className={`py-4 px-6 text-white focus:outline-none text-[24px] font-medium ${
                      activeTab === index ? "border-b-2 border-white" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {item.tabName}
                  </button>
                ))}
              </div>

              <div className="flex flex-col mt-10">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className={`${
                      activeTab === index ? "block" : "hidden"
                    } text-gray-700`}
                  >
                    <div className="flex gap-6 w-[90%] mx-auto">
                      <div
                        className="leftPart w-1/2 flex flex-col gap-10 py-10 px-8 rounded-2xl"
                        style={{
                          background:
                            "linear-gradient(212.4deg, #4D00B0 6.5%, #3D0059 92.31%)",
                        }}
                      >
                        <div className="flex gap-5">
                          <div className="flex items-center">
                            <Image
                              src={"/product-1.png"}
                              alt=""
                              width={48}
                              height={48}
                            />
                          </div>

                          <div>
                            <h1 className="text-[20px] font-bold text-white">
                              Google Workspace
                            </h1>

                            <p className="text-[16px] font-normal text-white mt-2">
                              Unleashing Productivity, Powering Collaboration.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-5">
                          <div className="flex items-center">
                            <Image
                              src={"/product-2.png"}
                              alt=""
                              width={48}
                              height={48}
                            />
                          </div>

                          <div>
                            <h1 className="text-[20px] font-bold text-white">
                              Microsoft Solutions
                            </h1>

                            <p className="text-[16px] font-normal text-white mt-2">
                              Elevate with {`Microsoft's`} Innovative Solutions.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-5">
                          <div className="flex items-center">
                            <Image
                              src={"/product-3.png"}
                              alt=""
                              width={48}
                              height={48}
                            />
                          </div>

                          <div>
                            <h1 className="text-[20px] font-bold text-white">
                              Robi Secure Connect
                            </h1>

                            <p className="text-[16px] font-normal text-white mt-2">
                              An efficient & secured point-to-point data
                              connection.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-5">
                          <div className="flex items-center">
                            <Image
                              src={"/product-4.png"}
                              alt=""
                              width={48}
                              height={48}
                            />
                          </div>

                          <div>
                            <h1 className="text-[20px] font-bold text-white">
                              Business Process Automation
                            </h1>

                            <p className="text-[16px] font-normal text-white mt-2">
                              Robi BPA helps organizational transformation that
                              aims to drive efficiency.
                            </p>
                          </div>
                        </div>

                        <div className="group flex gap-3 items-center cursor-pointer mt-5">
                          <span className="text-white font-medium text-[18px]">
                            Find Out More
                          </span>

                          <div className="w-6 h-6 bg-white flex justify-center items-center relative transition-transform transform-gpu group-hover:translate-x-4 duration-500">
                            <RxCaretRight className="text-black font-medium text-[25px]" />
                          </div>
                        </div>
                      </div>

                      <div className="rightPart w-1/2">
                        <img
                          src="heroImage.jpg"
                          alt=""
                          className="object-cover h-full rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortfolio;
