import React from "react";
import AboutDonation from "../components/AboutDonation/AboutDonation";
import LowCostMission from "../components/LowCostMission/LowCostMission";
import FAQ from "../components/FAQ/FAQ";
import { Link } from "react-router-dom";

const Donation3 = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <AboutDonation />
        <div className="flex flex-col items-center space-y-8 mt-16 mb-16 w-full px-4 sm:px-0 sm:w-1/2">
          <Link to="/donation4" className="w-full">
            <button className="w-full bg-gradient-to-r from-green-900 to-green-800 text-white text-lg sm:text-xl font-medium py-4 px-6 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
              Sponsor Food
            </button>
          </Link>
          <button className="w-full bg-gradient-to-r from-green-900 to-green-800 text-white text-lg sm:text-xl font-medium py-4 px-6 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
            Sponsor Groceries
          </button>
          <button className="w-full bg-gradient-to-r from-green-900 to-green-800 text-white text-lg sm:text-xl font-medium py-4 px-6 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
            Sponsor Clothes
          </button>
        </div>
      </div>
      <LowCostMission />
      <FAQ />
    </div>
  );
};

export default Donation3;
