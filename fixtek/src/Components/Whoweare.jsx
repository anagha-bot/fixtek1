import React from 'react'
import Footersection from "./Footersection";

function Whoweare() {
  return (
    <div className="mt-20 space-y-20">

      {/* ================= WHO WE ARE SECTION ================= */}
      <div className="flex justify-center"> 
        <div className="flex justify-between items-center bg-[#F9F3EF] rounded-xl w-[1244px] h-[552px] shadow-sm p-8">
          
          {/* Left Content */}
          <div className="w-1/2 pr-6 flex flex-col justify-center">
            <h2 className="text-[41px] font-bold text-[#00343D] mb-2 leading-snug py-6">
              Lorem Ipsum is simply <br /> dummy text of the printing and typesetting.
            </h2>
            <p className="text-[#212529] text-[15px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting <br />
              industry. Lorem Ipsum has been th
            </p>
          </div>

          {/* Right Image */}
          <div className="w-1/2 flex justify-center">
            <div className="w-[500px] h-[500px] flex items-center">
              <img
                src="Image+Background (1).png"
                alt="who we are"
                className="object-cover w-[499px] h-[492px]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= OUR MISSION / VISION SECTION ================= */}
      <div className="flex justify-between items-start max-w-[1244px] mx-auto">
        {/* Left Content */}
        <div className="w-2/3">
          <h2 className="text-[31px] font-semibold text-[#212529] mb-3">Our Mission</h2>
          <p className="text-[#212529] text-[15px] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br/>
             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a<br/> 
             galley of type and scrambled it to make a type specimen book
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-3 px-6 w-1/3">
          <button className="w-[391px] h-[102px] flex items-center gap-3  border rounded-xl p-4 shadow-sm bg-blue-50 hover:bg-blue-100">
          <img 
    src="Mission Icon.png"   // <-- your image path
    alt="mission icon" 
    className="w-6 h-6"
  />
  <span>Our Mission</span>
</button>

<button className="w-[391px] h-[102px] flex items-center gap-3 border rounded-xl p-4 shadow-sm bg-blue-50 hover:bg-blue-100">
  <img 
    src="Vision Icon.png"   // <-- your image path
    alt="vision icon" 
    className="w-6 h-6"
  />
  <span>Our Vision</span>
</button>
        </div>
      </div>

      <h2 className="text-center text-[33px] font-bold text-[#00343D] py-6">
    Fixtek Everything. Find Spares. Book Instantly <br />
    with the Fixtek Home Service App
  </h2>
  <p className="text-center text-[#212529] text-[13px] mt-3 ">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>
    Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting.
  </p>

  {/* Phone + Cards Layout */}
  <div className="flex justify-center items-start mt-14 gap-16">
    
    {/* Left Side Feature Cards */}
    <div className="flex flex-col gap-6">
      <div className="w-[196px] h-[128px]">
        <img src="Figure (8).png" alt="6000+ Users" className="w-full h-full object-contain rounded-xl shadow-md" />
      </div>
      <div className="w-[183px] h-[116px] mt-10">
        <img src="Background+Border (2).png" alt="Professionals" className="w-full h-full object-contain rounded-xl shadow-md" />
      </div>
      <div className="w-[144px] h-[154px]">
        <img src="image (3).png" alt="Analytics" className="w-full h-full object-contain rounded-xl " />
      </div>
      <div className="w-[144px] h-[144px] mt-0">
        <img src="Container (8).png" alt="Reports" className="w-full h-full object-contain rounded-xl  " />
      </div>
    </div>

    {/* Phone Mockup */}
    <div className="w-[305px] h-[450px] z-10">
      <img
        src="iPhone 13 Pro (2).png"
        alt="Fixtek App"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right Side Feature Cards */}
    <div className="flex flex-col gap-6">
      <div className="w-[171px] h-[77px]">
        <img src="Figure (10).png" alt="Coupons" className="w-full h-full object-contain rounded-xl shadow-md" />
      </div>
      <div className="w-[144px] h-[154px]">
        <img src="Coupen-home.webp" alt="Wishlist" className="w-[144px] h-[154px] object-contain rounded-xl " />
      </div>
      <div className="w-[184px] h-[90px] mt-10">
        <img src="Vector (1).png" alt="Rewards" className="w-full h-full object-contain rounded-xl " />
      </div>
        <div className="w-[160px] h-[120px] mt-10">
        <img src="Background+Border (3).png" alt="4.5 Rating" className="w-full h-full object-contain rounded-xl shadow-md" />
      </div>
    </div>
  </div>
  <Footersection/>
</div>
  );
}

export default Whoweare;
