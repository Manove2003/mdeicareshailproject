import React, { useState } from "react";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Button */}
      <div className="flex justify-center mt-4 mb-12">
        <button
          onClick={togglePopup}
          className="items-center bg-[#1E4D91] text-white px-6 py-3 rounded-md shadow-lg text-sm"
        >
          Contact An Agent
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-2 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm">
          <div className="bg-white w-[90%] max-w-80 p-6 rounded-lg shadow-xl relative">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Contact an Agent
            </h2>

            <form className="text-center">
              <div>
                <label className="block text-sm font-medium text-[#000000]">
                  Casey Tarantino
                </label>
                <p className="text-base text-[#000000]">+18504491074</p>
              </div>
              <div>
                <p className="text-base text-[#000000]">
                  medicareplansandyou@gmail.com
                </p>
              </div>
            </form>

            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
