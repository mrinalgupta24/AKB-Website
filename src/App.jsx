import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Facts from "./components/Facts/Facts";
import OurMissions from "./components/OurMissons/OurMissions";
import OurFundraiser from "./components/OurFundraisers/OurFundraiser";
import CTA from "./components/CTA/CTA";
import DonateUs from "./components/DonateUs/DonateUs";
import HelpUs from "./components/HelpUs/HelpUs";
import Footer from "./components/Footer/Footer";
import CTATwo from "./components/CTA2/CTATwo";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Facts />
      <OurMissions />
      <OurFundraiser />
      <CTA />
      <DonateUs />
      <HelpUs />
      <CTATwo/>
      <Gallery/>
      <Footer />
    </>
  );
}

export default App;
