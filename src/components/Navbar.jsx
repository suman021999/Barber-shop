
import { MdOutlineColorLens } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";
function Navbar() {
    return (
        <>
            <section className='fixed top-0 left-0 right-0 z-10'>
                <div className='flex  justify-between items-center h-20 bg-gray-800 p-4 px-24'>
                    <div>
                        <img className='h-14 w-14 rounded-full' src="/public/logo.png" alt="" />
                    </div>

                    <div>
                        <ul className='flex space-x-4 text-white'>
                            <li className='hover:text-blue-300'>Home</li>
                            <li className='hover:text-blue-300'>About</li>
                            <li className='hover:text-blue-300'>Services</li>
                            <li className='hover:text-blue-300'>Gallery</li>
                            <li className='hover:text-blue-300'>Contact</li>
                        </ul>
                    </div>
                    <div className="flex space-x-4">
                        <button className="text-white"><MdOutlineColorLens /></button>
                        <button className="text-white"><BsGlobe /></button>
                        <div className="text-white flex items-center justify-center gap-2"><HiOutlinePhone />+1 940-612-9127</div>
                        <button className="bg-[#3b82f6] px-2 py-1 rounded-lg hover:bg-[#3b82f6]/90">Book an Appointment </button>
                    </div>
                </div>


            </section>

        </>
    );
}

export default Navbar
