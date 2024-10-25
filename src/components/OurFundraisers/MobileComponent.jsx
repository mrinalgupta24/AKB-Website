import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MobileComponent = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home_page/");
        const data = await response.json();
        console.log("Fetched data:", data);
        const filteredData = data.filter((item) => item.type === "fundraiser");
        setFundraisers(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const ProgressBar = ({ current, target }) => {
    const [animatedWidth, setAnimatedWidth] = useState(0);
    const progressRef = useRef(null);

    const currentAmount = parseFloat(current) || 0;
    const targetAmount = parseFloat(target) > 0 ? parseFloat(target) : 1;

    const percentage = Math.min(
      Math.max((currentAmount / targetAmount) * 100, 0),
      100
    );

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setAnimatedWidth(percentage);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (progressRef.current) {
        observer.observe(progressRef.current);
      }

      return () => {
        if (progressRef.current) {
          observer.unobserve(progressRef.current);
        }
      };
    }, [percentage]);

    return (
      <div ref={progressRef} className="w-11/12">
        <div className="flex justify-end mb-1">
          <div className="bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-full">
            {percentage}%
          </div>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-green-800 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedWidth}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-gray-600 mt-2 mb-4">
          <span className="font-bold text-sm">
            Raised: ₹{current.toLocaleString()}
          </span>
          <span className="font-bold text-sm">
            Goal: ₹{target.toLocaleString()}
          </span>
        </div>
      </div>
    );
  };

  // Function to handle navigation
  const handleNavigate = (route) => {
    const id = route.split("-")[1]; // Extract ID from the route
    navigate(`/fundraiser/${id}`); // Use navigate to go to the fundraiser page
  };

  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 mb-12 md:px-10 md:py-12">
          <h2 className="text-center mb-8 text-3xl font-bold">
            Our Fundraisers
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {fundraisers.length > 0 ? (
              fundraisers.map((fundraiser) => (
                <div
                  key={fundraiser.id}
                  className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={fundraiser.image}
                    alt={fundraiser.name}
                    className="h-28 w-40 object-cover rounded-md mb-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "fallback-image-url"; // Fallback image in case of error
                    }}
                  />
                  <ProgressBar
                    current={fundraiser.fundraised_amount}
                    target={fundraiser.required_amount}
                  />
                  <div className="px-2">
                    <h3 className="mb-2 text-base font-semibold">
                      {fundraiser.name}
                    </h3>
                    <p className="mb-4 text-gray-500 text-sm">
                      {fundraiser.description}
                    </p>
                    <button
                      className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium text-sm py-2 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
                      onClick={() => handleNavigate(fundraiser.route)} // Call the navigation function
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                No fundraisers available.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileComponent;
