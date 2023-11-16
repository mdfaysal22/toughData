"use client"
import Image from "next/image";
import banner from "@//assets/woman.png";
import { TfiArrowCircleDown } from "react-icons/tfi";

function Analytics() {
    const items = ["Export followers to Excel", "Scrape all public profile data", "Detect fake followers with AI", "Calculate engagement rate", "Extract emails of prospects"]
  return (
    <div className="bg-[#eeb7b870] py-16 my-16 w-full">
        <div className="w-[90rem] flex justify-between items-center mx-auto">
        <div>
        <Image src={banner} alt="" />
        </div>
        <div>
            <h1 className="text-[3rem] font-bold ">TikTok follower scraper with built- <br/> in analytics</h1>
            <p className="text-[#828282] text-[1.25rem] font-light">Content creation is risky. Get the data you need to thrive.</p>

            <div className="mt-12"><ul clssName="flex flex-row gap-6">
                {
                items.map((item, i) => <li className="my-2 flex justify-start items-center gap-3 font-light text-[1.25rem]" key={i}>
                    <span><TfiArrowCircleDown /></span> {item}
                </li>)
                }
            </ul></div>

            <button className='px-5 py-3 mt-12 flex-initial bg-[#C34043] cursor-pointer rounded-[3.25rem] font-semibold tracking-wider text-white text-[1.25rem]'>Try it for free!</button>
        </div>
        </div>
    </div>
  )
}

export default Analytics