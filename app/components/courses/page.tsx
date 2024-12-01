import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className=' w-[1280px] h-auto '>
    <div className='flex justify-center mt-[180px]'>
      <div >
         <h1 className='text-[56px] font-[700]'>Courses</h1>
      </div>
    </div>
    <div className='flex justify-center'>
  <p className='text-[18px] font[400] '>Your Ultimate Guide to learning</p>
    </div>
     <div className=' w-[1280px] h-[1340px] mt-10 ' >
        <div className='flex justify-center'>
         <div className=' w-[336px] h-[40px] space-x-[15px] flex items-center justify-center'>
            <button className=' border-b shadow-md rounded-md w-[100px] h-[40px] font-medium hover:bg-gray-100'>Popular</button>
            <button className=' border-b shadow-md rounded-md w-[150px] h-[40px] font-medium hover:bg-gray-100'>Recommended</button>
            <button className=' border-b shadow-md rounded-md w-[100px] h-[40px] font-medium hover:bg-gray-100'>Best Price</button>
         </div>
         </div>
         <div>
         <div className="grid grid-cols-3 gap-4  mt-[50px] ">
  <div className=" bg-[#F7F7F7] text-white  items-center justify-center w-[416px] h-[534px]">
  <Image src= "/icons/Image.png" width={416}  height={300} alt='logo'  />
  <div className='flex'>
  <div className='w-[382px] h-[24px]  mt-3 text-black'>Design </div>
  <div className='mt-3'><Image src= "/icons/Star.png" width={48}  height={24} alt='logo'  />  </div>
  </div>
  <div className='space-y-[8px]'>
    <h1 className='text-[24px] font-[700] text-black '>UX/UI Design 201</h1>
    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </div>
  <div className='flex space-x-[20px] mt-[20px]'>
    <button className='border-[1px] border-black  text-black rounded-[5px] w-[117px] h-[40px]'>Enroll Now</button>
    <div className='text-black w-[77px] h-[40px] mt-2'>$400</div>
  </div>
    </div>
    <div className=" bg-[#F7F7F7] text-white  items-center justify-center w-[416px] h-[534px]">
  <Image src= "/icons/Image2.png" width={416}  height={300} alt='logo'  />
  <div className='flex'>
  <div className='w-[382px] h-[24px]  mt-3 text-black'>Programming </div>
  <div className='mt-3'><Image src= "/icons/Star.png" width={48}  height={24} alt='logo'  />  </div>
  </div>
  <div className='space-y-[8px]'>
    <h1 className='text-[24px] font-[700] text-black '>Introduction to Python</h1>
    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </div>
  <div className='flex space-x-[20px] mt-[20px]'>
    <button className='border-[1px] border-black  text-black rounded-[5px] w-[117px] h-[40px]'>Enroll Now</button>
    <div className='text-black w-[77px] h-[40px] mt-2'>$400</div>
  </div>
    </div>
    <div className=" bg-[#F7F7F7] text-white  items-center justify-center w-[416px] h-[534px]">
  <Image src= "/icons/Image3.png" width={416}  height={300} alt='logo'  />
  <div className='flex'>
  <div className='w-[382px] h-[24px]  mt-3 text-black'>Business </div>
  <div className='mt-3'><Image src= "/icons/Star.png" width={48}  height={24} alt='logo'  />  </div>
  </div>
  <div className='space-y-[8px]'>
    <h1 className='text-[24px] font-[700] text-black '>Data Analysis for Beginners</h1>
    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </div>
  <div className='flex space-x-[20px] mt-[20px]'>
    <button className='border-[1px] border-black  text-black rounded-[5px] w-[117px] h-[40px]'>Enroll Now</button>
    <div className='text-black w-[77px] h-[40px] mt-2'>$400</div>
  </div>
    </div>
    <div className=" bg-[#F7F7F7] text-white  items-center justify-center w-[416px] h-[534px]">
  <Image src= "/icons/Image4.png" width={416}  height={300} alt='logo'  />
  <div className='flex'>
  <div className='w-[382px] h-[24px]  mt-3 text-black'>Art </div>
  <div className='mt-3'><Image src= "/icons/Star.png" width={48}  height={24} alt='logo'  />  </div>
  </div>
  <div className='space-y-[8px]'>
    <h1 className='text-[24px] font-[700] text-black '>Art Specialization</h1>
    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </div>
  <div className='flex space-x-[20px] mt-[20px]'>
    <button className='border-[1px] border-black  text-black rounded-[5px] w-[117px] h-[40px]'>Enroll Now</button>
    <div className='text-black w-[77px] h-[40px] mt-2'>$400</div>
  </div>
    </div>
    <div className=" bg-[#F7F7F7] text-white  items-center justify-center w-[416px] h-[534px]">
  <Image src= "/icons/Image5.png" width={416}  height={300} alt='logo'  />
  <div className='flex'>
  <div className='w-[382px] h-[24px]  mt-3 text-black'>Law </div>
  <div className='mt-3'><Image src= "/icons/Star.png" width={48}  height={24} alt='logo'  />  </div>
  </div>
  <div className='space-y-[8px]'>
    <h1 className='text-[24px] font-[700] text-black '>Rule of Law</h1>
    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </div>
  <div className='flex space-x-[20px] mt-[20px]'>
    <button className='border-[1px] border-black  text-black rounded-[5px] w-[117px] h-[40px]'>Enroll Now</button>
    <div className='text-black w-[77px] h-[40px] mt-2'>$400</div>
  </div>
    </div>
    <div className=" bg-[#F7F7F7] text-white  items-center justify-center w-[416px] h-[534px]">
  <Image src= "/icons/Image6.png" width={416}  height={300} alt='logo'  />
  <div className='flex'>
  <div className='w-[382px] h-[24px]  mt-3 text-black'>Tech</div>
  <div className='mt-3'><Image src= "/icons/Star.png" width={48}  height={24} alt='logo'  />  </div>
  </div>
  <div className='space-y-[8px]'>
    <h1 className='text-[24px] font-[700] text-black '>Introduction to webflow</h1>
    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  </div>
  <div className='flex space-x-[20px] mt-[20px]'>
    <button className='border-[1px] border-black  text-black rounded-[5px] w-[117px] h-[40px]'>Enroll Now</button>
    <div className='text-black w-[77px] h-[40px] mt-2'>$400</div>
  </div>
    </div>
</div>
</div>
<div className=' h-[120px] flex justify-center items-end'>
     <div >
        <button className=' w-[155px] h-[48px] border-b shadow-md border-[1px] border-black rounded-[5px] hover:bg-gray-100'>View All Courses</button>
     </div>
     </div>

     </div>
    
    </div>
  )
}

export default Courses
