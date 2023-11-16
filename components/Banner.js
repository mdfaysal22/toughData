"use client";
import Image from "next/image";
import banner from "@//assets/banner.png";

function Banner() {
  return (
    <>
    <div className="mt-10">
      {/* <div className="relative"> */}
      <div>
        <div className="flex justify-between items-start">
          <div className="mt-16">
            <h1 className="text-[4.75rem] font-bold">
              <span>Free TikTok Profile</span>
              <br />
              <span className="bg-[#C34043] text-white">Scraper</span>
            </h1>
            <p className="text-[1.25rem] mt-8">
              Instantly extract TikTok profile and video details along with
              email, <br /> engagement rate, and our AI prediction, if
              they&apos;re a bot.
            </p>
          </div>
          <div>
            <Image src={banner} alt="" />
          </div>
        </div>
      </div>

      <div className="h-[37rem] text-white -mt-[17rem] left-0 -bottom-[18.75rem]  w-[90rem] mx-auto rounded-[3rem] bg">
        <div className="bg-second py-12 px-8 right-0 ">
        <h1 className="text-[3rem] uppercase tracking-[1rem] text-white font-bold">
          Start<span className="text-[#C34043] bg-white py-3"> scraping</span>{" "}
          for <br /> free
        </h1>
        <p className="text-[1.25rem] mt-2 text-white">
          The results will be exported to Excel and delivered via email.
        </p>
        <form className="mt-4">
          <div>
            <label className="my-3">Tiktok User Name</label>
            <br />
            <input
              className="shadow bg-[#d2474a]  appearance-none border rounded py-4  px-3 w-[30%] mt-3 placeholder:text-gray-300 placeholder:font-light text-white leading-tight focus:outline-none focus:shadow-outline"
              id="input"
              type="text"
              placeholder="E.g @therock"
            />
          </div>

          <div className="mt-3">
            <label className="my-4">Your Email</label>
            <br />
            <input
              className="shadow bg-[#d2474a]  appearance-none border rounded py-4  px-3 w-[30%] mt-3 placeholder:text-gray-300 placeholder:font-light text-white leading-tight focus:outline-none focus:shadow-outline"
              id="input"
              type="text"
              placeholder="Example@gmail.com"
            />
          </div>

          <div className="flex justify-start items-center mt-4">
          <input
        type="checkbox"
        className="form-checkbox appearance-none border-2 rounded-md  h-5 w-5 checked:bg-white "
      />
      <label className="ml-2">I agree to the <span className="font-bold underline">terms of service.</span></label>
          </div>
        </form>

        <button className="px-5 py-3 text-[#C34043] cursor-pointer rounded-[3.25rem] font-light mt-6 tracking-wider bg-white text-[1.25rem]">Scrape Profile</button>
        </div>
      </div>
      </div>
    {/* </div> */}
    </>
  );
}

export default Banner;
