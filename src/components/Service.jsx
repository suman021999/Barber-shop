import React from "react";
import hairStyling from "../../public/hair-styling-icon.svg"
import makeup from "../../public/makeup-icon.svg"
import skincare from "../../public/skincare-icon.svg"

const Service = () => {
  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#111827]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto group text-center mb-16">
            <p className="text-[#3b82f6] font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
              Premium Grooming
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              Our Barber Services
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#3b82f6] to-[#10B981] rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>

            <p className="text-lg text-[#71717b]  mt-6 transition-all duration-500 group-hover:text-[#71717b]/90">
              Costly compared to other barbershops with better haircuts.
            </p>
          </div>

          <div>
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">

              <div
                data-slot="card"
                className="bg-[#1F2937] text-[#F9FAFB] flex flex-col gap-6 rounded-xl border border-[#1F2937] py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-border hover:border-[#3b82f6]/30 relative overflow-hidden group"
                style={{ animationDelay: "0s" }}
              >
                <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#3b82f6] to-[#F59E0B] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pt-10 pb-4"
                >
                  <div className="w-20 h-20 bg-[#374151] rounded-lg p-4 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#3b82f6]/10">
                    <img
                      alt="Haircuts"
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      className="object-contain"
                      src={hairStyling}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#3b82f6]">
                    Haircuts
                  </h3>
                </div>

                <div data-slot="card-content" className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our skilled barbers deliver precision haircuts tailored to
                    your style and face shape. From classic cuts to modern
                    fades, we ensure you leave looking sharp and confident.
                  </p>
                  <ul className="mt-4 pl-6 text-[#71717b] text-sm list-disc space-y-2">
                    <li>Classic Cuts</li>
                    <li>Modern Styles</li>
                  </ul>
                </div>
              </div>



              <div
                data-slot="card"
                className="bg-[#1F2937] text-[#F9FAFB] flex flex-col gap-6 rounded-xl border border-[#1F2937] py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-border hover:border-[#3b82f6]/30 relative overflow-hidden group"
                style={{ animationDelay: "0s" }}
              >
                <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#3b82f6] to-[#F59E0B] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pt-10 pb-4"
                >
                  <div className="w-20 h-20 bg-[#374151] rounded-lg p-4 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#3b82f6]/10">
                    <img
                      alt="Haircuts"
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      className="object-contain"
                      src={makeup}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#3b82f6]">
                    Beard Services
                  </h3>
                </div>

                <div data-slot="card-content" className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.
                  </p>
                  <ul className="mt-4 pl-6 text-[#71717b] text-sm list-disc space-y-2">
                    <li>Beard Trims</li>
                    <li>Beard Shaping</li>
                  </ul>
                </div>
              </div>



              <div
                data-slot="card"
                className="bg-[#1F2937] text-[#F9FAFB] flex flex-col gap-6 rounded-xl border border-[#1F2937] py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-border hover:border-[#3b82f6]/30 relative overflow-hidden group"
                style={{ animationDelay: "0s" }}
              >
                <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#3b82f6] to-[#F59E0B] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pt-10 pb-4"
                >
                  <div className="w-20 h-20 bg-[#374151] rounded-lg p-4 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#3b82f6]/10">
                    <img
                      alt="Haircuts"
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      className="object-contain"
                      src={skincare}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#3b82f6]">
                    Premium Services
                  </h3>
                </div>

                <div data-slot="card-content" className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.
                  </p>
                  <ul className="mt-4 pl-6 text-[#71717b] text-sm list-disc space-y-2">
                    <li>Hair Coloring</li>
                    <li>Scalp Treatments</li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
