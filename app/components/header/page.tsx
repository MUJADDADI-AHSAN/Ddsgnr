import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <div className='w-[1280px] h-[72px] bg-[#F7F7F7] mt-[15px] flex justify-center items-center border-[1px] border-[#676767]'>
        <div className='w-[1152px] h-[44px] bg-[#FFFFFF] flex justify-between items-center '>
         <Image src="/icons/Ddsgnr Library.svg" width={130.6} height={41} alt='logo' />
        
        <ul className='flex space-x-[54px]  '>
          <li> <Link href= "/" > Home</Link> </li>
          <li> <Link href= "/" > Courses</Link> </li>
          <li> <Link href= "/" > Services</Link> </li>
          <li> <Link href= "/" > Achievement</Link> </li>
          <li> <Link href= "/" > About Us</Link> </li>
          <li> <Link href= "/" > Testimonial</Link> </li>
        </ul> <div className='space-x-[16px]' >
        <button className='bg-white w-[80px] h-[40px] rounded-[5px] border-[1px]'>Login</button>
        <button className='bg-black w-[95px] h-[40px] text-white rounded-[5px] border-[1px]' >Sign Up</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
