import React from "react";
import { GrLocation } from "react-icons/gr";
import { HiChevronDown, HiOutlinePhone } from "react-icons/hi";
import { LuClock4 } from "react-icons/lu";
const Contact = () => {
  return (
    <>
      <section
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden  bg-[#111827] "
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto group text-center mb-16">
            <p className="text-[#3b82f6] font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
              Book Your Appointment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#3b82f6] to-[#10B981] rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>

            <p className="text-lg text-[#71717b]  mt-6 transition-all duration-500 group-hover:text-[#71717b]/90">
              Ready for a fresh look? Book your appointment today or contact us for any questions.
            </p>
          </div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fadeInUp">
      {/* Contact Info Card */}
      <div className="bg-[#1F2937] text-[#F9FAFB] flex flex-col gap-6 rounded-xl shadow-sm md:col-span-1 p-6 border-2 border-transparent transition-all duration-300 hover:border-[#3b82f6] hover:shadow-lg hover:-translate-y-2">
        <div className="p-0">
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#374151]/80 hover:translate-x-2 -mx-3">
              <div className="w-9 h-9 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                <GrLocation className='h-5 w-5' />
              </div>
              <div>
                <h4 className="font-semibold text-[#F9FAFB] mb-1">Address</h4>
                <p className="text-[#F9FAFB] text-sm leading-relaxed">
                  518 Acme St unit 101, Denton, TX 76205, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#374151]/80 hover:translate-x-2 -mx-3">
              <div className="w-9 h-9 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(59,130,246,0.4)] transition-transform duration-300 hover:scale-110">
                <HiOutlinePhone className='h-5 w-5'/>
              </div>
              <div>
                <h4 className="font-semibold text-[#F9FAFB] mb-1">Phone</h4>
                <p className="text-[#F9FAFB] text-sm leading-relaxed">
                  +1 940-808-1569
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-[#374151]/80 hover:translate-x-2 -mx-3">
              <div className="w-9 h-9 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(59,130,246,0.4)] transition-transform duration-300 hover:scale-110">
                
               <LuClock4 />
              </div>
              <div>
                <h4 className="font-semibold text-[#F9FAFB] mb-1">Business Hours</h4>
                <p className="text-[#F9FAFB] text-sm leading-relaxed">
                  Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="bg-[#1F2937] text-[#F9FAFB]  flex flex-col gap-6 rounded-xl shadow-sm md:col-span-2 p-6 border-2 border-transparent transition-all duration-300 hover:border-[#3b82f6]  hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3b82f6]  to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="p-0">
          <form className="space-y-6">
            {/* Name */}
            <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-[#3b82f6]  group-hover:translate-x-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="file:text-[#F9FAFB] placeholder:text-[#71717b] selection:bg-[#3b82f6] selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
              />
            </div>

            {/* Phone */}
            <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="file:text-foreground placeholder:text-[#71717b] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
              />
            </div>

            {/* Service Select */}
            <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
              <label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                Service Interested In
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="border-input text-[#9ea2a5]  flex w-[50%] items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus:border-[#3b82f6] focus:shadow-md hover:border-[#3b82f6]/80"
                >
                  <option value="">Select an option</option>
                  <option value="Haircut">Haircut</option>
                  <option value="Beard Trim">Beard Trim</option>
                  <option value="Hot Towel Shave">Hot Towel Shave</option>
                  <option value="Haircut & Beard Combo">Haircut & Beard Combo</option>
                  <option value="Kid's Haircut">Kid's Haircut</option>
                  <option value="Senior Haircut">Senior Haircut</option>
                  <option value="Other">Other</option>
                  <HiChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 size-4 opacity-50 pointer-events-none" />
                </select>
                
                

              </div>
            </div>

            {/* Date */}
            <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
              <label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
              />
            </div>

            {/* Message */}
            <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:text-[#3b82f6] group-hover:translate-x-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your style preferences or any questions you have"
                className="border-input placeholder:text-[#c9ced1] flex w-full min-h-40 resize-y rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm h-9 mt-6 px-8 py-6 bg-[#3b82f6] text-white font-semibold shadow-md w-full md:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
          

          
        </div>
      </section>
    </>
  );
};

export default Contact;