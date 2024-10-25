import React from "react";
import AboutDonation from "../components/AboutDonation/AboutDonation";
import DonateUsFormOne from "../components/DonateUsForm/DonateUsFormOne";
import LowCostMission from "../components/LowCostMission/LowCostMission";
import FAQ from "../components/FAQ/FAQ";
import CostBreakdown from "../components/CostBreakdown/CostBreakdown";

const PlantTrees = () => {
  return (
    <div>
      <AboutDonation />
      <DonateUsFormOne />
      <CostBreakdown />
      <LowCostMission />
      <FAQ />
    </div>
  );
};

export default PlantTrees;
