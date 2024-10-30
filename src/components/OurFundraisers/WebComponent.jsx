import React, { useState, useEffect, useRef } from "react";
import bgImage from "../../images/bg1.jpg";
import { useNavigate } from "react-router-dom";

const WebComponent = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiURL =
          "https://api.allorigins.win/raw?url=http://98.83.206.195:8000/api/home_page/";
        const response = await fetch(apiURL);

        if (!response.ok) {
          throw new Error("Failed to fetch fundraiser details");
        }

        const data = await response.json();
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

    const percentage = Math.round(
      Math.min(Math.max((currentAmount / targetAmount) * 100, 0), 100)
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
      <div ref={progressRef} className="w-full">
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
        <div className="flex justify-between text-gray-600 mt-2">
          <span className="font-bold">Raised: ₹{current.toLocaleString()}</span>
          <span className="font-bold">Goal: ₹{target.toLocaleString()}</span>
        </div>
      </div>
    );
  };

  const handleNavigate = (route) => {
    const id = route.split("-")[1];
    navigate(`/fundraiser/${id}`);
  };

  return (
    <section className="mt-8 mb-12 flex justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
          Our Fundraisers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {fundraisers.length > 0 ? (
            fundraisers.map((fundraiser) => (
              <div
                key={fundraiser.id}
                className="group border border-gray-300 rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex items-center justify-center h-64 overflow-hidden">
                  <img
                    src={fundraiser.image || "fallback-image-url"}
                    alt={fundraiser.name}
                    className="rounded-t-2xl w-full object-cover transition-opacity duration-300 group-hover:opacity-90 h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "fallback-image-url";
                    }}
                  />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl flex flex-col items-center text-center">
                  <ProgressBar
                    current={fundraiser.fundraised_amount}
                    target={fundraiser.required_amount}
                  />
                  <h4 className="text-lg text-gray-900 font-medium leading-8 mt-6 mb-5">
                    {fundraiser.name}
                  </h4>
                  <p className="text-gray-500 text-justify leading-6 mb-6">
                    {fundraiser.description}
                  </p>
                  <button
                    className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
                    onClick={() => handleNavigate(fundraiser.route)}
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

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebComponent;
