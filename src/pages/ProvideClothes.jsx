import React from "react";
import AboutDonation from "../components/AboutDonation/AboutDonation";
import LowCostMission from "../components/LowCostMission/LowCostMission";
import FAQ from "../components/FAQ/FAQ";
import DonationCustomForm from "../components/DonateUsForm/DonationCustomForm";

const ProvideClothes = () => {
  return (
    <div>
      <Header2 />
      <AboutDonation />
      <LowCostMission />
      <DonationCustomForm />
      <FAQ />
    </div>
  );
};

export default ProvideClothes;
