import React from "react";

const Testimonials = () => {
  return (
    <>
      <section
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden  bg-[#374151]/100 "
        id="services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto group text-center mb-16">
            <p className="text-[#3b82f6] font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              What Our Clients Say
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#3b82f6] to-[#10B981] rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>
          </div>


          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">

            <div
              data-slot="card"
              className="bg-[#1F2937] text-[#F9FAFB] flex flex-col gap-6 rounded-xl border  py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden border-[#1F2937] hover:border-[#3b82f6]/30 animate-fadeIn"
              style={{ animationDelay: "0s" }}
            >
              {/* Decorative corner circle */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#3b82f6]/10 rounded-tl-full z-0"></div>

              {/* Testimonial content */}
              <div
                data-slot="card-content"
                className="px-6 pt-10 pb-6 relative z-10"
              >
                <p className="text-lg leading-relaxed text-[#F9FAFB] mb-8 flex-grow relative italic">
                  <span className="absolute top-[-1.5rem] left-[-0.5rem] text-5xl text-[#3b82f6]/15 font-serif">
                    "
                  </span>
                  I've been getting my hair cut at PMC Barbershop for over 2
                  years now. The attention to detail is unmatched, and the
                  atmosphere is always welcoming. My barber remembers exactly
                  how I like my fade every time!
                  <span className="absolute bottom-[-3rem] right-0 text-5xl text-[#3b82f6]/10 font-serif">
                    "
                  </span>
                </p>
              </div>

              {/* Footer with rating and user */}
              <div
                data-slot="card-footer"
                className="px-6 pt-4 border-t border-[#1F2937] flex items-center"
              >
                <div className="flex text-amber-500 mb-4">
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                </div>
                <div className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#3b82f6] before:rounded-md">
                  <h4 className="font-bold text-[#F9FAFB] mb-1">
                    Mike Johnson
                  </h4>
                </div>
              </div>
            </div>


            <div
              data-slot="card"
              className="bg-[#1F2937] text-[#F9FAFB] flex flex-col gap-6 rounded-xl border  py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden border-[#1F2937] hover:border-[#3b82f6]/30 animate-fadeIn"
              style={{ animationDelay: "0s" }}
            >
              {/* Decorative corner circle */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#3b82f6]/10 rounded-tl-full z-0"></div>

              {/* Testimonial content */}
              <div
                data-slot="card-content"
                className="px-6 pt-10 pb-6 relative z-10"
              >
                <p className="text-lg leading-relaxed text-[#F9FAFB] mb-8 flex-grow relative italic">
                  <span className="absolute top-[-1.5rem] left-[-0.5rem] text-5xl text-[#3b82f6]/15 font-serif">
                    "
                  </span>
                 As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!
                  <span className="absolute bottom-[-3rem] right-0 text-5xl text-[#3b82f6]/10 font-serif">
                    "
                  </span>
                </p>
              </div>

              {/* Footer with rating and user */}
              <div
                data-slot="card-footer"
                className="px-6 pt-4 border-t border-[#1F2937] flex items-center"
              >
                <div className="flex text-amber-500 mb-4">
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                </div>
                <div className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#3b82f6] before:rounded-md">
                  <h4 className="font-bold text-[#F9FAFB] mb-1">
                    David Martinez
                  </h4>
                </div>
              </div>
            </div>


            <div
              data-slot="card"
              className="bg-[#1F2937] text-[#F9FAFB] flex flex-col gap-6 rounded-xl border  py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden border-[#1F2937] hover:border-[#3b82f6]/30 animate-fadeIn"
              style={{ animationDelay: "0s" }}
            >
              {/* Decorative corner circle */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#3b82f6]/10 rounded-tl-full z-0"></div>

              {/* Testimonial content */}
              <div
                data-slot="card-content"
                className="px-6 pt-10 pb-6 relative z-10"
              >
                <p className="text-lg leading-relaxed text-[#F9FAFB] mb-8 flex-grow relative italic">
                  <span className="absolute top-[-1.5rem] left-[-0.5rem] text-5xl text-[#3b82f6]/15 font-serif">
                    "
                  </span>
                  The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.
                  <span className="absolute bottom-[-3rem] right-0 text-5xl text-[#3b82f6]/10 font-serif">
                    "
                  </span>
                </p>
              </div>

              {/* Footer with rating and user */}
              <div
                data-slot="card-footer"
                className="px-6 pt-4 border-t border-[#1F2937] flex items-center"
              >
                <div className="flex text-amber-500 mb-4">
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                  <span className="mr-1">★</span>
                </div>
                <div className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#3b82f6] before:rounded-md">
                  <h4 className="font-bold text-[#F9FAFB] mb-1">
                    Chris Taylor
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
