import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ scrollToServiceRef }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleServicesClick = () => {
    if (location.pathname === "/") {
      scrollToServiceRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/services");
    }
  };

  return (
    <div className="flex justify-center">
      <nav className="w-[814px] bg-white shadow-xl rounded-2xl justify-center">
        <div className="w-[814px] h-[43px] flex justify-between items-center space-x-10 py-3 px-10 font-manrope text-[17px] text-gray-800">
          
          {/* Left Links */}
          <div className="flex space-x-20">
            <button
              onClick={handleServicesClick}
              className="hover:text-black font-manrope"
            >
              Services
            </button>
            <NavLink
              to="/who-we-are"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "hover:text-black"
              }
            >
              Who We Are
            </NavLink>
          </div>

          {/* Logo */}
          <div className="text-center flex-shrink-0">
            <NavLink to="/" className="block text-center">
              <h1 className="text-[20px] font-extrabold tracking-wide">FIXTEK</h1>
              <p className="text-[7px] font-semibold tracking-widest">MAINTENANCE</p>
            </NavLink>
          </div>

          {/* Right Links */}
          <div className="flex space-x-20">
            <NavLink
              to="/partner-with-us"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "hover:text-black"
              }
            >
              Partner With Us
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "hover:text-black"
              }
            >
              FAQs
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}





