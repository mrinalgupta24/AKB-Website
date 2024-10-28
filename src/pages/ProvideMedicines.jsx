import React from "react";
import AboutDonation from "../components/AboutDonation/AboutDonation";
import LowCostMission from "../components/LowCostMission/LowCostMission";
import FAQ from "../components/FAQ/FAQ";
import DonationCustomForm from "../components/DonateUsForm/DonationCustomForm";
import Header2 from "../components/Header/Header2";

const ProvideMedicines = () => {
  return (
    <div>
      <Header2 />
      <AboutDonation />
      <DonationCustomForm />
      <LowCostMission />
      <FAQ />
    </div>
  );
};

export default ProvideMedicines;
