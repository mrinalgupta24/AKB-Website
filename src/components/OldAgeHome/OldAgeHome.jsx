import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileComponent from "../OldAgeHome/MobileComponent"; // Import the mobile component
import WebComponent from "../OldAgeHome/WebComponent"; // Import the web component

const OldAgeHome = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return <div>{isMobile ? <MobileComponent /> : <WebComponent />}</div>;
};

export default OldAgeHome;
