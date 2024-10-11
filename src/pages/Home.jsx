import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUs from "../components/AboutUs/AboutUs";
// import Facts from "./components/Facts/Facts";
import OurMissions from "../components/OurMissons/OurMissions";
import OurFundraiser from "../components/OurFundraisers/OurFundraiser";
import CTA from "../components/CTA/CTA";
import DonateUs from "../components/DonateUs/DonateUs";
import HelpUs from "../components/HelpUs/HelpUs";
import CTATwo from "../components/CTA2/CTATwo";
import Gallery from "../components/Gallery/Gallery";
import DonarBenefits from "../components/DonarBenefits/DonarBenefits";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <DonarBenefits />
      {/* <Facts /> */}
      <OurMissions />
      <OurFundraiser />
      <CTA />
      <DonateUs />
      <HelpUs />
      <CTATwo />
      <Gallery />
    </div>
  );
};

export default Home;
