import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-[#111827]  relative py-16 md:py-24 lg:py-32  overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto mb-12 group flex flex-col items-center justify-center text-center py-20 text-white">
            <p className="text-[#3B82F6] font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
              Our Story
            </p>
            
              <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4 relative">
                About PMC Barbershop
                <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
              </h2>
            
           <p className="text-lg text-[#71717b] mt-6">
              Established in 2018, PMC Barbershop has been providing premium
              grooming services to the men of Denton, TX. Our mission is to
              deliver exceptional haircuts and grooming services in a welcoming,
              classic barbershop environment.
            </p>
            
          </div>


          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="transition-all duration-700 animate-slideIn opacity-100 delay-100">
              <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:translate-y-[-5px] hover:shadow-2xl group md:max-w-full max-w-[90%] mx-auto group">
              <img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="/public/about.webp" alt="" />
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl z-[3] transition-all duration-500 group-hover:border-primary/20 opacity-0 group-hover:opacity-100"></div>
              <div class="absolute bottom-4 right-4 bg-[#3b82f6] text-white py-3 px-5 rounded-lg font-semibold text-lg shadow-lg z-[2] rotate-3 group-hover:translate-y-[-3px] group-hover:shadow-xl group-hover:rotate-0 transition-transform duration-500">5+ years</div>
              </div>
            </div>

            <div class="flex flex-col gap-6 md:text-left text-center group">
              <p class="text-lg leading-relaxed text-[#71717b] mb-6 relative md:pl-4 md:border-l-[3px] border-[#3b82f6] transition-all duration-500 animate-fadeInUp opacity-100 delay-200">
                Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
              </p>
              <div class="transition-all duration-500 animate-fadeInUp opacity-100 delay-300">
                <div class="text-[#71717b] leading-7 p-6 rounded-lg relative bg-[#374151]/80 group mb-6 group hover:bg-muted/90 transition-colors duration-300 hover:shadow-md"><span class="absolute top-0 left-4 text-5xl leading-none text-[#3b82f6]/40 font-serif transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#3b82f6]/60">"</span>
              <p class="relative transition-all duration-300 group-hover:translate-x-1">We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.</p>
              <div class="absolute bottom-4 left-6 right-6 h-[1px] bg-[#3b82f6]/0 transition-all duration-500 group-hover:bg-[#3b82f6]/20"></div>
              </div>
              </div>
              </div>
          </div>
          

        </div>


        
      </section>
    </>
  );
};

export default About;
