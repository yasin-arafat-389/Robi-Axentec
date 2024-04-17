import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-black border-b"
        style={{ borderColor: "rgba(255, 255, 255, 0.25)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between pb-5">
            <div>
              <Image src={"/logo.png"} alt="" width={172} height={86} />
            </div>

            <div className="text-white">
              <h1 className="text-[24px] font-medium">We are here to Assist</h1>
              <div className="flex mt-3 gap-3">
                <FaFacebookF className="text-[25px]" />
                <FaLinkedinIn className="text-[25px]" />
                <TfiYoutube className="text-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="flex flex-wrap text-white py-8 justify-center">
          <div
            className="left border-r px-[90px] w-1/3"
            style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <h1 className="text-[18px] font-medium mb-8">About</h1>

            <div className="text-[14px] font-normal flex flex-col gap-4 text-[#ffffffd8]">
              <h1 className="cursor-pointer hover:text-[#fff]">
                About exentec PLC
              </h1>
              <h1 className="cursor-pointer hover:text-[#fff]">Shareholders</h1>
              <h1 className="cursor-pointer hover:text-[#fff]">
                Company Profile
              </h1>
              <h1 className="cursor-pointer hover:text-[#fff]">
                Corporate Responsibility
              </h1>
              <h1 className="cursor-pointer hover:text-[#fff]">Career</h1>
            </div>
          </div>

          <div
            className="center border-r px-[90px] w-1/3"
            style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <h1 className="text-[18px] font-medium mb-8">Useful Links</h1>

            <div className="text-[14px] font-normal flex flex-col gap-4 text-[#ffffffd8]">
              <h1 className="cursor-pointer hover:text-[#fff]">Contact Us</h1>
              <h1 className="cursor-pointer hover:text-[#fff]">Shareholders</h1>
              <h1 className="cursor-pointer hover:text-[#fff]">Notice Board</h1>
              <h1 className="cursor-pointer hover:text-[#fff]">
                Customer Service
              </h1>
              <h1 className="cursor-pointer hover:text-[#fff]">
                Terms & Conditions
              </h1>
            </div>
          </div>

          <div className="right px-[90px] w-1/3">
            <h1 className="text-[18px] font-medium mb-8">Popular Links</h1>

            <div className="text-[14px] font-normal flex flex-col gap-4 text-[#ffffffd8]">
              <h1 className="cursor-pointer hover:text-[#fff]">My Offer</h1>
              <h1 className="cursor-pointer hover:text-[#fff]">
                Internet Packs
              </h1>
              <h1 className="cursor-pointer hover:text-[#fff]">
                Store Locator
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-black border-t"
        style={{ borderColor: "rgba(255, 255, 255, 0.25)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between py-8">
            <h1 className="text-white text-[14px] font-normal">
              © 2024 axentec PLC
            </h1>

            <div className="text-white text-[14px] flex gap-7 font-normal">
              <h1 className="cursor-pointer">Privacy Notice</h1>
              <h1 className="cursor-pointer">Sitemap</h1>
              <h1 className="cursor-pointer">Terms of Use</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
