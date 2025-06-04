import React, { useState } from "react";

const EligibilityCriteria = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-[#1E4D91] text-white flex flex-col items-center justify-center px-4 py-10 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Who Is Eligible?
      </h1>

      <p className="text-sm sm:text-base text-center max-w-2xl mt-4">
        In order to qualify for Medicare, you must either be a United States
        citizen or a legal resident. Legal residents must live in the U.S. for
        at least five years in a row before enrolling in a program. Here are
        some additional qualifying factors:
      </p>

      <div className="flex flex-col md:flex-row gap-6 mt-10 ">
        {/* Card 1 */}
        <div
          className="bg-[#B6D4FF] text-[#1e4b87] p-6 rounded-xl w-full max-w-64 transition duration-300 border border-blue-300"
          style={{
            boxShadow: "8px 8px 0px 0px black",
          }}
        >
          <div className="border-t-2 border-[#1E4D91] w-1/2 mx-auto mb-4" />

          <p className="text-base mb-4 pt-4">
            The individual is 65 years of age or older
          </p>
          {/* <button className="text-base text-[#1E4D91] border border-[#1E4D91] px-4 mt-8 mb-4 py-1 rounded mx-auto block">
            Learn More
          </button> */}
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#B6D4FF] text-[#1e4b87] p-6 rounded-xl w-full max-w-64 transition duration-300 border border-blue-300"
          style={{
            boxShadow: "8px 8px 0px 0px black",
          }}
        >
          <div className="border-t-2 border-[#1E4D91] w-1/2 mx-auto pt-4  mb-4" />
          <p className="text-base mb-4">
            The individual is younger than 65 but has a qualifying disability
          </p>
          {/* <button className="text-base text-[#1E4D91] border border-[#1E4D91] px-4 mt-8 mb-4 py-1 rounded mx-auto block">
            Learn More
          </button> */}
        </div>
      </div>

      <button
        onClick={togglePopup}
        className="mt-16 bg-white text-[#1E4D91] items-center  px-6 py-3 rounded-md shadow-lg text-sm transition"
      >
        Contact An Agent
      </button>
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[90%] max-w-80 p-6 rounded-lg shadow-xl relative">
            <h2 className="text-xl font-semibold mb-4 text-[#000000] text-center ">
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
    </div>
  );
};

export default EligibilityCriteria;
