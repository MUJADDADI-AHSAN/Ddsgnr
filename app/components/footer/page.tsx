import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
       <div className=' w-[1280px] h-[684px] flex justify-center items-center mt-20'>
            <div className=' w-[1120px] h-[524px]'>
              <div className=' w-[1120px] h-[82px] flex justify-between'>
                   <div>
                     <h1 className='text-[18px] font-[600]'>Subscribe to our newsletter</h1>
                     <p className='text-[16px] font-[400]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                   <div className='space-x-[16px] '>
                     <input className='rounded-[5px] w-[265px] h-[48px] border-[1px] border-black p-3' type="text" placeholder='Enter your email' />
                     <button className='w-[119px] h-[48px] border-[1px] border-black rounded-[5px] shadow-md   hover:bg-gray-100'>Subscribe</button>
                     <p className='mt-[9px]'>By subscribing you agree to with our Privacy Policy</p>
                   </div>
              </div>        
                  <div className='flex items-center h-[384px] '>
                    <div className=' w-[1120px] h-[225px] flex justify-between  '>
                      <div >
                         <Image src="/icons/Ddsgnr Library.svg" width={130.6} height={40} alt='Logo' />
                      </div>
                      <div className='flex gap-[40px]'>
                      <div className=' w-[250px] h-[225px] space-y-[15px]'>
                         <h1 className='text-[16px] font-[600]'>Courses</h1>
                         <h4>Business</h4>
                         <h4>Development</h4>
                         <h4>Technology</h4>
                         <h4>Design</h4>
                         <h4>Programming</h4>
                      </div>

                      <div className=' w-[250px] h-[225px] space-y-[15px]'>
                         <h1 className='text-[16px] font-[600]' >Resources</h1>
                         <h4>Business</h4>
                         <h4>Development</h4>
                         <h4>Technology</h4>
                         <h4>Design</h4>
                         <h4>Programming</h4>
                      </div>

                      <div className=' w-[250px] h-[225px]  space-y-[15px]'>
                         <h1 className='text-[16px] font-[600]' >About Us</h1>
                         <h4>Business</h4>
                         <h4>Development</h4>
                         <h4>Technology</h4>
                         <h4>Design</h4>
                         <h4>Programming</h4>
                      </div>
                      </div>
                      </div>
                      
                  </div>   
                  <div className='bg-white w-[1120px] h-[57px] border-t  border-black flex items-end'>
                      <div className=' w-[1120px] h-[24px] flex justify-between'>
                        <div className='flex gap-6'>
                     <p>2023 Ddsgnr. All right reserved. </p>
                     <h4>Privacy Policy</h4>
                     <h4>Terms of Service</h4>
                     <h4>Cookies Settings</h4>
                     </div>
                     <div >
                     <Image src="/icons/Socials.png" width={132} height={24} alt='links' />
                     </div>
                      </div>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default Footer
