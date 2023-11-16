"use client"
import Image from "next/image";
import flower from '@/assets/flower.png';
import email from '@/assets/email.png';
import engage from '@/assets/engage.png';



function Discover() {
    const discovers = [
        {icon: flower , name: "Fake follower check", des: "Don't waste precious money advertising to robots. Our AI predicts whether each follower is a bot with 90% accuracy."},
        {icon: engage , name: "Engagement check", des: "Engagement equals income for creators and brands, so we calculate it for every profile you export."},
        {icon:email , name: "Email extraction", des: "Load up your CRM with new contacts. We extract emails from user bio's and linked websites."}
    ]

  return (
    <div>
        <div className="text-center">
            <h1 className="text-[2.5rem] font-bold">Discover quality creators, brands, and prospects</h1>
            <p className="text-[#828282] text-[1.25rem]">Find new business opportunities by extracting all publicly available follower data.</p>
        </div>
        <div className="flex my-12 justify-center items-center gap-8">
          {
            discovers.map((item, i) => 
            <div key={i} className="py-16 rounded-3xl px-8 w-1/3 text-center  shadow-top-bottom " >
                <Image src={item.icon} className="mx-auto" width={100} alt="" />
                <h1 className="text-[1.875rem] my-4 font-semibold">{item.name}</h1>
                <p className="text-[1.25rem] font-light">{item.des}</p>
            </div>)
          }
        </div>


    </div>
  )
}

export default Discover