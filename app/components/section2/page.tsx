import React from 'react'

const Section2 = () => {
  return (
    <div>
      <div className=' w-[1280px] h-[488px]  '>
        <div className='  flex justify-center '>
       <h1 className='text-[48px] font-[700] mt-[130px] '>Our Achivements</h1>
       </div>
       <div className='flex justify-center'>
       <p className='text-[18px] font-[400] mt-[20px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
       </div>
       <div className='flex justify-center '>
        <div className=' w-[616px] h-[96px] flex justify-around mt-[50px]' >
            <h1 className='text-[40px] font-[700]'>+200
            <p className='text-[16px] font-[400] ml-7'>Courses</p>
            </h1>
            
            
            <div>
                <h1 className='text-[40px] font-[700]'>50K 
                    <p className='text-[16px] font-[400]'>Mentors</p>
                    </h1>
                
            </div>
        </div>
        <div className=' w-[616px] h-[96px] flex justify-around mt-[50px]'>
            <h1 className='text-[40px] font-[700]'>370k
            <p className='text-[16px] font-[400] ml-2'>Students</p>
            </h1>
           
            <div>
                <h1 className='text-[40px] font-[700]'>100+
                <p className='text-[16px] font-[400]' >Recognition  </p>
                </h1>   
            </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Section2