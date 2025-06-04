import React, { useState } from "react";
import img1 from "./assets/Group 1171275363.png";
import sunshape from "./assets/Group.png";

const MedicareCUSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="flex justify-center items-center px-4 py-10 bg-white min-h-screen relative">
        {/* Decorative Spinner */}
        <div className="absolute top-0 md:top-8 right-4 md:right-32 w-10 h-10">
          <img
            src={sunshape}
            alt="sun shape"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 p-4 md:p-10 rounded-lg h-full">
          {/* Left: Image Section */}
          <div className="w-full md:w-1/2 items-stretch">
            <div className="h-full w-full">
              <img
                src={img1}
                alt="Medicare"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right: Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#000000] leading-snug mb-6">
              We Can Help
            </h2>
            <p className="text-[#7B7B7B] mb-4 text-base leading-relaxed">
              We understand that Medicare can be overwhelming. There are a lot
              of factors to consider when exploring options, and such factors
              can present their own set of challenges. In light of these
              challenges, we offer assistance that works to broaden
              understanding of Medicare benefits as well as help eligible
              individuals find the right plan for their needs. Our goal is for
              you to find the coverage as well as the peace of mind you are
              looking for. 
              <br /> Our Medicare program has been in operation since 2013,
              working to serve the members of credit unions and their families.
              We specialize in the following areas:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 text-base">
              <li>Medicare Advantage Plans</li>
              <li>Medicare Supplement Plans</li>
              <li>Drug Plans</li>
              <li>Original Medicare</li>
              <li>Personal Consultation</li>
            </ul>
            <div className="flex mt-8  w-full">
              <button
                onClick={togglePopup}
                className="w-40 items-center bg-[#1E4D91] underline text-white px-6 py-3 rounded-md shadow-lg text-sm"
              >
                Contact An Agent
              </button>
              {/* Popup Modal */}
              {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white w-[90%] max-w-80 p-6 rounded-lg shadow-xl relative">
                    <h2 className="text-xl font-semibold mb-4 text-center">
                      Contact an Agent
                    </h2>

                    {/* Form */}
                    <form className=" text-center">
                      <div>
                        <label className="block text-sm font-medium  text-[#000000]">
                          Casey Tarantino
                        </label>
                        <p className="text-base text-[#000000]">+18504491074</p>
                      </div>
                      <div>
                        {/* <label className="block text-sm font-medium text-[#000000]">
                          Email
                        </label> */}
                        <p className="text-base text-[#000000]">
                          medicareplansandyou@gmail.com
                        </p>
                      </div>
                    </form>

                    {/* Close Icon (optional) */}
                    <button
                      onClick={togglePopup}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}
              <div className="flex-1  border-t-2  border-t-[#1E4D91]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6">
        {/* Card 1 - Cost of Care */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-[500px] h-auto md:h-[400px]">
          <h2 className="text-3xl font-semibold text-center text-[#243443] mb-4">
            Cost of Care
          </h2>
          <p className="text-[#000000] pt-8 leading-relaxed">
            Medicare does come at a cost. It isn’t free. However, for many, it
            is the most affordable option. The amount paid largely depends on
            the coverage you choose. This can be discussed in detail during
            enrollment.
          </p>
        </div>

        {/* Card 2 - Medicare Supplement Insurance */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-[500px] h-auto md:h-[400px] overflow-auto">
          <h2 className="text-3xl font-semibold text-center text-[#243443] mb-2">
            Medicare Supplement <br /> Insurance
          </h2>
          <p className="text-[#000000] leading-relaxed">
            Original Medicare covers many of the costs associated with your
            medical care— but not all of them. For this reason, many of those
            enrolled in a Medicare plan also opt for Medicare Supplement
            Insurance (Medigap). This coverage is provided by private companies
            and can help with remaining health costs such as copayments,
            coinsurance, and deductibles. we help individuals find the best
            coverage options possible which often include Medigap solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default MedicareCUSection;
