"use client";

import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className="fixed w-full top-0 z-50"
      style={{
        background:
          "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.25) 46.32%, #000000 100%)",
      }}
    >
      <div className="w-[95%] mx-auto flex justify-between">
        <div>
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
            <li class="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-5 abiss">
              <div className="text-white flex gap-2 items-center">
                <a className="font-medium text-[16px]">About Us</a>
                <IoIosArrowDown />
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul
                  className="relative top-[22px] bg-green-500 shadow p-6 w-[200px] rounded-lg"
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

            <li class="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-5 abiss">
              <div className="text-white flex gap-2 items-center">
                <a className="font-medium text-[16px]">Products and services</a>
                <IoIosArrowDown />
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul
                  className="relative top-[22px] bg-green-500 shadow p-6 w-[200px] rounded-lg"
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

            <li class="group relative dropdown cursor-pointer font-bold text-base tracking-wide py-5 abiss">
              <div className="text-white flex gap-2 items-center">
                <a className="font-medium text-[16px]">Newsroom</a>
                <IoIosArrowDown />
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul
                  className="relative top-[22px] bg-green-500 shadow p-6 w-[200px] rounded-lg"
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

            <li className="text-white font-medium text-[16px] cursor-pointer py-5">
              Contact Us
            </li>

            <li className="text-white font-medium text-[16px] cursor-pointer py-5">
              Career
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <IoSearchSharp className="text-white text-[18px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
