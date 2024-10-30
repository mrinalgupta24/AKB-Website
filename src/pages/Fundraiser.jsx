import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutFundraiser from "../components/FundraiserPage/AboutFundraiser";
import Story from "../components/FundraiserPage/Story";
import VideoSection from "../components/FundraiserPage/VideoSection";
import FundraiserForm from "../components/FundraiserPage/FundraiserForm";
import FAQ from "../components/FAQ/FAQ";
import ImageSection from "../components/FundraiserPage/ImageSection";
import Header2 from "../components/Header/Header2";

const Fundraiser = () => {
  const { id } = useParams(); // Get the dynamic part of the URL
  const [fundraiserData, setFundraiserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFundraiserDetails = async () => {
      // try {
      //   const apiURL = `http://98.83.206.195:8000/api/fundraiser_details/?id=${id}`;
      //   const response = await fetch(apiURL);

      //   if (!response.ok) {
      //     throw new Error("Failed to fetch fundraiser details");
      //   }

      //   const data = await response.json();

      try {
        const apiURL = `https://api.allorigins.win/raw?url=http://98.83.206.195:8000/api/fundraiser_details/?id=${id} `;
        const response = await fetch(apiURL);

        if (!response.ok) {
          throw new Error("Failed to fetch fundraiser details");
        }

        const data = await response.json();
        console.log(data);

        // try {
        //   const corsProxy = "https://cors-anywhere.herokuapp.com/";
        //   const backendUrl = `http://98.83.206.195:8000/api/fundraiser_details/?id=${id}`;
        //   const response = await fetch(`${corsProxy}${backendUrl}`, {
        //     method: "GET",
        //     headers: {
        //       Origin: "https://abk-website.vercel.app",
        //     },
        //   });
        //   if (!response.ok) {
        //     throw new Error("Network response was not ok");
        //   }
        //   const data = await response.json();

        console.log("Fetched fundraiser data:", data); // Check the response structure
        setFundraiserData(data); // Adjust based on the actual response structure
      } catch (error) {
        console.error("Error fetching fundraiser details:", error);
        setError(error.message);
      }
    };

    fetchFundraiserDetails();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!fundraiserData) {
    return <div>{error}</div>;
  }

  // Prepare document links for ImageSection
  const documents = [
    {
      title: "Document 1",
      link: fundraiserData.document1,
    },
    {
      title: "Document 2",
      link: fundraiserData.document2,
    },
    {
      title: "ID Proof",
      link: fundraiserData.id_proof,
    },
    {
      title: "Affiliation ID Proof",
      link: fundraiserData.affiliated_id,
    },
  ];

  return (
    <div>
      <Header2 />
      <AboutFundraiser data={fundraiserData} />
      <Story content={fundraiserData.story} />
      <VideoSection data={fundraiserData} />
      <ImageSection documents={documents} />
      <FundraiserForm data={fundraiserData} />
      <FAQ />
    </div>
  );
};

export default Fundraiser;
