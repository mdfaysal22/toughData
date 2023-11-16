"use client"
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
    const pages = [
        {path: "/", label: "Terms"},
        {path: "/", label: "Privacy"},
        {path: "/", label: "Returns"},
        {path: "/", label: "Contract"}
    ];

    const links = [
        {action : "", icon: <FaFacebook /> , name: "Facebook"},
        {action : "", icon: <FaXTwitter /> , name: "Twitter"},
        {action : "", icon: <FaGithub /> , name: "Github"}
    ]
  return (
    <div className="bg-[#eeb7b870] pt-16 pb-8 mt-16 w-full">
        <div className="text-center ">
            <ul className="flex justify-center items-center gap-4 text-[1rem] font-light">
                {
                    pages.map((page, i) => <Link href={page.path} key={i}>{page.label}</Link>)
                }
            </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
            {
                links.map((link, i) => <button key={i} className='px-5 hover:bg-[#C34043] hover:border-[#C34043] flex justify-center items-center gap-2 py-3 mt-6  border-2 border-[#828282] hover:text-white text-[#828282] cursor-pointer  rounded-[3.25rem] font-light tracking-wider text-[1rem]'>
                    {link.icon}{link.name}
                </button>)
            }
        </div>
        <div className="h-[1px] my-8 bg-[#828282] opacity-10 w-[90%] mx-auto"></div>

        <div className="text-center" >
            <p className="text-[1rem] font-thin text-[#828282]">Copyright © 2023 Toughdata LLC</p>
        </div>
    </div>
  )
}

export default Footer