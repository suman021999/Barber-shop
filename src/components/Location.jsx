import React from "react";
import { GrLocation } from "react-icons/gr";
import { HiOutlinePhone } from "react-icons/hi";
import { LuNavigation } from "react-icons/lu";
const Location = () => {
  return (
    <>
      <section
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden   bg-[#111827]  "
        id="services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto group text-center mb-16">
            <p className="text-[#3b82f6] font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
              Visit Our Shop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              Our Location
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#3b82f6] to-[#10B981] rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>

             <p className="text-lg text-[#71717b]  mt-6 transition-all duration-500 group-hover:text-[#71717b]/90">
              Conveniently located in Denton, TX:
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">

                <div className="relative h-96 md:h-[400px] rounded-xl overflow-hidden shadow-md border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn">
  <div className="bg-[#374151] w-full h-full flex items-center justify-center">
   <GrLocation className='h-10 w-10 text-[#71717b]/30 ' />
  </div>
  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-xl" />
</div>

<div
  className="flex flex-col gap-6 animate-fadeIn"
  style={{ animationDelay: '0.2s' }}
>
  <div
    data-slot="card"
    className="bg-[#1F2937] text-[#F9FAFB]  flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  >
    <div
      data-slot="card-header"
      className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"
    >
      <h3 className="text-xl font-semibold text-foreground relative inline-block mb-6">
        Contact Information
        <span className="absolute bottom-[-0.5rem] left-0 w-12 h-[2px] bg-[#3b82f6] rounded-md"></span>
      </h3>
    </div>

    <div data-slot="card-content" className="px-6">
      <div className="flex flex-col gap-4">
        {/* Address */}
        <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#374151]/80 -mx-3">
          <div className="w-9 h-9 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(59,130,246,0.4)] transition-transform duration-300 hover:scale-110">
           <GrLocation className='h-5 w-5' />
          </div>
          <div>
            <h4 className="font-semibold text-[#F9FAFB] mb-1">Address</h4>
            <p className="text-[#F9FAFB] text-sm leading-relaxed">
              500 N Bell Ave #109, Denton, TX 76209, United States
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#374151]/80 -mx-3">
          <div className="w-9 h-9 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(59,130,246,0.4)]  transition-transform duration-300 hover:scale-110">

            <HiOutlinePhone className='h-5 w-5'/>
          </div>
          <div>
            <h4 className="font-semibold text-[#F9FAFB] mb-1">Phone</h4>
            <p className="text-[#F9FAFB] text-sm leading-relaxed">+19408081569</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="https://www.google.com/maps/place/500+N+Bell+Ave,+Denton,+TX+76209,+USA/@33.2190735,-97.1296375,17z/data=!3m1!4b1!4m6!3m5!1s0x864dca8e42f9e23b:0x400e09b2d264750b!8m2!3d33.219069!4d-97.1270626!16s%2Fg%2F11bw3wt6wh!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          data-slot="button"
          className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 :size-4 shrink-0  outline-none bg-[#3b82f6] text-[#111827] shadow-xs hover:bg-[#3b82f6]/90 h-9 px-4 py-2  flex items-center gap-2"
        >
          
         <LuNavigation className='h-5 w-5'/>
          Get Directions
        </a>
        <a
          href="tel:+19406129127"
          data-slot="button"
          className="justify-center rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50  shrink-0  outline-none  border bg-background shadow-xs hover:bg-[#10B981] hover:text-[#F9FAFB]  h-9 px-4 py-2  flex items-center gap-2"
        >
          <HiOutlinePhone className='h-5 w-5'/>
          Call Us
        </a>
      </div>
    </div>
  </div>
</div>



          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
