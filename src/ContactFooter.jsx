import React from "react";
import logo from "../public/footerlogo.png";

const ContactFooter = () => {
  return (
    <footer className="w-full bg-white text-gray-800 ">
      {/* Top Contact Info */}
      <div className="px-6 md:px-20 py-20  md:flex justify-between border-b border-gray-200">
        <div className="mb-6 md:mb-0">
          <p className="text-xl  text-[#000000]">Contact Info</p>
          <h2 className="text-4xl w-full md:w-[400px] font-bold mt-1">
            We are always happy to assist you
          </h2>
        </div>
        <div className="mb-6 md:mb-0 pt-4">
          <p className="text-sm font-medium">Email Address</p>
          {/* <p>----</p> */}
          <p className="text-sm text-[#000000]">
            medicareplansandyou@gmail.com
          </p>
          <p className="text-sm pt-2 text-gray-400">
            Assistance hours: <br />
            Monday - Friday 6 am to 8 <br />
            pm EST
          </p>
        </div>
        <div className="pt-4">
          <p className="text-sm font-medium text-[#000000]">
            Contact Info Casey Tarantino
          </p>
          {/* <p>----</p> */}
          <p className="text-sm text-[#000000]">+18504491074</p>
          <p className="text-sm pt-2 text-gray-400">
            Assistance hours: <br />
            Monday - Friday 6 am to 8<br /> pm EST
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1E4D91] text-white">
        <div className="flex flex-col md:flex-row px-6 md:px-20 py-10 gap-12 md:gap-28">
          {/* Left half: Logo & Disclaimer */}
          <div className="w-full md:w-1/2">
            <img src={logo} alt="Logo" className="h-16 mb-4" />
            <p className="text-sm leading-relaxed text-white">
              This website is not affiliated with or endorsed by Medicare, the
              Centers for Medicare & Medicaid Services (CMS), the Department of
              Health and Human Services (DHHS), or any other governmental
              agency. The content provided has not been reviewed or approved by
              Medicare. To get a full list of available plans in your area,
              please call 1-800-MEDICARE (1-800-633-4227), available 24/7. TTY
              users can call 1-877-486-2048 or visit{" "}
              <a href="https://www.medicare.gov" className="underline">
                www.medicare.gov
              </a>
              .
            </p>
          </div>

          {/* Right half: Links in two columns */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-lg">Links</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h4 className="font-semibold mb-3">Links</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <a href="#">Lorem</a>
                </li>
                <li>
                  <a href="#">Lorem</a>
                </li>
                <li>
                  <a href="#">Lorem</a>
                </li>
                <li>
                  <a href="#">Lorem</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
