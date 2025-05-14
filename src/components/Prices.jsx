import React from "react";
import { FaCheck } from "react-icons/fa6"; 
const Prices = () => {
  return (
    <>
      <section
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden  bg-[#111827] "
        id="services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto group text-center mb-16">
            <p className="text-[#3b82f6] font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
              Quality Barbering at Fair Prices
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              Our Service Prices
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#3b82f6] to-[#10B981] rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>

            <p className="text-lg text-[#71717b]  mt-6 transition-all duration-500 group-hover:text-[#71717b]/90">
              Choose from our range of professional barbering services.
            </p>
          </div>

          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">




            <div
              data-slot="card"
              className="bg-[#1F2937] text-[#F9FAFB] gap-6 rounded-xl p-8 h-full flex flex-col transition-all duration-300 relative overflow-hidden border-2 border-[#3b82f6] shadow-lg -translate-y-2 scale-[1.02] z-10 hover:shadow-xl hover:-translate-y-3 hover:scale-[1.03] hover:z-20"
              style={{ animationDelay: "0s" }}
            >
              {/* Top Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-gradient-to-r from-[#3b82f6] to-[#10B981]" />

              {/* Badge */}
              <div className="absolute top-0 right-8 bg-gradient-to-r from-[#3b82f6] to-[#10B981] text-white px-6 py-2 font-semibold text-sm rounded-b-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
                Most Popular
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2 relative inline-block group">
                Classic Services
                <span className="absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-primary rounded transition-all duration-300 group-hover:w-16" />
              </h3>

              {/* Price */}
              <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105">
                <span className="text-2xl font-semibold text-[#F9FAFB] mr-1">
                  $
                </span>
                <span className="text-5xl font-extrabold bg-gradient-to-r from-[#3b82f6] to-[#10B981] bg-clip-text text-transparent">
                  $25
                </span>
                <span className="text-sm text-[#71717b]  ml-1">/mo</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Men's Haircut",
                  "Kids Haircut (12 & under)",
                  "Senior Haircut (65+)",
                  "Military/First Responder Cut",
                  "Basic Beard Trim",
                  "Neck & Line Cleanup (between cuts)",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[#F9FAFB] text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-[#374151]/80 hover:translate-x-1 -mx-3"
                  >
                    <div className="bg-[#3b82f6] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                   
                         <FaCheck />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm disabled:pointer-events-none disabled:opacity-50  shrink-0  outline-none   bg-[#3b82f6] text-[#111827] hover:bg-[#3b82f6]/90 h-9 px-4  mt-auto w-full py-6 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                Book Now
              </button>
            </div>


            <div
  data-slot="card"
  className="bg-[#1F2937] text-[#F9FAFB] gap-6 rounded-xl shadow-sm p-8 h-full flex flex-col transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:border-[#3b82f6] hover:shadow-xl hover:-translate-y-3 hover:scale-[1.03] hover:z-20"
  style={{ animationDelay: '0.1s' }}
>
  <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#10B981]" />

  <h3 className="text-xl font-bold text-foreground mb-2 relative inline-block">
    Premium Services
    <span className="absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-[#3b82f6] rounded transition-all duration-300 group-hover:w-16" />
  </h3>

  <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105">
    <span className="text-2xl font-semibold text-foreground mr-1">$</span>
    <span className="text-5xl font-extrabold bg-gradient-to-r from-[#3b82f6] to-[#10B981] bg-clip-text text-transparent">$35</span>
    <span className="text-sm text-[#71717b]  ml-1">/mo</span>
  </div>

  <ul className="space-y-3 mb-8 flex-grow">
    {[
      "Haircut & Beard Combo",
      "Hot Towel Shave",
      "Full Beard Shaping & Design",
      "Color Camo (Gray Blending)",
      "Hair & Scalp Treatment",
      "Head Shave with Hot Towel",
    ].map((service, index) => (
      <li
        key={index}
        className="flex items-center text-foreground text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-[#374151]/80 hover:translate-x-1 -mx-3"
      >
        <div className="bg-[#3b82f6] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
          <FaCheck />
        </div>
        {service}
      </li>
    ))}
  </ul>

  <button
    data-slot="button"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50  shrink-0  border border-[#586479d6]  shadow-xs bg-[#374151] hover:text-accent-foreground  h-9 px-4  mt-auto w-full py-6 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
  >
    Book Now
  </button>
           </div>

 <div
  data-slot="card"
  className="bg-[#1F2937] text-[#F9FAFB] gap-6 rounded-xl shadow-sm p-8 h-full flex flex-col transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:border-[#3b82f6] hover:shadow-xl hover:-translate-y-3 hover:scale-[1.03] hover:z-20"
  style={{ animationDelay: '0.1s' }}
>
  <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#10B981]" />

  <h3 className="text-xl font-bold text-foreground mb-2 relative inline-block">
    Packages
    <span className="absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-[#3b82f6] rounded transition-all duration-300 group-hover:w-16" />
  </h3>

  <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105">
    <span className="text-2xl font-semibold text-foreground mr-1">$</span>
    <span className="text-5xl font-extrabold bg-gradient-to-r from-[#3b82f6] to-[#10B981] bg-clip-text text-transparent">$50</span>
    <span className="text-sm text-[#71717b]  ml-1">/mo</span>
  </div>

  <ul className="space-y-3 mb-8 flex-grow">
    {[
      "The Works (Cut, Shave, Treatment)",
      "Father & Son Combo",
      "Groom's Package",
      "Monthly Membership (2 cuts/mo)",
      "First-Time Client Special",
      "Loyalty Program",

    ].map((service, index) => (
      <li
        key={index}
        className="flex items-center text-foreground text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-[#374151]/80 hover:translate-x-1 -mx-3"
      >
        <div className="bg-[#3b82f6] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
          <FaCheck />
        </div>
        {service}
      </li>
    ))}
  </ul>

  <button
    data-slot="button"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50  shrink-0  border border-[#586479d6]  shadow-xs bg-[#374151] hover:text-accent-foreground  h-9 px-4  mt-auto w-full py-6 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
  >
    Book Now
  </button>
           </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
