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
      try {
        const apiURL =
          "https://api.allorigins.win/raw?url=http://98.83.206.195:8000/api/home_page/";
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("Failed to fetch fundraiser details");

        const data = await response.json();
        const filteredMissions = data.filter((item) => item.type === "mission");
        setMissions(filteredMissions);
      } catch (error) {
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
    <section className="bg-white">
      <div className="w-full max-w-full px-3 py-8">
        <h2 className="text-center mb-4 text-2xl font-bold">Our Missions</h2>

        <div className="grid gap-3">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 border-b border-gray-300 rounded-md"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={mission.image}
                alt={mission.name}
                className="w-full max-w-[180px] h-[120px] aspect-[4/3] object-cover rounded-md mb-2"
              />

              <div className="text-sm px-2">
                <h4 className="mb-1 text-green-800 font-semibold">
                  {mission.price === "Custom"
                    ? "Custom Donation"
                    : `₹${mission.price} / Person`}
                </h4>
                <h3 className="mb-1 text-gray-900 truncate font-semibold">
                  {mission.name}
                </h3>
                <p className="text-gray-500 text-justify ">
                  {mission.description}
                </p>
                <button
                  className="bg-green-900 text-white text-sm font-medium py-2 px-2 mt-2 rounded transition-all"
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
                  View More
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
