import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Footersection from "./Footersection";
import Login from "./Login";

function Booking() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="bg-white rounded-lg p-0 max-w-full relative">
      {/* ---------- Images Grid ---------- */}
      <div className="grid grid-cols-2 gap-8 relative p-8 px-20">
        <img
          src="Plumbing Repair (8).png"
          alt="Main"
          className="w-[601px] h-[504px] object-cover rounded-lg row-span-2"
        />
        <img
          src="Plumbing Repair (11).png"
          alt="Secondary"
          className="w-[601px] h-[241px] object-cover rounded-lg"
        />
        <img
          src="Plumbing Repair (10).png"
          alt="Work"
          className="w-[601px] h-[241px] object-cover rounded-lg"
        />
      </div>

      {/* ---------- Save Button ---------- */}
      <div className="flex justify-end mt-0 px-20">
        <button className="flex items-center bg-white hover:scale-105 transition">
          <FaRegHeart size={23} className="text-black hover:text-red-500 mr-2" />
          <span className="text-black font-normal">Save</span>
        </button>
      </div>

      {/* ---------- Service Info ---------- */}
      <div className="mt-5 px-20">
        <h3 className="text-[28px] font-bold text-[#212529]">Plumbing Repair</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <span className="flex items-center text-green-600 font-medium mr-2">
            <FaStar className="text-white bg-green-600 rounded p-[2px] mr-1 w-[20px] h-[20px]" />
            4.9
          </span>
          <span className="text-black font-normal text-[16px]">(53 Reviews)</span>
        </div>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="grid grid-cols-3 gap-4 mt-6 px-20">
        {/* ---------- Left Content ---------- */}
        <div className="col-span-2 text-left">
          {/* Description */}
          <h4 className="text-[18px] border-b pb-0">Description</h4>
          <p className="text-[16px] mt-2 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
          <p className="mt-2 text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>

          {/* Included */}
          <h4 className="mt-6 text-[19px]">Whats Included</h4>
          <ul className="list-disc list-inside text-[14px] mt-2 space-y-1">
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
          </ul>

          {/* Excluded */}
          <h4 className="mt-6 text-[19px]">Whats Excluded</h4>
          <ul className="list-disc list-inside text-[14px] mt-2 space-y-1">
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
          </ul>
        </div>

        {/* ---------- Right Sidebar ---------- */}
        <div className="space-y-10 py-10">
          {/* Pricing Card */}
          <div className="border rounded-lg p-5 shadow-sm">
            <div className="bg-blue-100 rounded-lg p-4 flex justify-between items-center mb-5">
              <div className="flex flex-col items-center flex-1">
                <p className="text-[13px] text-gray-700">First hour charge</p>
                <p className="text-[17px] text-[#003580]">AED 90.00</p>
              </div>
              <div className="flex flex-col items-center flex-1 border-l border-blue-300 pl-10">
                <p className="text-[13px] text-gray-700">Later hour charge</p>
                <p className="text-[17px] text-[#003580]">AED 60.00 / hour</p>
              </div>
            </div>

            <button
              onClick={() => setShowLogin(true)}
              className="w-full h-[52px] bg-[#00343D] text-white rounded-lg hover:bg-[#024650] transition"
            >
              Book Now
            </button>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <img src="fluent_star-16-regular.svg fill.png" alt="Guarantee" className="w-6 h-6 mt-1" />
              <p>
                <span className="text-[17px]">100% Guarantee</span> <br />
                <span className="text-[14px]">Lorem Ipsum is simply dummy</span>
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <img src="icon.png" alt="Certified" className="w-6 h-6 mt-1" />
              <p>
                <span className="text-[17px]">Certified Technician</span> <br />
                <span className="text-[14px]">Lorem Ipsum is simply dummy</span>
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <img src="icon (1).png" alt="Pricing" className="w-6 h-6 mt-1" />
              <p>
                <span className="text-[17px]">Transparent Pricing</span> <br />
                <span className="text-[14px]">Lorem Ipsum is simply dummy</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Expandable Section ---------- */}
      <div className="mt-10 space-y-5 w-[612px] h-auto px-20">
        <div className="flex justify-between items-center bg-gray-100 px-9 py-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">
          <div>
            <p className="text-[16px] font-medium">How it Works</p>
            <p className="text-[13px] text-gray-500">Learn how Fixtek works for you.</p>
          </div>
          <span className="text-gray-500 text-xl">&gt;</span>
        </div>

        <div className="flex justify-between items-center bg-gray-100 px-9 py-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">
          <div>
            <p className="text-[16px] font-medium">Service Terms</p>
            <p className="text-[13px] text-gray-500">Learn how Fixtek works for you.</p>
          </div>
          <span className="text-gray-500 text-xl">&gt;</span>
        </div>
      </div>

      {/* ---------- Reviews Section ---------- */}
      <div className="mt-20 rounded-lg shadow-sm py-20 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            <img src="download (2).jpeg" alt="left" className="w-[67px] h-[136px] mt-1" />
            <h2 className="text-[52px] font-bold text-[#212529]">4.9</h2>
            <img src="download (1).jpeg" alt="right" className="w-[67px] h-[136px]" />
          </div>
          <p className="text-gray-600 text-[13px] mt-0">Based on 53+ Reviews</p>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-6 text-left px-20 py-10">
          {/* David */}
          <div className="flex items-start space-x-3">
            <img src="user.png" alt="David" className="w-[43px] h-[43px] rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="text-[16px]">David</p>
                <div className="flex text-black text-[18px]">{"★★★★★"}</div>
              </div>
              <p className="text-[12px] text-gray-500">1 month ago</p>
              <p className="mt-1 text-[12px] text-gray-700">Good service, easy availability</p>
            </div>
          </div>

          {/* Aneeta */}
          <div className="flex items-start space-x-3">
            <img src="user.png" alt="Aneeta" className="w-[43px] h-[43px] rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="text-[16px]">Aneeta</p>
                <div className="flex text-black text-[18px]">{"★★★★★"}</div>
              </div>
              <p className="text-[12px] text-gray-500">1 month ago</p>
              <p className="mt-1 text-[12px] text-gray-700">Excellent experience</p>
            </div>
          </div>

          {/* Latheef */}
          <div className="flex items-start space-x-3 mt-6">
            <img src="Profile Image.png" alt="Latheef" className="w-[43px] h-[43px] rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="text-[16px]">Latheef</p>
                <div className="flex text-black text-[18px]">{"★★★★★"}</div>
              </div>
              <p className="text-[12px] text-gray-500">4 months ago</p>
              <p className="mt-1 text-[12px] text-gray-700">Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button className="text-[#00343D] font-medium underline">View All</button>
        </div>
      </div>

      <Footersection />

      {/* ---------- Login Popup ---------- */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
}

export default Booking;
