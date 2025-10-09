import React from 'react'
import Footersection from "./Footersection";

function Whoweare() {
  return (
    <div className="mt-20 space-y-20">

      <div className="flex justify-center px-2">
  <div className="flex flex-col md:flex-row justify-between items-start bg-[#F9F3EF] rounded-xl w-full md:w-[1244px] h-auto md:h-[552px] shadow-sm p-6 md:p-8">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 pr-0 md:pr-6 flex flex-col justify-start text-center md:text-left">
      <h2 className="text-[28px] md:text-[41px] font-manrope font-bold text-[#00343D] mb-2 leading-snug py-4 md:py-13">
        Lorem Ipsum is simply <br /> dummy text of the printing and typesetting.
      </h2>
      <p className="text-[#212529] text-[14px] font-manrope md:text-[15px] leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />
        industry. Lorem Ipsum has been th
      </p>
    </div>
          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0 ">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center">
              <img
                src="10-ways-to-keep-your-house-clean.jpg"
                alt="who we are"
                className="object-cover w-[299px] h-[292px] md:w-[499px] md:h-[492px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= OUR MISSION / VISION SECTION ================= */}
      <div className="flex flex-col md:flex-row justify-between items-start max-w-[1244px] mx-auto px-4 gap-8 md:gap-0">
        {/* Left Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-[24px] md:text-[31px] font-semibold text-[#212529] font-manrope  mb-3">Our Mission</h2>
          <p className="text-[#212529] text-[14px] md:text-[15px] font-manrope  leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br/>
             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a<br/> 
             galley of type and scrambled it to make a type specimen book
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-3 px-0 md:px-6 w-full md:w-1/3 mt-6 md:mt-0">
          <button className="w-full md:w-[391px] h-[102px] flex items-center gap-3 border rounded-xl p-4 shadow-sm bg-blue-50 hover:bg-blue-100">
            <img src="Mission Icon.png" alt="mission icon" className="w-6 h-6" />
            <span>Our Mission</span>
          </button>

          <button className="w-full md:w-[391px] h-[102px] flex items-center gap-3 border rounded-xl p-4 shadow-sm bg-blue-50 hover:bg-blue-100">
            <img src="Vision Icon.png" alt="vision icon" className="w-6 h-6" />
            <span>Our Vision</span>
          </button>
        </div>
      </div>

      {/* ================= PHONE + CARDS SECTION ================= */}
      <h2 className="text-center font-manrope  text-[24px] md:text-[33px] font-bold text-[#00343D]">
        Fixtek Everything. Find Spares. Book Instantly <br />
        with the Fixtek Home Service App
      </h2>

      <p className="text-center font-manrope  text-[#212529] text-[12px] md:text-[13px] leading-relaxed px-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>
        Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>

      {/* Responsive Phone + Cards Layout */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-14 relative gap-12 md:gap-20">
        
        {/* Left Side Feature Cards */}
        <div className="flex flex-row md:flex-col gap-6 mt-4 md:mt-10">
          <div className="w-[196px] h-[128px] mx-auto md:ml-10">
            <img src="Figure (8).png" alt="6000+ Users" className="w-full h-full object-contain rounded-xl shadow-md" />
          </div>
          <div className="w-[183px] h-[116px] mx-auto md:mt-5">
            <img src="Background+Border (2).png" alt="Professionals" className="w-full h-full object-contain rounded-xl shadow-md" />
          </div>
          <div className="w-[144px] h-[154px] mx-auto md:ml-6">
            <img src="image (3).png" alt="Analytics" className="w-full h-full object-contain rounded-xl " />
          </div>
          <div className="w-[144px] h-[144px] mx-auto md:ml-16">
            <img src="Container (8).png" alt="Reports" className="w-full h-full object-contain rounded-xl" />
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="w-[200px] h-[320px] md:w-[305px] md:h-[450px] z-10 mt-8 md:mt-0">
          <img
            src="iPhone 13 Pro (2).png"
            alt="Fixtek App"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side Feature Cards */}
        <div className="flex flex-row md:flex-col gap-6 mt-4 md:mt-10">
          <div className="w-[171px] h-[77px] mx-auto md:ml-12">
            <img src="Figure (10).png" alt="Coupons" className="w-full h-full object-contain rounded-xl shadow-md" />
          </div>
          <div className="w-[144px] h-[154px] mx-auto">
            <img src="Coupen-home.webp" alt="Wishlist" className="w-[144px] h-[154px] object-contain rounded-xl " />
          </div>
          <div className="w-[184px] h-[90px] mx-auto md:mt-6 md:ml-8">
            <img src="Vector (1).png" alt="Rewards" className="w-full h-full object-contain rounded-xl " />
          </div>
          <div className="w-[160px] h-[120px] mx-auto md:mt-6 md:ml-14">
            <img src="Background+Border (3).png" alt="4.5 Rating" className="w-full h-full object-contain rounded-xl shadow-md" />
          </div>
        </div>
      </div>

      <Footersection/>
    </div>
  );
}

export default Whoweare;
