import React from "react";
import AboutFundraiser from "../components/FundraiserPage/AboutFundraiser";
import Story from "../components/FundraiserPage/Story";
import VideoSection from "../components/FundraiserPage/VideoSection";
import FundraiserForm from "../components/FundraiserPage/FundraiserForm";
import FAQ from "../components/FAQ/FAQ";
import ImageSection from "../components/FundraiserPage/ImageSection";

const Fundraiser = () => {
  return (
    <div>
      <AboutFundraiser />
      <Story />
      <VideoSection />
      <ImageSection />
      <FundraiserForm />
      <FAQ />
    </div>
  );
};

export default Fundraiser;
