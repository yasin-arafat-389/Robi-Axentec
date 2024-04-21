"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const MobileFooter = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform text-white`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  let footerContents = [
    {
      id: 1,
      category: "About",
      menus: [
        "About exentec PLC",
        "Shareholders",
        "Company Profile",
        "Corporate Responsibility",
        "Career",
      ],
    },
    {
      id: 2,
      category: "Useful Links",
      menus: [
        "Contact Us",
        "Shareholders",
        "Notice Board",
        "Customer Service",
        "Terms & Conditions",
      ],
    },
    {
      id: 3,
      category: "Popular Links",
      menus: ["My Offer", "Internet Packs", "Store Locator"],
    },
  ];

  return (
    <div className="bg-black">
      <div className="flex justify-center">
        <Image src={"/logo.png"} alt="" width={130} height={86} />
      </div>

      <div>
        <div className="text-white flex justify-center flex-col items-center mt-7">
          <h1 className="text-[18px] font-medium">We are here to Assist</h1>
          <div className="flex mt-3 gap-3">
            <FaFacebookF className="text-[25px]" />
            <FaLinkedinIn className="text-[25px]" />
            <TfiYoutube className="text-[25px]" />
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div>
        <div className="w-[80%] flex flex-col gap-6 mx-auto mt-8">
          {footerContents.map((item, index) => (
            <Accordion
              key={index}
              open={open === item.id}
              icon={<Icon id={item.id} open={open} />}
              className="bg-[#FFFFFF1A] rounded-lg"
            >
              <AccordionHeader
                onClick={() => handleOpen(item.id)}
                className="border-none px-6 !text-white"
              >
                {item.category}
              </AccordionHeader>
              <AccordionBody>
                <div className="flex flex-col justify-center gap-4">
                  {item.menus.map((item, index) => (
                    <h1 key={index} className="text-white text-[15px] ml-6">
                      {item}
                    </h1>
                  ))}
                </div>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="flex flex-col text-white items-center py-10 gap-4">
        <h1 className="text-[14px] font-normal">© 2023 Robi AxEnTec Limited</h1>

        <div className="flex gap-7 justify-center">
          <h1>Privacy Notice</h1>
          <h1>Sitemap</h1>
          <h1>Term of Use</h1>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
