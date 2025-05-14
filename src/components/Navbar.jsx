
import { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { HiOutlinePhone, HiMenu, HiX } from "react-icons/hi";
import logo from "../../public/logo.svg"

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="sticky top-0 w-full z-50 transition-all duration-300 bg-[#111827]/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 p-4">
            {/* Logo */}
            <div>
              <img
                className="h-14 w-14 rounded-full"
                src={logo}
                alt="PMC Logo"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8 text-white">
              <a href="" className="hover:text-blue-300">
                Home
              </a>
              <a href="#about" className="hover:text-blue-300">
                About
              </a>
              <a href="#services" className="hover:text-blue-300">
                Services
              </a>
              <a href="#contact" className="hover:text-blue-300">
                Contact
              </a>
            </div>

            {/* Contact and Booking */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-white">
                <BsGlobe />
              </button>
              <div className="text-white flex items-center gap-2">
                <HiOutlinePhone />
                +1 940-612-9127
              </div>
              <button className="bg-[#3b82f6] px-4 py-2 rounded-lg hover:bg-[#3b82f6]/90 text-white">
                Book an Appointment
              </button>
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden text-white text-2xl">
              <button onClick={() => setToggle(!toggle)}>
                {toggle ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {toggle && (
            <div className="lg:hidden flex flex-col items-start px-6 pb-6 text-white space-y-4">
              <a href="" className="hover:text-blue-300" onClick={() => setToggle(false)}>
                Home
              </a>
              <a href="#about" className="hover:text-blue-300" onClick={() => setToggle(false)}>
                About
              </a>
              <a href="#services" className="hover:text-blue-300" onClick={() => setToggle(false)}>
                Services
              </a>
              <a href="#contact" className="hover:text-blue-300" onClick={() => setToggle(false)}>
                Contact
              </a>
              <div className="flex items-center gap-2">
                <HiOutlinePhone />
                +1 940-612-9127
              </div>
              <button className="bg-[#3b82f6] px-4 py-2 rounded-lg hover:bg-[#3b82f6]/90 text-white">
                Book an Appointment
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Navbar;

