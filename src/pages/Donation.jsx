import React from "react";
// import HeroSection from "../components/HeroSection/HeroSection";
import AboutDonation from "../components/AboutDonation/AboutDonation";
import DonateUsFormOne from "../components/DonateUsFormOne/DonateUsFormOne";
import LowCostMission from "../components/LowCostMission.jsx/LowCostMission";
import FAQ from "../components/FAQ/FAQ";
import CostBreakdown from "../components/CostBreakdown/CostBreakdown";

const Donation = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <AboutDonation />
      <DonateUsFormOne />
      <CostBreakdown/>
      <LowCostMission />
      <FAQ />
    </div>
  );
};

export default Donation;
