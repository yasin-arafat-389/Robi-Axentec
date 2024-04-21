import Image from "next/image";

const ResponsiveLetsTalk = () => {
  return (
    <div className="bg-black text-white w-full h-[400px] py-20">
      <div>
        <video
          src="letsTalkVideo.mov"
          autoPlay
          muted
          loop
          className="absolute"
        ></video>

        <div className="relative">
          <div className="relative inline-block top-14 left-14">
            <Image src={"/letsTalkImage.png"} alt="" width={150} height={150} />
          </div>

          <div className="relative inline-block top-[63px] left-16">
            <h1 className="text-[20px] font-bold text-white">
              Talk to an expert
            </h1>

            <p className="text-[12px] font-normal text-white my-3 w-[200px]">
              Contact us today and one of our experts will help you choose the
              right solutions for your business
            </p>

            <div class="group flex gap-3 items-center cursor-pointer">
              <span class="text-white font-medium text-[15px]">Contact Us</span>
              <div class="w-4 h-4 bg-white flex justify-center items-center relative transition-transform transform-gpu group-hover:translate-x-4 duration-500">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  class="text-black font-medium text-[25px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLetsTalk;
