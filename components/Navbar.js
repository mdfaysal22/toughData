"use client"
import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
   const links = [
       {path: "/services", label: "Services", icon: <MdKeyboardArrowDown size={25}/>},
       {path: "/pricing", label: "Pricing", icon: ""},
       {path: "/doc", label: "Doc", icon: ""},
       {path: "/blog", label: "Blog", icon: ""},
       {path: "/login", label: "Log in", icon: ""},


   ]
   return (
       <div className='h-[100px] w-full '>
           <div className="flex justify-between items-center h-full">
           <div>
               <Image src={logo} className='cursor-pointer' width={231} height={27} alt='Logo'></Image>
           </div>
           <div className="flex justify-center item-center gap-5">
               {
                   links.map((link, i )=> <Link className="flex justify-start items-center" href={link.path} key={i}><span>{link.label}</span><span>{link.icon}</span></Link>)
               }
           </div>
           <div>
               <button className='px-8 py-3 bg-[#C34043] hover:bg-white  hover:text-[#c34043] border-2 hover:border-[#c34043] cursor-pointer rounded-[3.25rem] font-semibold tracking-wider text-white text-[1.25rem]'>Get Started</button>
           </div>
           </div>
       </div>
   );
};


export default Navbar;
