import React from "react";
import Image from "next/image";

const Our_team = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center w-[1280px] h-[895px] bg-[#F7F7F7]  ">
        <div className=" w-[1280px] h-[700px]  grid place-items-center ">
          <div className="w-[768px] h-[109px]  grid place-items-center mb-14">
            <h1 className="text-[48px] font-[700]">Our team</h1>
            <p className="text-[18px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className=" w-[1280px] h-[610px] ">
          <div className="grid grid-cols-3 gap-[48px] ">

  <div className=" text-black  w-[394.67px] h-[273px]">
    <div className="flex justify-center">
   <Image src="/icons/human.jpg" width={80}  height={80} alt='logo'/>
   </div>
   <h1 className="flex justify-center mt-[10px] text-[20px] font=[600]">James Nduku</h1>
   <p className="flex justify-center text-[18px] font=[400]">Marketing Coordinator</p>
   <div className="flex justify-center items-end h-[130px]">
    <Image src="/icons/Social.png" width={100} height={24} alt="social icons" />
   </div>
  </div>
  <div className=" text-black  w-[394.67px] h-[273px]">
    <div className="flex justify-center">
   <Image src="/icons/human2_enhanced.png" width={80}  height={80} alt='logo'/>
   </div>
   <h1 className="flex justify-center mt-[10px] text-[20px] font=[600]">James Nduku</h1>
   <p className="flex justify-center text-[18px] font=[400]">Marketing Coordinator</p>
   <div className="flex justify-center items-end h-[130px]">
    <Image src="/icons/Social.png" width={100} height={24} alt="social icons" />
   </div>
  </div>

  <div className=" text-black  w-[394.67px] h-[273px]">
    <div className="flex justify-center">
   <Image src="/icons/human3_enhanced.png" width={80}  height={80} alt='logo'/>
   </div>
   <h1 className="flex justify-center mt-[10px] text-[20px] font=[600]">James Nduku</h1>
   <p className="flex justify-center text-[18px] font=[400]">Marketing Coordinator</p>
   <div className="flex justify-center items-end h-[130px]">
    <Image src="/icons/Social.png" width={100} height={24} alt="social icons" />
   </div>
  </div>

  <div className=" text-black  w-[394.67px] h-[273px]">
    <div className="flex justify-center">
   <Image src="/icons/human4_enhanced.png" width={80}  height={80} alt='logo'/>
   </div>
   <h1 className="flex justify-center mt-[10px] text-[20px] font=[600]">James Nduku</h1>
   <p className="flex justify-center text-[18px] font=[400]">Marketing Coordinator</p>
   <div className="flex justify-center items-end h-[130px]">
    <Image src="/icons/Social.png" width={100} height={24} alt="social icons" />
   </div>
  </div>

  <div className=" text-black  w-[394.67px] h-[273px]">
    <div className="flex justify-center">
   <Image src="/icons/human5_enhanced.png" width={80}  height={80} alt='logo'/>
   </div>
   <h1 className="flex justify-center mt-[10px] text-[20px] font=[600]">James Nduku</h1>
   <p className="flex justify-center text-[18px] font=[400]">Marketing Coordinator</p>
   <div className="flex justify-center items-end h-[130px]">
    <Image src="/icons/Social.png" width={100} height={24} alt="social icons" />
   </div>
  </div>

  <div className=" text-black  w-[394.67px] h-[273px]">
    <div className="flex justify-center">
   <Image src="/icons/human6_enhanced.png" width={80}  height={80} alt='logo'/>
   </div>
   <h1 className="flex justify-center mt-[10px] text-[20px] font=[600]">James Nduku</h1>
   <p className="flex justify-center text-[18px] font=[400]">Marketing Coordinator</p>
   <div className="flex justify-center items-end h-[130px]">
    <Image src="/icons/Social.png" width={100} height={24} alt="social icons" />
   </div>
  </div>

</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_team;
