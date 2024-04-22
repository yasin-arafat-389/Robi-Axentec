"use client";

import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";
import { useEffect, useState } from "react";
import MobileNav from "../ResponsiveComponents/MobileNav/MobileNav";
import { FaLocationArrow } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoDocumentText } from "react-icons/io5";
import { FaBug } from "react-icons/fa6";
import { PiDiamondsFourFill } from "react-icons/pi";

const Navbar = () => {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed w-full top-0 z-50 hidden md:flex`}
        style={{
          background: scrollBackground
            ? "#000"
            : "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.25) 46.32%, #000000 100%)",
        }}
      >
        <div className="w-[95%] mx-auto flex justify-between">
          <div className="flex items-center">
            <Image
              src={"/logo.png"}
              width={128}
              height={64}
              alt="Logo"
              className="cursor-pointer"
            />
          </div>

          <div>
            <ul className="flex gap-10">
              <li class="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-8 abiss">
                <div className="text-white flex gap-2 items-center">
                  <a className="font-medium text-[16px]">About Us</a>
                  <IoIosArrowDown />
                </div>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul
                    className="relative top-[33px] bg-green-500 shadow p-6 w-[200px] rounded-lg"
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      backdropFilter: "blur(37.5px)",
                    }}
                  >
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                        Our Story
                      </a>
                    </li>
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                        Management Body
                      </a>
                    </li>
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer">
                        Achievements
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-8 abiss">
                <div className="text-white flex gap-2 items-center">
                  <a className="font-medium text-[16px]">
                    Products and services
                  </a>
                  <IoIosArrowDown />
                </div>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul
                    className="relative top-[33px] bg-green-500 shadow p-6 w-[200px] rounded-lg"
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      backdropFilter: "blur(37.5px)",
                    }}
                  >
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                        Cloud Solutions
                      </a>
                    </li>
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                        IoT and Smart Solutions
                      </a>
                    </li>
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer">
                        AdTech and Data Analytics
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-8 abiss">
                <div className="text-white flex gap-2 items-center">
                  <a className="font-medium text-[16px]">Newsroom</a>
                  <IoIosArrowDown />
                </div>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul
                    className="relative top-[33px] bg-green-500 shadow p-6 w-[200px] rounded-lg"
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      backdropFilter: "blur(37.5px)",
                    }}
                  >
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                        Connectivity
                      </a>
                    </li>
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                        ICT Solutions
                      </a>
                    </li>
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer pb-4">
                        Cloud Solutions
                      </a>
                    </li>
                    <li className="py-1">
                      <a className="block text-[16px] font-medium text-white cursor-pointer">
                        Selfcare Portal
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="text-white font-medium text-[16px] cursor-pointer py-8">
                Contact Us
              </li>

              <li className="text-white font-medium text-[16px] cursor-pointer py-8">
                Career
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <IoSearchSharp className="text-white text-[18px] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Responsive Navbar */}
      <div
        className="flex md:hidden py-2 w-full fixed top-0 z-50"
        style={{
          background: scrollBackground
            ? "#000"
            : "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.25) 46.32%, #000000 100%)",
        }}
      >
        <div className="w-[90%] mx-auto">
          <MobileNav />
        </div>
      </div>

      <button
        style={{
          transform: "rotate(-90deg) translate(50%, -50%)",
          transformOrigin: "100% 50%",
        }}
        onClick={togglePopup}
        class="fixed top-1/2 right-0 transform -translate-y-1/2 bg-[#5B3FE0] text-white px-4 py-2 rounded-t-lg z-[500]"
      >
        <div className="flex gap-2 items-center">
          <FaLocationArrow
            style={{
              transform: "rotate(45deg)",
            }}
          />

          <h1>Feedback</h1>
        </div>
      </button>

      {isOpen && (
        <>
          <div
            onClick={togglePopup}
            className="fixed inset-0 z-[400]"
            style={{ background: "rgba(128, 144, 160, .7)" }}
          ></div>

          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-[500]">
            <div className="flex justify-end m-5">
              <button>
                <RxCross2 className="text-xl" onClick={togglePopup} />
              </button>
            </div>

            {/* Feedback option 1 */}
            <div className="flex justify-center items-center gap-5 m-5">
              <div className="border border-[#ACBDCE] p-2 w-[40px] h-[40px] rounded-full">
                <IoDocumentText className="text-[#ACBDCE] text-2xl" />
              </div>

              <div>
                <h1>General Feedback</h1>
                <p className="text-[#ACBDCE] text-[14px]">
                  Give general feedback of this page
                </p>
              </div>
            </div>

            {/* Feedback option 2 */}
            <div className="flex items-center gap-5 m-5">
              <div className="border border-[#ACBDCE] p-2 w-[40px] h-[40px] rounded-full">
                <FaBug className="text-[#ACBDCE] text-2xl" />
              </div>

              <div>
                <h1>Report a bug</h1>
                <p className="text-[#ACBDCE] text-[14px]">
                  Let us know {`what's`} broken
                </p>
              </div>
            </div>

            {/* Feedback option 3 */}
            <div className="flex items-center gap-5 m-5">
              <div className="border border-[#ACBDCE] p-2 w-[40px] h-[40px] rounded-full">
                <PiDiamondsFourFill className="text-[#ACBDCE] text-2xl" />
              </div>

              <div>
                <h1>Feature Request</h1>
                <p className="text-[#ACBDCE] text-[14px]">
                  Tell us how we can improve.
                </p>
              </div>
            </div>

            <h1 className="text-[#ACBDCE] text-[14px] text-center pb-5 cursor-pointer hover:text-blackgit add .">
              Powered by Userback
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
