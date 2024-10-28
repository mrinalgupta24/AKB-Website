import React from "react";
import AboutDonation from "../components/AboutDonation/AboutDonation";
import Location from "../components/Location/Location";
import LowCostMission from "../components/LowCostMission/LowCostMission";
import FAQ from "../components/FAQ/FAQ";
import OldAgeHome from "../components/OldAgeHome/OldAgeHome";
import Header2 from "../components/Header/Header2";

const Donation2 = () => {
  return (
    <div>
      <Header2 />
      <AboutDonation />
      <Location />
      <OldAgeHome />
      <LowCostMission />
      <FAQ />
    </div>
  );
};

export default Donation2;
