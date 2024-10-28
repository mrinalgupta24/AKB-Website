import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUs from "../components/AboutUs/AboutUs";
import OurMissions from "../components/OurMissions/OurMissions";
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
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="donar-benefits">
        <DonarBenefits />
      </div>
      <div id="initiatives">
        <OurMissions />
      </div>
      <div id="our-fundraiser">
        <OurFundraiser />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="donate">
        <DonateUs />
      </div>
      {/* <div id="cta-two">
        <CTATwo />
      </div> */}
      <div id="help">
        <HelpUs />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
