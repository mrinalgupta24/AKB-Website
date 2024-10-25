import React from "react";
import AboutDonation from "../components/AboutDonation/AboutDonation";
import Location from "../components/Location/Location";
import LowCostMission from "../components/LowCostMission/LowCostMission";
import FAQ from "../components/FAQ/FAQ";
import OldAgeHome from "../components/OldAgeHome/OldAgeHome";

const ProvideGroceries = () => {
  return (
    <div>
      <AboutDonation />
      <Location />
      <OldAgeHome />
      <LowCostMission />
      <FAQ />
    </div>
  );
};

export default ProvideGroceries;
