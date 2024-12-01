import React from 'react'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div>
    <div className=' w-[1280px] h-[1000px]  '>
        <div className='w-[1280px] h-[300px] flex justify-center items-center'>
      <div className=' w-[768px] h-[109px] space-y-[24px]  '  >
        <h2 className='text-[48px] font-[700] w-[768px] h-[58px]'>Explore Courses By Category</h2>
        <p className=' text-[18px] font-[400] w-[768px] h-[27px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      </div>
      <div className=' w-[1280px] h-[636px] ' >
      <div className="grid grid-cols-3 grid-rows-3 gap-[24px] gap-y-[64px] ">
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px] gap-4 "> 
  <Image src= "/icons/Frame.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-10 text-[20px] font-[600] text-black' >Design & Development <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px]  gap-4 "> 
  <Image src= "/icons/Frame2.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-[70px] text-[20px] font-[600] text-black' >Marketing <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px]  gap-4 "> 
  <Image src= "/icons/Frame3.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-[70px] text-[20px] font-[600] text-black' >Development <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px]  gap-4 "> 
  <Image src= "/icons/Frame4.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-[70px] text-[20px] font-[600] text-black' >Communication <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px]  gap-4 "> 
  <Image src= "/icons/Frame5.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-[70px] text-[20px] font-[600] text-black' >Digital Marketing <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px] gap-4  "> 
  <Image src= "/icons/Frame6.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-[70px] text-[20px] font-[600] text-black' >Self Development <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px]  gap-4 "> 
  <Image src= "/icons/Frame7.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-[70px] text-[20px] font-[600] text-black' >Business <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px]  gap-4  "> 
  <Image src= "/icons/Frame8.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-[70px] text-[20px] font-[600] text-black' >Finance <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
  <div className="bg-[#F7F7F7] text-white flex items-center justify-evenly h-[132px] w-[410px]  gap-4 "> 
  <Image src= "/icons/Frame9.png" width={100}  height={100} alt='logo'  /> <h1 className='mr-[70px] text-[20px] font-[600] text-black' >Consulting <p className='text-[18px] font-[400]'>50+ Courses Available</p></h1> 
  </div>
</div>
<div className=' h-[120px] flex justify-center items-end'>
     <div >
        <button className=' w-[155px] h-[48px] border-b shadow-md border-[1px] border-black rounded-[5px] hover:bg-gray-100'>View All Courses</button>
     </div>
     </div>
      </div>
    </div>
    </div>
  )
}

export default Section1
