import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Image from "../../images/volunteer.png";

const MobileComponent = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const missions = [
    {
      title: "Feed a Homeless Person",
      description:
        "Feed a hungry stomach and protect the poor from malnutrition and starvation.",
      price: "₹13 / Person",
      image: Image,
      link: "/donation",
    },
    {
      title: "Support Education for Children",
      description:
        "Provide quality education to underprivileged children and brighten their future.",
      price: "₹25 / Child",
      image: Image,
      link: "/donation2", 
    },
    {
      title: "Provide Warm Clothing",
      description:
        "Help families survive the winter by providing warm clothing and blankets.",
      price: "₹50 / Family",
      image: Image,
      link: "/donation2", 
    },
    {
      title: "Medical Assistance for the Needy",
      description:
        "Offer medical aid and supplies to those in dire need, improving their health and well-being.",
      price: "₹100 / Person",
      image: Image,
      link: "/donation2", 
    },
    {
      title: "Clean Water Initiative",
      description:
        "Ensure access to clean water for communities suffering from unsafe drinking water.",
      price: "₹30 / Family",
      image: Image,
      link: "/donation2", 
    },
    {
      title: "Housing for the Homeless",
      description:
        "Provide safe shelter to the homeless and protect them from harsh conditions.",
      price: "₹200 / Person",
      image: Image,
      link: "/donation2", 
    },
  ];

  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-12">
          {/* Title */}
          <h2 className="text-center mb-8 text-3xl font-bold">Our Missions</h2>
          {/* Content */}
          <div className="mx-auto grid max-w-xl gap-4">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center pb-8 border-b border-gray-300"
              >
                {/* Image */}
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="h-28 w-40 object-cover rounded-md mb-4"
                />
                {/* Text content */}
                <div className="px-8">
                  <h3 className="mb-2 text-base font-semibold">
                    {mission.title}
                  </h3>
                  <p className="mb-4 text-gray-500 text-sm">
                    {mission.description}
                  </p>
                  <p className="text-sm text-green-800 font-bold">
                    {mission.price}
                  </p>
                  {/* Button with link to same tab */}
                  <button
                    className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium text-sm py-2 px-2 mt-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
                    onClick={() => navigate(mission.link)} // Navigate to the link in the same tab
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileComponent;
