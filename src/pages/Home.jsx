import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <HeroSection />
      </div>
      <div data-aos="fade-right">
        <AboutUs />
      </div>
      <div data-aos="fade-left">
        <DonarBenefits />
      </div>
      <div data-aos="zoom-out">
        <OurMissions />
      </div>
      <div data-aos="zoom-out">
        <OurFundraiser />
      </div>
      <div data-aos="flip-right">
        <CTA />
      </div>
      <div data-aos="fade-up">
        <DonateUs />
      </div>
      <div data-aos="fade-left">
        <HelpUs />
      </div>
      <div data-aos="fade-right">
        <CTATwo />
      </div>
      <div data-aos="zoom-in-up">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
