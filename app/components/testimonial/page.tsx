import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (
    <div className='bg-[#F7F7F7] w-[1280px] h-[830.89px] mt-20'>
    <div className=' flex'>
      <div className='w-[560px] h-[109px]   mt-24 ml-16 '>
        <h1 className='text-[48px] font-[700]' >Customer testimonials</h1>
        <p className='text-[18px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
     <div className='flex justify-center mt-32'>
    <div className=' w-[1152px] h-[417.89px] '>
       <div className=' w-[1152px] h-[321.89px]'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(362px,1fr))] gap-4  bg-gray-100 h-full'>

          <div className="bg-white shadow-lg  p-6 pt-10 space-y-6 border-[1px] border-black ">
    <Image src="/icons/Stars.png" width={116} height={18.89} alt='' />
    <p className="text-gray-600 text-[18px] font-[400]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
    <div className='flex space-x-3'>
      <Image src="/icons/Avatar Image.png" width={56} height={56} alt='' />
      <h1>James Nduku
      <p>Software Developer</p>
      </h1>
    </div>
  </div>

  <div className="bg-white shadow-lg  p-6 pt-10 space-y-6 border-[1px] border-black ">
    <Image src="/icons/Stars.png" width={116} height={18.89} alt='' />
    <p className="text-gray-600 text-[18px] font-[400]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
    <div className='flex space-x-3'>
      <Image src="/icons/Avatar2.png" width={56} height={56} alt='' />
      <h1>Erick Kipkemboi
      <p>Scrum Master</p>
      </h1>
    </div>
  </div>


            <div className="bg-white shadow-lg  p-6 pt-10 space-y-6 border-[1px] border-black ">
    <Image src="/icons/Stars.png" width={116} height={18.89} alt='' />
    <p className="text-gray-600 text-[18px] font-[400]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
    <div className='flex space-x-3'>
      <Image src="/icons/Avatar3.png" width={56} height={56} alt='' />
      <h1>Erick Kipkemboi
      <p>Scrum Master</p>
      </h1>
    </div>
  </div>
            
          </div>
       </div>
       <div className='flex justify-end items-end h-[96px]'>
       <div className='0 w-full h-[48px] flex items-center justify-between '>
         <Image src="/icons/Slider Dots.png" width={72} height={8} alt='' />
         <Image src="/icons/Slider Buttons.png" width={72} height={8} alt='' />
       </div>
       </div>
    </div>
    </div>
    </div>
  )
}

export default Section3
