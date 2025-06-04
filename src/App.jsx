import { useState } from "react";
import MedicareHero from "./MedicareLandingPage";
import EligibilityCriteria from "./EligibilityCriteria";
import MedicareCoverage from "./MedicareCoverage";
import MedicareHelp from "./MedicareHelp";
import ContactFooter from "./ContactFooter";

function App() {
  return (
    <>
      <div>
        <MedicareHero />
        <EligibilityCriteria />
        <MedicareCoverage />
        <MedicareHelp />
        <ContactFooter />
      </div>
    </>
  );
}

export default App;
