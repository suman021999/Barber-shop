import React from 'react'
import { GrLocation } from "react-icons/gr";
 import { MdCall } from "react-icons/md";
  import { IoArrowDownOutline } from "react-icons/io5";
  import hero from "../../public/hero.jpg"
const Banner = () => {
  return (
    <>
      <section className='relative py-16 md:py-24 lg:py-32   bg-[#272e39] overflow-hidden'>
        
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>

           <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='max-w-2xl group'>

            <h4 className='text-[#3b82f6] font-medium mb-3 transition-all duration-500 animate-fadeInUp opacity-100 delay-100'>Premium Barber Services in Denton</h4>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#F9FAFB] mb-6 tracking-tight transition-all duration-500 group animate-fadeInUp opacity-100 delay-200'>
            Classic Cuts, Modern Style
            
            </h1>
             <span className='text-[#3B82F6] mb-6  relative inline-block text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight'>
                <div className='w-[450px]'>
                   Fama Barber Shop and Beauty Salon
                </div>
                
            <span className='absolute bottom-1 left-0 right-0 h-2 -z-10 rounded-md transition-all duration-500 transform bg-[#10B981]/40 group-hover:animate-pulse' style={{width:'100%',transform:'scaleX(1)',transformOrigin: 'left bottom'}}></span>
            <span className='absolute -right-1 -top-1 h-2 w-2 rounded-full opacity-75 bg-[#10B981]/40 animate-pulse'></span>
            </span>

    

            <p className="text-lg text-[#9f9fa9] mb-8 transition-all duration-500 animate-fadeInUp opacity-100 delay-300">At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.</p>


            <div className='mb-8 transition-all duration-500 animate-fadeInUp opacity-100 delay-400'>
                <div className="inline-flex gap-2 items-center text-[#9f9fa9] px-3 py-1.5 rounded-full border border-[#1F2937]/50 bg-[#111827]/50 backdrop-blur-sm cursor-pointer hover:border-[#3B82F6]/40 hover:bg-[#111827]/80 group hover:shadow-md transition-shadow duration-300">


                <GrLocation className='h-5 w-5' />
                <span className="group-hover:text-foreground transition-colors duration-300">Denton, TX</span>
                
                </div>
            </div>

            <div className='flex flex-col  gap-4'>
                
                <a href="" className='border-[#ffffff26] border-2 flex gap-2 justify-center items-center w-full text-white px-4 py-2 rounded-lg hover:bg-[#ffffff26]/80 transition duration-300'>
                 <MdCall />
                <span>Our Services</span>
                </a>
                <a href="#contact" className='bg-[#3B82F6]  flex gap-2 justify-center items-center w-full text-white px-4 py-2 rounded-lg hover:bg-[#3b82f6]/70 transition duration-300 hover:animate-bounce'>
                    <span>Book now</span>
                </a>

                
            </div>

            <div className='hidden md:flex justify-center mt-16 transition-all duration-500 animate-fadeInUp opacity-100 delay-600'>
              <div className="flex animate-pulse cursor-pointer hover:opacity-80 transition-opacity hover:-translate-y-1 hover:scale-110 duration-300" aria-label="Scroll down for more content" role="button" tabIndex="0">
               <IoArrowDownOutline className='text-[#3B82F6] h-6 w-6'/>
              </div>
            </div>

            

            
          </div>

          <div className='relative flex items-center justify-center animate-floatIn filter drop-shadow-xl'>
            <img className="w-full h-auto max-h-[600px] object-contain transition-transform hover:scale-105 duration-300" src={hero} loading="eager" alt="" />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2/3 h-4 bg-black/10 rounded-full blur-md -z-10"></div>
          </div>
          </div>

          </div>
       
      </section>
    </>
  )
}

export default Banner
