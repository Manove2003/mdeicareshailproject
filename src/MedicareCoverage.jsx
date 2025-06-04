import React, { Component } from "react";
import ContactPopup from "./ContactPopup";
class MedicareCoverage extends Component {
  render() {
    return (
      <div className="bg-white text-center px-4 sm:px-6 md:px-12 py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#243443] mt-8 pb-4 mb-6">
          What is Covered?
        </h2>
        <p className="text-[#404040] max-w-3xl mx-auto text-base mb-10 px-2 font-semibold">
          The health benefits provided by Medicare are extensive. Put simply,
          coverage can be generally divided into two parts (parts A and B):
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-6 mb-12 px-4 sm:px-6 md:px-8">
          {/* Part A */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left w-full max-w-84 mx-auto lg:mx-0">
            <h3 className="text-lg sm:text-xl text-center font-semibold mb-4">
              Part A:
            </h3>
            <ul className="list-disc list-inside text-[#000000] text-sm sm:text-base">
              <li>Inpatient care in a hospital</li>
              <li>Skilled nursing facility care</li>
              <li>Nursing home care</li>
              <li>Hospice care</li>
              <li>Home health care</li>
            </ul>
          </div>

          {/* Part B */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left w-full max-w-84 mx-auto lg:mx-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
              Part B:
            </h3>
            <ul className="list-disc list-inside text-[#000000] text-sm sm:text-base">
              <li>Clinical research</li>
              <li>Ambulance services</li>
              <li>Durable medical equipment</li>
              <li>Mental health (inpatient, outpatient)</li>
              <li>Limited outpatient prescription drugs</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-2">
          <h3 className="text-2xl md:text-5xl font-semibold mt-16 mb-8">
            Medicare Part D <br />
            (Prescription Drug Benefit)
          </h3>
          <p className="text-[#1D1D1D] text-base font-medium mb-6">
            Part D is the Medicare plan that covers most outpatient prescription
            drugs. This can be offered through private companies as a
            stand-alone option or can be included as part of a more
            comprehensive Medicare plan.{" "}
            <span className="text-[#1E4D91] font-medium">
              Such Medicare plans that include prescription drug coverage are
              known as Medicare Advantage Prescription Drug (MAPD) plans.
            </span>
          </p>

          {/* <button className="mt-8  items-center bg-[#1E4D91] underline text-white px-6 py-3 rounded-md shadow-lg text-sm">
            Contact An Agent
          </button> */}
          <ContactPopup />
        </div>
      </div>
    );
  }
}

export default MedicareCoverage;
