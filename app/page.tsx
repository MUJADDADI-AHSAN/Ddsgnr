import React from 'react'
import Image from 'next/image'
import Header from './components/header/page'
import Hero from './components/hero/page'
import Section1 from './components/section/page'
import Section2 from './components/section2/page'
import Courses from './components/courses/page'
import Our_team from './components/our-team/page'
import Section3 from './components/testimonial/page'
import Footer from './components/footer/page'

const Home = () => {
  return (
    <div>
     <div className='w-[1280px] h-[54px] bg-[#F7F7F7] border-b-[1px] border-black '>
           <div className='w-[1154px] h-[54px] ml-[63px] text-black flex items-center '>
           <div className='w-[500px] h-[30px] text-black '>
           Phone Number: 956 742 455 678  | Email:info@ddsgnr.com
           </div>
            <div className='w-[736px] h-[24px] flex justify-end gap-[12px]' >
                <Image src= "/icons/Facebook.png" width={24}  height={24} alt='icon' />
                <Image src= "/icons/Instagram.png" width={24}  height={24} alt='icon' />
                <Image src= "/icons/Vector.png" width={24}  height={24} alt='icon' />
                <Image src= "/icons/LinkedIn.png" width={24}  height={24} alt='icon' />
            </div>
            
           </div>
     </div>
     <Header />
     <Hero />
     <div className=' bg-[#F7F7F7] w-[1280px] h-[150px] flex justify-between items-center'>
     <div>
      <h1 className='text-[24px] font-[700] ml-1'>Trusted by 2000+ companies <br /> worldwide.</h1>
     </div>
     <div className='-300 w-auto h-auto flex space-x-[19.12px]'>
     <Image src= "/icons/logo1.png" width={123.8}  height={38.52} alt='logo' />
     <Image src= "/icons/logo2.png" width={123.8}  height={38.52} alt='logo' />
     <Image src= "/icons/logo3.png" width={123.8}  height={38.52} alt='logo' />
     <Image src= "/icons/logo4.png" width={123.8}  height={38.52} alt='logo' />
     <Image src= "/icons/logo5.png" width={123.8}  height={38.52} alt='logo' />
     <Image src= "/icons/logo6.png" width={123.8}  height={38.52} alt='logo' />
     </div>
     </div>
       <Section1 />
       <Section2 />
       <Courses />
       <Our_team />
       <div>
       <Section3 />
       <Footer />
       </div>
    </div>
  )
}

export default Home
