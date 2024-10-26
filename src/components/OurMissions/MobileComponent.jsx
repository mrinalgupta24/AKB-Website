import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../images/bg1.jpg";

const MobileComponent = () => {
  const navigate = useNavigate();
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

      // try {
      //   const apiURL = "http://98.83.206.195:8000/api/home_page/";
      //   const response = await fetch(apiURL);

      //   if (!response.ok) {
      //     throw new Error("Failed to fetch fundraiser details");
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



        const filteredMissions = data.filter((item) => item.type === "mission");
        setMissions(filteredMissions);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch missions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading missions...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (missions.length === 0) {
    return (
      <div className="text-center">No missions available at this time.</div>
    );
  }

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-center mb-8 text-3xl font-bold">Our Missions</h2>

        <div className="mx-auto grid max-w-xl gap-4">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center pb-8 border-b border-gray-300 transition-transform duration-300 transform hover:scale-105"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Mission Image */}
              <img
                src={mission.image} // Assuming the API provides the correct image URL
                alt={mission.name}
                className="h-28 w-40 object-cover rounded-md mb-4 mt-4"
              />

              {/* Mission Text Content */}
              <div className="px-8">
                <h4 className="mb-2 text-lg font-semibold text-green-800">
                  {mission.price === "Custom"
                    ? "Custom Donation"
                    : `₹${mission.price} / Person`}
                </h4>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {mission.name}
                </h3>
                <p className="text-gray-500">{mission.description}</p>
                <button
                  className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-3 mt-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
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
                    }
                  }}
                >
                  {mission.price === "Custom" ? "View Now" : "View Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileComponent;
