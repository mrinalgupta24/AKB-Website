import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import bgImage from "../../images/bg1.jpg";

const WebComponent = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const corsProxy = "https://cors-anywhere.herokuapp.com/";
      //   const backendUrl = "http://98.83.206.195:8000/api/home_page/";
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

      try {
        const apiURL =
          "https://api.allorigins.win/raw?url=http://98.83.206.195:8000/api/home_page/ ";
        const response = await fetch(apiURL);

        if (!response.ok) {
          throw new Error("Failed to fetch fundraiser details");
        }

        const data = await response.json();
        console.log(data);

        // try {
        //   const apiURL = "http://98.83.206.195:8000/api/home_page/";
        //   const response = await fetch(apiURL);

        //   if (!response.ok) {
        //     throw new Error("Failed to fetch fundraiser details");
        //   }

        //   const data = await response.json();

        // Filter the data where type is "mission"
        const filteredData = data.filter((item) => item.type === "mission");
        setMissions(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch missions. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading missions...</div>; // Loading message
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; // Display error message
  }

  if (missions.length === 0) {
    return (
      <div className="text-center">No missions available at this time.</div>
    ); // No missions message
  }

  return (
    <section className="py-12 flex justify-center bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
          Our Missions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group border border-gray-300 rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-lg bg-white"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-64 w-full flex items-center justify-center bg-white">
                <img
                  src={mission.image} // Fetch the image from API
                  alt={mission.name} // Dynamic alt text based on mission name
                  className="rounded-t-2xl object-cover h-full w-full transition-opacity duration-300 group-hover:opacity-90"
                  style={{ height: "100%", objectFit: "cover" }} // Ensure uniform image size
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl flex flex-col items-center text-center">
                <span className="text-green-800 font-bold mb-3 block">
                  {mission.price === "Custom"
                    ? "Custom Donation"
                    : `₹${mission.price} / Person`}
                </span>
                <h4 className="text-lg text-gray-900 font-medium leading-8 mb-3 truncate">
                  {mission.name}
                </h4>
                {/* Full description without scroll */}
                <div
                  className="text-gray-500 text-base text-justify leading-6 mb-6"
                  style={{ wordBreak: "break-word" }}
                >
                  {mission.description}
                </div>

                {/* Separate button linking for each mission */}
                <button
                  className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
                  onClick={() => {
                    if (mission.route === "/orphanage") {
                      navigate("/ProvideGroceries");
                    } else if (mission.route === "/food") {
                      navigate("/FoodforNeedy");
                    } else if (mission.route === "/pets") {
                      navigate("/FeedStrayCatsandDogs");
                    } else if (mission.route === "/trees") {
                      navigate("/PlantTrees");
                    } else if (mission.route === "/medicines") {
                      navigate("/ProvideMedicines");
                    } else if (mission.route === "/sanitary-pads") {
                      navigate("/ProvideSanitaryPads");
                    } else if (mission.route === "/clothes") {
                      navigate("/ProvideClothes");
                    } else {
                      console.warn("Unmatched route:", mission.route);
                      // Optional: Navigate to a default page or show an alert
                    }
                  }}
                >
                  {mission.price === "Custom" ? "View More" : "View More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebComponent;
