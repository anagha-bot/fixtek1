import { FaStar } from "react-icons/fa";

function Test() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-[#00343D] text-white p-6 rounded-lg flex flex-col md:flex-row items-start justify-between max-w-[1224px] h-[543px] mx-9 mt-9">
        
        {/* Left side image */}
        <div className="flex-shrink-0">
          <div>
            <img
              src="Background.png"
              alt="Plumber fixing a sink"
              className="rounded-lg w-[402px] h-[403px] object-cover"
            />
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-100">
              <FaStar className="text-yellow-400 text-lg" />
              <span>10,289 Plumbing services completed this year.</span>
            </div>
          </div>
        </div>

        {/* Right side text */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-6">
          <h1 className="text-[36px] font-bold leading-tight">
            Plumbing Problems? We&apos;re here for you.
          </h1>
          <p className="text-gray-200 mt-3 text-[15px] font-manrope">
            We offer expert plumbing service — from leak repairs and pipe fixes
            to tap replacements, all done right at your doorstep.
          </p>
          <div className="flex gap-6 mt-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-sm">✔️</span>
              <span>Certified Technician</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">💰</span>
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-9 mt-9">
        <h2 className="text-[22px] mb-4 font-manrope">Plumbing Services</h2>

        <div className="flex flex-wrap gap-4">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md flex p-0 gap-4 w-[393px] h-[172px]">
            <img
              src="Plumbing Repair.png"
              alt="Leak Repair"
              className="rounded-lg h-[172px] w-[134px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs text-green-600 font-semibold">Best Value</span>
                <h3 className="mt-1 font-semibold font-manrope">Plumbing Repair</h3>
               <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <FaStar className="text-green-600" /> 4.8 (43)
              </div>
               <p className="text-sm text-gray-500 font-manrope">
                  Book an expert plumber for an on-site insep..
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md flex p-0 gap-4 w-[393px] h-[172px]">
            <img
              src="Plumbing Installation.png"
              alt="Pipe Installation"
              className="rounded-lg h-[172px] w-[134px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mt-3 font-semibold font-manrope">Plumbing Installation</h3>
               <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <FaStar className="text-green-600" /> 5.0 (18)
               </div>
               <p className="text-sm text-gray-500 font-manrope">
                  Book an expert plumber for on-site issue in...
                </p>
              </div>
              
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md flex p-0 gap-4 w-[393px] h-[172px]">
            <img
              src="Drainage Related.png"
              alt="Drain Cleaning"
              className="rounded-lg h-[172px] w-[134px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mt-3 font-semibold font-manrope">Drainage Related</h3>
                <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <FaStar className="text-green-600" /> 5.0 (11)
              </div>
                <p className="text-sm text-gray-500 font-manrope">
                  Book a skilled plumber to inspect the probl...
                </p>
              </div>
              
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-md flex p-0 gap-4 w-[393px] h-[172px]">
            <img
              src="Major Plumbing Work.png"
              alt="Maintenance"
              className="rounded-lg h-[172px] w-[134px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mt-3 font-semibold font-manrope">Major Plumbing Work</h3>
                 <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                <FaStar className="text-green-600" /> 4.9 (81)
              </div>
                <p className="text-sm text-gray-500 font-manrope">
                  The plumbing services include major plumbin...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
