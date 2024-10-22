import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MobileComponent = () => {
  const fundraisers = [
    {
      title: "Help Us In Education Of Children",
      description:
        "Support the education of children from underprivileged communities and give them a better future.",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      amountRaised: 5000,
      targetAmount: 20000,
      link: "/fundraiser", // Update the link for specific routes
    },
    {
      title: "Medical Aid for the Needy",
      description:
        "Provide medical assistance to individuals in need by contributing to their healthcare expenses.",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
      amountRaised: 10000,
      targetAmount: 50000,
      link: "/fundraiser",
    },
    {
      title: "Support Disaster Relief Efforts",
      description:
        "Help us provide urgent relief and aid to communities affected by natural disasters.",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
      amountRaised: 15000,
      targetAmount: 30000,
      link: "/fundraiser",
    },
    {
      title: "Clean Water Initiative",
      description:
        "Help provide clean and safe drinking water to communities in need around the world.",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
      amountRaised: 7500,
      targetAmount: 25000,
      link: "/fundraiser",
    },
    {
      title: "Reforestation Project",
      description:
        "Support our efforts to plant trees and restore forests to combat climate change.",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
      amountRaised: 12000,
      targetAmount: 40000,
      link: "/fundraiser",
    },
    {
      title: "Homeless Shelter Support",
      description:
        "Contribute to providing shelter, food, and essential services to homeless individuals in our community.",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      amountRaised: 8000,
      targetAmount: 35000,
      link: "/fundraiser",
    },
  ];

  const ProgressBar = ({ current, target }) => {
    const [width, setWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const percentage = Math.min((current / target) * 100, 100).toFixed(0);
    const progressRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    }, []);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setWidth(percentage);
        }, 500);

        return () => clearTimeout(timer);
      }
    }, [isVisible, percentage]);

    return (
      <div ref={progressRef} className="w-11/12 ">
        <div className="flex justify-end mb-1">
          <div className="bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-full">
            {percentage}%
          </div>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-green-800 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
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

  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 mb-12 md:px-10 md:py-12">
          <h2 className="text-center mb-8 text-3xl font-bold">
            Our Fundraisers
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {fundraisers.map((fundraiser, index) => (
              <Link
                to={fundraiser.link}
                key={index}
                className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={fundraiser.image}
                  alt={fundraiser.title}
                  className="h-28 w-40 object-cover rounded-md mb-4"
                />
                <ProgressBar
                  current={fundraiser.amountRaised}
                  target={fundraiser.targetAmount}
                />
                <div className="px-2">
                  <h3 className="mb-2 text-base font-semibold">
                    {fundraiser.title}
                  </h3>
                  <p className="mb-4 text-gray-500 text-sm">
                    {fundraiser.description}
                  </p>
                  <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium text-sm py-2 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                    Donate Now
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileComponent;
