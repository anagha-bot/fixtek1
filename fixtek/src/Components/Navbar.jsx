import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center"> 
    <nav className="w-[814px] bg-white shadow-xl  rounded-2xl justify-center"> 
      <div className="w-[814px] h-[43px] flex justify-between  items-center space-x-10 py- 3 px-10 font-manrope text-[17px] text-gray-800">
        
        {/* Left Links */}
        <div className="flex space-x-20">
          <Link to="/services" className="hover:text-black">
            Services
          </Link>
          <Link to="/who-we-are" className="hover:text-black">
            Who We Are
          </Link>
        </div>

         <div className="text-center flex-shrink-0">
            <Link to="/" className="block text-center">
              <h1 className="text-[20px] font-extrabold tracking-wide">FIXTEK</h1>
              <p className="text-[7px] font-semibold tracking-widest">MAINTENANCE</p>
            </Link>
          </div>

        {/* Right Links */}
        <div className="flex space-x-20">
          <Link to="/partner-with-us" className="hover:text-black">
            Partner With Us
          </Link>
          <Link to="/faqs" className="hover:text-black">
            FAQs
          </Link>

          
        </div>
      </div>
    </nav>
    </div>
  );
}

