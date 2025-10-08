import React, { useState } from "react";

function Login({ onClose }) {
  const [step, setStep] = useState(1); // 1 = phone input, 2 = OTP
  const [phone, setPhone] = useState({ countryCode: "IN", number: "" });
  const [otp, setOtp] = useState("");

  const handleLoginClick = () => {
    if (!phone.number || phone.number.trim().length < 6) {
      alert("Please enter a valid phone number");
      return;
    }
    console.log("Phone number submitted:", phone.number);
    setStep(2);
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.trim().length < 4) {
      alert("Please enter the OTP");
      return;
    }
    console.log("OTP entered:", otp);
    // Add OTP verification logic here
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-start justify-center z-60 pt-80">
      <div className="bg-white rounded-xl shadow-lg w-[777px] h-auto p-9 relative font-manrope">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-8 text-black hover:text-black text-[32px]"
        >
          ×
        </button>

        {step === 1 && (
          <>
            {/* Header Section */}
            <div className="flex justify-between px-7 py-7 items-start">
              <div>
                <h2 className="text-[64px] font-bold text-black">Login</h2>
                <p className="text-black text-[25px] mt-1">
                  Login to your Fixtek account
                </p>
                <div className="border-b-2 border-gray-700 mt-7"></div>
              </div>

              {/* Image (Top Right) */}
              <img
                src="isometric-data-protection-concept-with-parent-child-login-window-lock-3d 1.png"
                alt="login illustration"
                className="w-[142px] h-[198px] object-contain"
              />
            </div>

            {/* Phone Input */}
            <div className="mt-8 flex gap-4">
              <select
                className="w-[97px] h-[75px] px-3 py-4 border rounded-lg bg-[#E4E4E4] text-black font-medium focus:outline-none"
                value={phone.countryCode}
                onChange={(e) =>
                  setPhone({ ...phone, countryCode: e.target.value })
                }
              >
                <option value="IN">IN +91</option>
                <option value="US">US +1</option>
                <option value="UK">UK +44</option>
                <option value="AE">AE +971</option>
              </select>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-[515px] h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] focus:outline-none focus:ring-2 focus:ring-[#E4E4E4]"
                value={phone.number}
                onChange={(e) =>
                  setPhone({ ...phone, number: e.target.value })
                }
              />
            </div>

            {/* Login Button */}
            <button
              className="w-[622px] h-[60px] bg-[#00343D] text-white rounded-lg mt-6 hover:bg-[#024650] transition text-[18px] font-bold"
              onClick={handleLoginClick}
            >
              Login
            </button>

            {/* Terms & Policy */}
            <p className="text-[18px] font-medium text-black mt-6 leading-relaxed">
              By clicking on Login, I agree to our{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Terms and Conditions
              </span>
              ,<br /> our{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>
          </>
        )}
      {step === 2 && (
  <div className="flex justify-between items-start font-manrope">
    {/* Left: OTP Content */}
    <div className="flex flex-col items-center flex-1">
      {/* Heading */}
      <h2 className="text-[50px] font-manrope font-bold text-black">Enter OTP</h2>
      <p className="text-black text-[23px] font-medium font- manrope mt-2">
        We sent an OTP to your <br/> phone number {phone.number}
      </p>
      <div className="border-b-2 border-gray-300 mt-4 w-[120px]"></div>

      {/* OTP Boxes */}
      <div className="flex gap-3 mt-8">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-[88px] h-[75px] text-center text-[24px] font-bold border rounded-lg bg-[#E4E4E4] focus:outline-none focus:ring-2 focus:ring-[#00343D]"
            value={otp[index] || ""}
            onChange={(e) => {
              const newOtp = otp.split("");
              newOtp[index] = e.target.value;
              setOtp(newOtp.join(""));
            }}
          />
        ))}
      </div>

      {/* Verify Button */}
      <button
        className="w-[300px] h-[55px] bg-[#00343D] text-white rounded-lg mt-8 hover:bg-[#024650] transition text-[18px] font-bold"
        onClick={handleVerifyOtp}
      >
        Verify OTP
      </button>

      {/* Resend OTP */}
      <p className="text-[16px] text-black mt-4">
        Didn’t receive the OTP?{" "}
        <span className="text-green-600 font-medium cursor-pointer hover:underline">
          Resend OTP
        </span>
      </p>
    </div>

    {/* Right: Illustration */}
    <div className="ml-8">
      <img
        src="isometric-data-protection-concept-with-parent-child-login-window-lock-3d 1.png"
        alt="OTP illustration"
        className="w-[20px] h-[30px] object-contain"
      />
    </div>
  </div>
)}


      </div>
    </div>
  );
}

export default Login;
