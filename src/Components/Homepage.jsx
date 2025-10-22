import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Navbar from "./Navbar";
import Footersection from "./Footersection";
import { useNavigate } from "react-router-dom";



export default function Homepage({ serviceRef }) {
  const navigate = useNavigate(); // ✅ useNavigate gives navigation function

  const goToService = () => {
    navigate("/services"); // ✅ navigate to /services
  };

  return (
    <div className="min-h-screen bg-white font-manrope">
      {/* Hero Section */}
      <div className="w-full bg-white py-12 flex flex-col items-center text-center relative">
        {/* Sparkle Top Left */}
        <span className="absolute left-[330px] top-10 text-6xl ">✦</span>

        {/* Top small text */}
        <p className="text-[23px] font-bold text-gray-800">
          Lorem Ipsum is simply
        </p>

        {/* Main Heading */}
       <h1 className="text-[43px] md:text-[43px] font-extrabold mt-5 leading-snug relative text-manrope ">
  <span className="relative font-extrabold text-manrope 
    after:content-[''] 
    after:absolute 
    after:left-6 
    after:bottom-0 
    after:w-[136px] 
    after:h-[9px] 
    after:bg-gradient-to-r after:from-transparent after:via-black after:to-black 
    ">
    Home
  </span>{" "}
  services at your doorstep
</h1>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-xl text-[13px] text-manrope">
          Lorem Ipsum has been the industry&apos;s<br /> standard dummy text
          ever since the
        </p>

        {/* App Buttons */}
        <div className="flex gap-4 mt-4 relative">
          {/* Sparkle Left Near Buttons */}
          <span className="absolute -left-7 bottom-6  text-3xl">✦</span>
<span className="absolute left-[460px] bottom-[90px] text-5xl ">✦</span>
          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            <FaGooglePlay className="text-xl" />
            <div className="text-left">
              <p className="text-[8px] text-manrope leading-none">GET IT ON</p>
              <p className="text-sm text-manrope font-semibold">Google Play</p>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            <FaApple className="text-xl" />
            <div className="text-left">
              <p className="text-[10px] text-manrope leading-none">
                Download on the
              </p>
              <p className="text-sm text-manrope font-semibold">App Store</p>
            </div>
          </a>
        </div>
      </div>

      {/* Services Illustration + Background Section */}
      <div className="relative w-full bg-white">
        {/* Green background starting from workers’ waistline */}
        <div className="absolute bottom-[0px] left-0 w-full h-[95px] bg-[#0c3b38] "></div>

        {/* Workers + iPhone */}
        <div className="w-full flex flex-col items-center relative z-10">
          <div className="container mx-auto flex flex-col md:flex-row items-end justify-center gap-10">
            {/* Left Worker */}
            <img
              src="cleaner1.svg (1).png"
              alt="Worker ironing"
              className="w-[327px] h-[395px] md:w-56 object-contain"
            />

            {/* Mobile App */}
            <img
              src="iPhone 13 Pro (1).png"
              alt="App Preview"
              className="w-[305px] h-[593px] md:w-80 object-contain"
            />

            {/* Right Worker */}
            <img
              src="cleaner2.svg (1).png"
              alt="Worker cleaning"
              className="w-[327px] h-[395px] md:w-56 object-contain"
            />
          </div>
        </div>
      </div>
    {/* 🛠️ Find Your Home Service Section */}
<div ref={serviceRef} id="find-service" className="bg-[#0c3b38] h-[500px] w-full py-14 text-center text-white">
  <h2 className="text-[28px] md:text-[45px] font-bold mb-10 text-manrope">
    Find Your Home Service
  </h2>
  <div className="flex flex-col items-center justify-center">
    {/* Cards Row */}
    <div className="flex items-center justify-center gap-6 px-4 no-scrollbar mt-4">
      {/* Card 1 */}
      <div className="bg-white rounded-xl p-2 text-center shadow w-[140px] h-[120px] opacity-70 ">
        <p className="text-black text-[11px] font-semibold text-manrope">
          Microwave Oven
        </p>
        <p className="text-green-600 text-[9px] text-manrope">
          5.3k+ Bookings
        </p>
        <img
          src="Microwave Oven.png"
          alt="oven"
          className="w-[40px] h-[40px] object-contain mx-auto mt-2"
        />
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-3 text-center shadow w-[180px] h-[150px] opacity-80">
        <p className="text-black text-[15px] font-semibold text-manrope">
          Carpentry
        </p>
        <p className="text-green-600 text-[12px] font-semibold text-manrope">
          9.3k+ Bookings
        </p>
        <img
          src="Carpentry.png"
          alt="carpentry"
          className="w-[55px] h-[55px] object-contain mx-auto mt-2"
        />
      </div>

      {/* Card 3 */}
      <div onClick={goToService} className="bg-white rounded-2xl p-5 text-center shadow-lg w-[260px] h-[210px] scale-110">
        <p className="text-black text-[20px] text-manrope font-semibold">
          Plumbing
        </p>
        <p className="text-green-600 text-[16px] text-manrope font-semibold">
          10.3k+ Bookings
        </p>
        <img
          src="Plumbing (2).png"
          alt="plumbing"
          className="w-[85px] h-[85px] object-contain mx-auto mt-4"
        />
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl p-3 text-center shadow w-[180px] h-[150px] opacity-80">
        <p className="text-black text-[15px] text-manrope font-semibold">
          Electrical
        </p>
        <p className="text-green-600 text-[12px] text-manrope font-semibold">
          13.5k+ Bookings
        </p>
        <img
          src="Electrical.png"
          alt="electrical"
          className="w-[55px] h-[55px] object-contain mx-auto mt-2"
        />
      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-xl p-2 text-center shadow w-[140px] h-[120px] opacity-70">
        <p className="text-black text-[11px] text-manrope font-semibold">
          Cleaning
        </p>
        <p className="text-green-600 text-[9px] text-manrope">
          13.5k+17p Bookings
        </p>
        <img
          src="Cleaning (1).png"
          alt="cleaning"
          className="w-[40px] h-[40px] object-contain mx-auto mt-2"
        />
      </div>
    </div>
  </div>
</div>
      {/* ⭐ NEW SECTION: Most Booked Services + Banner + Testimonials */}
      <div className="w-full bg-white py-16 px-15">
        {/* Heading */}
        <h2 className="text-[24px] font-bold px-10 text-manrope">
          Most booked services
        </h2>

        {/* Services Cards Row */}
        <div className="container mx-auto flex gap-6 mt-8 px-1 ">
          {/* Card 1 */}
          <div className="flex flex-col inline-block">
            <img
              src="Container (1).png"
              alt="service1"
              className="rounded-lg shadow w-[233px] h-[233px]"
            />
            <div className="mt-4 text-left">
              <p className="text-[15px] font-semibold text-black text-manrope w-[233px] h-[48px] px-2">
                Pest control (includes utensil<br /> removal)
              </p>
              <p className="text-gray-500 text-[14px] text-manrope px-1">
                ⭐ 4.79 (117K)
              </p>
              <p className="text-black text-[14px] text-manrope px-2 py-1">₹1,098</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col inline-block">
            <img
              src="Container (2).png"
              alt="service2"
              className="rounded-lg shadow w-[233px] h-[233px]"
            />
            <div className="mt-4 text-left">
              <p className="text-[15px] font-semibold text-black text-manrope w-[233px] h-[48px] px-2">
                Apartment pest control <br />
                (includes utensil removal)
              </p>
              <p className="text-gray-500 text-[14px] text-manrope px-1">
                ⭐ 4.65 (89K)
              </p>
              <p className="text-black text-[14px] text-manrope px-2 py-1">₹2,499</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col inline-block ">
            <img
              src="Container (3).png"
              alt="service3"
              className="rounded-lg shadow w-[233px] h-[233px]"
            />
            <div className="mt-4 text-left space-y-1">
         <p className="text-[15px] font-semibold text-black text-manrope w-[233px] leading-tight px-2">
         Bed bugs control
         </p>
         <p className="text-gray-500 text-[14px] text-manrope leading-tight">
         ⭐ 4.77 (25k)
         </p>
          <p className="text-black text-[14px] text-manrope leading-tight px-2 px-1">₹1,599</p>
          </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col inline-block">
            <img
              src="Container (4).png"
              alt="service4"
              className="rounded-lg shadow w-[233px] h-[233px] "
            />
            <div className="mt-4 text-left space-y-1">
         <p className="text-[15px] font-semibold text-black text-manrope w-[233px] leading-tight px-2">
         Intense bathroom cleaning
         </p>
         <p className="text-gray-500 text-[14px] text-manrope leading-tight px-1 ">
         ⭐ 4.79 (2.9M)
         </p>
          <p className="text-black text-[14px] text-manrope leading-tight py-1 px-2">₹449</p>
          </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col inline-block">
            <img
              src="Container (5).png"
              alt="service5"
              className="rounded-lg shadow w-[233px] h-[233px]"
            />
                 <div className="mt-4 text-left space-y-1">
         <p className="text-[15px] font-semibold text-black text-manrope w-[233px] leading-tight px-2">
         Apartment termite control
         </p>
         <p className="text-gray-500 text-[14px] text-manrope leading-tight px-1">
         ⭐ 4.83 (16k)
         </p>
          <p className="text-black text-[14px] text-manrope leading-tight px-2 py-1">₹3,999</p>
          </div>
          </div>
        </div>
        
{/* Banner Section */}
<div className="relative w-full max-w-[1232px] h-auto h-[410px] mx-auto mt-20 rounded-lg shadow overflow-hidden">
  {/* Image */}
  <img
    src="/Frame 1171276389.png"
    alt="Smart Door Banner"
    className="w-full h-auto object-cover"
  />

  {/* Text content positioned over the image on the left side */}
  <div className="absolute inset-0 flex items-center pl-6 sm:pl-10">
    <div className="max-w-[550px] text-black">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug md:leading-tight">
        Turn Your <br />
        <span className=" text-[60px] text-black text-manrope  font-extrabold">Door Into A </span>
        <span className="text-[70px] text-orange-400 text-manrope font-extrabold">SMART ONE!</span>
      </h2>
      <p className="mt-3 text-sm sm:text-base text-manrope text-black">
        We offer reliable door lock installation services <br/> that will increase the
        security of your house or <br/>office.
      </p>
      <button className="mt-5 bg-orange-500 text-white font-bold text-manrope px-5 py-2 rounded-full shadow hover:bg-orange-600 transition">
        Request a Quote
      </button>
    </div>
  </div>
</div>


        {/* Testimonials */}
        <h2 className="text-center text-[43px] font-bold mt-20 text-manrope">
          See what our users are saying...
        </h2>

        <div className="container mx-auto flex flex-wrap justify-center gap-10 mt-16 px-6">
          {/* Card 1 */}
          <div className="relative w-[260px] px-4 py-10">
            <img
              src="Margin (8).png"
              alt="user1"
              className="w-[253px] h-[544px] mx-auto rounded-lg"
            />
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-4 w-[211px] h-[185px]">
              <p className="text-[11px] text-gray-600 text-manrope">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make."
              </p>
              <p className="mt-4 text-[11px] font-semibold text-manrope">
                Shraddha Musale
              </p>
               <button className="absolute bottom-4 right-2 text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-3 py-1 rounded-full">
      Powai
    </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-[260px] ">
            <img
              src="Margin (7).png"
              alt="user2"
              className="w-[310px] h-[628px] mx-auto rounded-lg"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-3 w-[211px] h-[185px]">
              <p className="text-[11px] text-gray-600 text-manrope">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make."
              </p>
              <p className="mt-4 text-[11px] font-semibold text-manrope">
                Sapana Jain
              </p>
             <button className="absolute bottom-5 right-2 text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-3 py-1 rounded-full">
      Powai
    </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-[260px] px-4 py-10 ">
            <img
              src="Margin (8).png"
              alt="user3"
              className="w-[253px] h-[544px] mx-auto rounded-lg"
            />
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-3 w-[211px] h-[185px]">
              <p className="text-[11px] text-gray-600 text-manrope">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make."
              </p>
              <p className="mt-4 text-[11px] font-semibold text-manrope">
                Shraddha Musale
              </p>
               <button className="absolute bottom-5 right-2 text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-3 py-1 rounded-full">
      Powai
    </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-[260px] px-3 py-3">
            <img
              src="Margin (9).png"
              alt="user4"
              className="w-[253px] h-[586px] mx-auto rounded-lg"
            />
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-3 w-[211px] h-[185px]">
              <p className="text-[11px] text-gray-600 text-manrope">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make."
              </p>
              <p className="mt-5 text-[11px] font-semibold text-manrope">
                Sunny Gala
              </p>
        <button className="absolute bottom-4 right-2 text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-3 py-1 rounded-full">
      Powai
    </button>
            </div>
          </div>
        </div>
      </div>

    <div className="bg-[white] w-full py-16  px-6 mt-16 flex flex-col items-center justify-center">
  {/* Top Row */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-12">
    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-[363px] h-[226px]">
      <img
        src="Figure.png"
        alt="Background Verified"
        className="w-[362px] h-[176px] rounded-t-2xl object-cover"
      />
      <p className="text-[15px] font-semibold text-gray-800 mt-2 px-3">
        Background Verified and Trusted Experts
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-[362px] h-[226px]">
      <img
        src="Figure (1).png"
        alt="Home Cleaning"
        className="w-[360px] h-[176px] bg-[#F6F6F6] rounded-t-2xl object-cover"
      />
      <p className="text-[15px] font-semibold text-gray-800 mt-2 px-3">
        Professionally Trained For Home Cleaning
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-[362px] h-[226px]">
      <img
        src="Figure (2).png"
        alt="Freedom"
        className="w-[360px] h-[176px] bg-[#F6F6F6]  rounded-t-2xl object-cover"
      />
      <p className="text-[15px] font-semibold text-gray-800 mt-2 px-3">
        Freedom to Cancel or Reschedule
      </p>
    </div>
  </div>

  {/* Centered Title */}
  <h2 className="text-center text-[36px] md:text-[36px] font-extrabold text-[#3C172A] text-manrope my-12">
    <span className="text-[#3C172A]">WHY CHOOSE </span>
    <span className="text-black">FIXTEK</span>
  </h2>

  {/* Bottom Row */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-0">
    {/* Card 4 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-[362px] h-[226px]">
      <img
        src="Figure (3).png"
        alt="Women Workforce"
        className="w-[360px] h-[176px] rounded-t-2xl object-cover"
      />
      <p className="text-[15px] font-semibold text-gray-800 mt-2 px-3">
        Powered By Strong Women Workforce
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-white  rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-[362px] h-[226px]">
      <img
        src="Figure (4).png"
        alt="Quality"
        className="w-[360px] h-[176px] rounded-t-2xl bg-[#F6F6F6] object-cover"
      />
      <p className="text-[15px] font-semibold text-gray-900 mt-2 font-bold px-3">
        Quality You Can Trust
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-[362px] h-[226px]">
      <img
        src="Figure (5).png"
        alt="Families"
        className="w-[360px] h-[176px] bg-[#F6F6F6] rounded-t-2xl object-cover"
      />
      <p className="text-[15px] font-semibold text-gray-900 mt-3 font-bold px-3">
        Trusted by 6000+ Families
      </p>
    </div>
  </div>
</div>
<Footersection />

</div>
  );
}
 







