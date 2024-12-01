import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='w-[1280px]'>
    <div className='flex items-center justify-between '>
         <div className='space-y-[24px] ml-[75px]'>
        <h1 className=' text-[56px] font-[700] leading-[67.2px]'>Learn new skills <br /> online with ease</h1>
        <p className=' text-[18px] font-[400] leading-[27px]'>Discover a wide range of courses covering a variety of <br /> subjects, taught by expert instructors.</p>
        <div className='space-x-[16px] '>
        <button className='bg-black text-white w-[96px] h-[48px] rounded-[5px] border-[1px] mt-[16px]'>Start Learn</button>
        <button className='w-[150px] h-[48px] rounded-[5px] border-[1px] border-black'>Explore Courses</button>
        </div>
      </div>
      <div>
<Image src="/icons/Hero-image.png" width={640} height={900} alt='women'  />
      </div>
     
    </div>
    </div>
  )
}

export default Hero
