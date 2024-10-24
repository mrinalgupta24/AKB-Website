import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const MobileComponent = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [missions, setMissions] = useState([]); // State to hold fetched missions
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://98.83.206.195:8000/api/home_page/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Filter data where type is "mission"
        const filteredMissions = data.filter((item) => item.type === "mission");
        setMissions(filteredMissions);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch missions. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  // Render loading state
  if (loading) {
    return <div className="text-center">Loading missions...</div>;
  }

  // Render error state
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Render no missions available state
  if (missions.length === 0) {
    return (
      <div className="text-center">No missions available at this time.</div>
    );
  }

  return (
    <section className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Missions</h2>

        <div className="flex flex-col space-y-6">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden rounded-lg">
                <img
                  src={mission.image} // Fetch the image from API
                  alt={mission.name} // Dynamic alt text based on mission name
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-lg font-semibold text-green-800">
                  {mission.price === "Custom"
                    ? "Custom Donation"
                    : `₹${mission.price} / Person`}
                </span>
                <h4 className="mt-2 text-xl font-medium text-gray-900">
                  {mission.name}
                </h4>
                <p className="mt-1 text-gray-600">{mission.description}</p>
                <button
                  className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 mt-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
                  onClick={() => {
                    // Check if the mission is an orphanage and navigate to donation2
                    if (
                      mission.name.toLowerCase() === "orphanage" ||
                      mission.route === "/orphanage"
                    ) {
                      navigate("/donation2"); // Navigate to donation2 page if the mission is orphanage
                    } else if (mission.price === "Custom") {
                      navigate("/donation4"); // Navigate to custom donation page
                    } else if (!isNaN(mission.price)) {
                      navigate("/donation"); // Navigate to the donation page for specified price
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
