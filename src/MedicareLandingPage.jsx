import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // or use Heroicons if preferred
import "./VideoFrame.css";
import ContactPopup from "./ContactPopup";
import logofinal from "../public/logofinal.png";
import heroimg from "../public/img23.png";
import frameimg from "./assets/frame.jpeg";

export default function MedicareHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Auto-close mobile menu on resize to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="bg-radial-sky min-h-screen flex flex-col items-center px-4 lg:px-16 py-8">
        {/* Navbar */}
        <nav className="w-full bg-white shadow-md px-6 py-4 md:py-8 mb-10 rounded-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between lg:justify-center relative">
            {/* Left - Desktop Menu */}
            <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700 absolute left-6">
              <li className="text-black font-semibold hover:text-[#1E4D91] cursor-pointer">
                About
              </li>
              <li className="hover:text-[#1E4D91] cursor-pointer">Insurance</li>
              <li className="hover:text-[#1E4D91] cursor-pointer">Blog</li>
              <li className="hover:text-[#1E4D91] cursor-pointer">Review</li>
              <li className="hover:text-[#1E4D91] cursor-pointer">Claim</li>
            </ul>

            {/* Center - Logo */}
            <span className="text-[#1E4D91] font-bold text-sm lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <img
                className="h-10 md:h-16 w-auto max-w-[150px] object-contain"
                src={logofinal}
                alt="logo"
              />
            </span>

            {/* Right - CTA & Hamburger */}
            <div className="flex items-center space-x-4 ml-auto lg:absolute lg:right-6">
              {/* 📌 Schedule a Call (Desktop) */}
              <button
                onClick={togglePopup}
                className="hidden lg:inline-block bg-[#1E4D91] text-white px-4 py-2 rounded-full text-sm shadow-md"
              >
                Schedule a call
              </button>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* 📌 Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[102px] md:top-24 left-4 right-4 z-50 bg-white rounded-2xl shadow-lg p-6 lg:hidden">
            <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
              <li className="text-black font-semibold hover:text-[#1E4D91] cursor-pointer">
                About
              </li>
              <li className="hover:text-[#1E4D91] cursor-pointer">Insurance</li>
              <li className="hover:text-[#1E4D91] cursor-pointer">Blog</li>
              <li className="hover:text-[#1E4D91] cursor-pointer">Review</li>
              <li className="hover:text-[#1E4D91] cursor-pointer">Claim</li>
            </ul>

            {/* 📌 Schedule a Call (Mobile) */}
            <button
              onClick={togglePopup}
              className="mt-4 bg-[#1E4D91] text-white px-4 py-2 rounded-full text-sm shadow-md w-full"
            >
              Schedule a call
            </button>
          </div>
        )}

        {/* 💬 Popup Modal (Shared for both buttons) */}
        {isOpen && (
          <div className="fixed inset-0 z-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="bg-white w-[90%] max-w-80 p-6 rounded-lg shadow-xl relative">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Contact an Agent
              </h2>
              <form className="text-center">
                <div>
                  <label className="block text-sm font-medium text-[#000000]">
                    Casey Tarantino
                  </label>
                  <p className="text-base text-[#000000]">+1 (850) 449-1074</p>
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

        {/* Continue your hero and video section below... */}

        {/* Hero Content */}
        <div className="w-full px-4 md:px-16 grid grid-cols-1 mt-12 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center  md:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Helping You Navigate
            </h1>
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-700 mb-4">
              Medicare with Confidence
            </h2>
            <p className="text-sm lg:text-base text-gray-600 mb-6">
              With several years of experience in Medicare consulting, I
              specialize in helping individuals navigate the often confusing
              world of Medicare with confidence and clarity. My goal is to
              ensure that you fully understand your options, whether you're
              enrolling for the first time, approaching retirement, or simply
              looking to optimize your existing plan
            </p>
            <div className="flex gap-4">
              <button
                onClick={togglePopup}
                className="items-center bg-[#1E4D91] text-white px-6 py-3 rounded-md shadow-lg text-sm"
              >
                Contact An Agent
              </button>
              {/* Popup Modal */}
              {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
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
              <a
                href="https://my.destinationrx.com/hub/s/SSVSWKZQA"
                className="items-center bg-[#ffffff] text-[#302F2F] px-6 py-3 rounded-md shadow-lg text-sm hover:text-white hover:bg-[#1E4D91] transition-colors"
              >
                Enroll Now
              </a>
            </div>
          </div>

          {/* Placeholder Images */}
          <div className="relative flex justify-center">
            <img src={heroimg} alt="" />
            {/* <div className="w-80 h-80 bg-gray-300 rounded-md">
              <img src={hug} alt="image" />
            </div>
            <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white absolute bottom-[-1rem] -left-[8%] lg:left-[10%]">
              <img src={meet} alt="meet" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Video template */}
      <div className="text-center  md:text-left flex flex-col items-center mt-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#243443] leading-tight">
          What Is Medicare?
        </h1>
        <p className="text-base lg:text-xl text-[#404040] font-semibold px-4 md:px-0 mb-6 mt-4 max-w-[500px]">
          Medicare is a federal{" "}
          <span className="text-[#1E4D91]">
            health insurance program that was created in 1965 under the Social
            Security Administration.{" "}
          </span>
          Now administered by the Centers for Medicare and Medicaid Services,
          these benefits are enjoyed by over 60 million people in the United
          States. 
        </p>
      </div>

      <div className="frame-wrapper">
        <div className="frame mx-0 md:mx-20">
          <div className="frame1">
            {/* <video
              src="7821619-hd_1920_1080_30fps.mp4"
              controls
              className="video"
            /> */}
            <img
              className="w-full h-auto md:h-[80%]"
              src={frameimg}
              alt="frame image "
            />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-4 mb-12">
        <button className="items-center bg-[#1E4D91] text-white px-6 py-3 rounded-md shadow-lg text-sm">
          Contact An Agent
        </button>
      </div> */}
      <ContactPopup />
    </>
  );
}
