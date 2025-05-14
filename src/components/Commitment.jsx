import React from "react";

const Commitment = () => {
  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#111827]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto group text-center mb-16">
            <p className="text-[#3b82f6] font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
              Our Commitment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              Why Choose PMC Barbershop?
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-[#3b82f6] to-[#10B981] rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
            </h2>

            <p className="text-lg text-[#71717b]  mt-6 transition-all duration-500 group-hover:text-[#71717b]/90">
              What makes us the premier barbershop in Denton, TX.
            </p>
          </div>

          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
  {/* Card 1 */}
  <div
    data-slot="card"
    className="bg-[#1F2937] text-[#F9FAFB] gap-6 rounded-xl border py-6 shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group border-[#1F2937] hover:border-[#3b82f6] relative"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-[#3b82f6] transition-all duration-300 group-hover:w-full group-hover:h-1"></div>
    <div
      data-slot="card-header"
      className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"
    >
      <div className="w-[60px] h-[60px] rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white group-hover:scale-110">
        User
      </div>
      <h3 className="text-xl font-semibold text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#3b82f6]">
        Expert Barbers
      </h3>
    </div>
    <div data-slot="card-content" className="px-6 flex-grow">
      <p className="text-[#71717b] leading-relaxed mb-6">
        Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.
      </p>
    </div>
  </div>




  <div
    data-slot="card"
    className="bg-[#1F2937] text-[#F9FAFB] gap-6 rounded-xl border py-6 shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group border-[#1F2937] hover:border-[#3b82f6] relative"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-[#3b82f6] transition-all duration-300 group-hover:w-full group-hover:h-1"></div>
    <div
      data-slot="card-header"
      className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"
    >
      <div className="w-[60px] h-[60px] rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white group-hover:scale-110">
        Scissors
      </div>
      <h3 className="text-xl font-semibold text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#3b82f6]">
        Premium Tools & Products
      </h3>
    </div>
    <div data-slot="card-content" className="px-6 flex-grow">
      <p className="text-[#71717b] leading-relaxed mb-6">
        We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.
      </p>
    </div>
  </div>
  

    <div
    data-slot="card"
    className="bg-[#1F2937] text-[#F9FAFB] gap-6 rounded-xl border py-6 shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group border-[#1F2937] hover:border-[#3b82f6] relative"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-[#3b82f6] transition-all duration-300 group-hover:w-full group-hover:h-1"></div>
    <div
      data-slot="card-header"
      className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"
    >
      <div className="w-[60px] h-[60px] rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white group-hover:scale-110">
        Home
      </div>
      <h3 className="text-xl font-semibold text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#3b82f6]">
        Classic Barbershop Experience
      </h3>
    </div>
    <div data-slot="card-content" className="px-6 flex-grow">
      <p className="text-[#71717b] leading-relaxed mb-6">
        Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.
      </p>
    </div>
  </div>
 
</div>

        </div>
      </section>
    </>
  );
};

export default Commitment;
