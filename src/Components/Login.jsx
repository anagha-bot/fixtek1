import React, { useState } from "react";

function Login({ onClose, onVerified }) {
  const [step, setStep] = useState(1); // 1 = phone input, 2 = OTP
  const [phone, setPhone] = useState({ countryCode: "IN", number: "" });
  const [otp, setOtp] = useState("");

  const handleLoginClick = () => {
    if (!phone.number || phone.number.trim().length < 6) {
      alert("Please enter a valid phone number");
      return;
    }
    setStep(2);
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.trim().length < 4) {
      alert("Please enter the OTP");
      return;
    }
    if (onVerified) onVerified();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-60 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[777px] h-auto p-6 md:p-9 relative font-manrope overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-black hover:text-black text-[32px] z-10"
        >
          ×
        </button>

        {step === 1 && (
          <>
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <h2 className="text-[40px] md:text-[64px] font-bold text-black">
                  Login
                </h2>
                <p className="text-black text-[20px] md:text-[25px] mt-1">
                  Login to your Fixtek account
                </p>
                <div className="border-b-2 border-gray-700 mt-6"></div>
              </div>

              {/* Image */}
              <img
                src="isometric-data-protection-concept-with-parent-child-login-window-lock-3d 1.png"
                alt="login illustration"
                className="w-[142px] h-[198px] object-contain mx-auto md:mx-0"
              />
            </div>

            {/* Phone Input */}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <select
                className="w-full md:w-[97px] h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black font-medium focus:outline-none"
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
                className="w-full md:w-[515px] h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] focus:outline-none focus:ring-2 focus:ring-[#E4E4E4]"
                value={phone.number}
                onChange={(e) => setPhone({ ...phone, number: e.target.value })}
              />
            </div>

            {/* Login Button */}
            <button
              className="w-full md:w-[622px] h-[55px] md:h-[60px] bg-[#00343D] text-white rounded-lg mt-6 hover:bg-[#024650] transition text-[16px] md:text-[18px] font-bold"
              onClick={handleLoginClick}
            >
              Login
            </button>

            {/* Terms & Policy */}
            <p className="text-[14px] md:text-[18px] font-medium text-black mt-6 leading-relaxed">
              By clicking on Login, I agree to our{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Terms and Conditions
              </span>
              ,<br className="hidden md:block" /> our{" "}
              <span className="font-bold text-black cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>
          </>
        )}

        {step === 2 && (
          <div className="flex flex-col md:flex-row justify-between items-start font-manrope gap-6">
            {/* Left: OTP Content */}
            <div className="flex flex-col flex-1">
              <h2 className="text-[36px] md:text-[50px] font-bold text-black">
                Enter OTP
              </h2>
              <p className="text-black text-[18px] md:text-[23px] font-medium mt-2">
                We sent an OTP to your <br className="hidden md:block" /> phone
                number {phone.number}
              </p>
              <div className="border-b-2 border-black mt-4 w-[200px]"></div>

              {/* OTP Boxes */}
              <div className="flex flex-wrap gap-3 md:gap-4 mt-3">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-[50px] h-[55px] md:w-[88px] md:h-[75px] text-center text-[18px] md:text-[24px] font-bold border rounded-lg bg-[#E4E4E4] focus:outline-none focus:ring-2 focus:ring-[#00343D]"
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
                className="w-full md:w-[622px] h-[55px] md:h-[60px] bg-[#00343D] text-white rounded-lg mt-8 hover:bg-[#024650] transition text-[16px] md:text-[18px] font-bold"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>

              {/* Resend OTP */}
              <p className="text-[14px] md:text-[18px] text-black mt-4">
                Didn’t receive the OTP?{" "}
                <span className="text-green-600 font-medium cursor-pointer hover:underline">
                  Resend OTP
                </span>
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <img
                src="isometric-data-protection-concept-with-parent-child-login-window-lock-3d 1.png"
                alt="OTP illustration"
                className="w-[142px] h-[198px] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;

