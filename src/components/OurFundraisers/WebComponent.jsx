import React, { useState, useEffect, useRef } from "react";
import bgImage from "../../images/bg1.jpg";
import { Link } from "react-router-dom";

const WebComponent = () => {
  // ProgressBar component to show percentage progress with animation
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
            observer.disconnect(); // Stop observing once it becomes visible
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
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
        // Animate the progress bar
        const timer = setTimeout(() => {
          setWidth(percentage);
        }, 500); // Delay to allow the component to render first

        return () => clearTimeout(timer);
      }
    }, [isVisible, percentage]);

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
            style={{ width: `${width}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-gray-600 mt-2">
          <span className="font-bold">Raised: ₹{current.toLocaleString()}</span>
          <span className="font-bold">Goal: ₹{target.toLocaleString()}</span>
        </div>
      </div>
    );
  };

  // Fundraisers with numeric `amountRaised` and `targetAmount`, along with links
  const fundraisers = [
    {
      title: "Help Us In Education Of Children",
      description:
        "Support the education of children from underprivileged communities and give them a better future.",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      amountRaised: 5000,
      targetAmount: 20000,
      link: "/fundraiser",
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

  return (
    <section className="mt-8 mb-24 flex justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-5xl font-bold text-gray-900 text-center mb-16">
          Our Fundraisers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {fundraisers.map((fundraiser, index) => (
            <div
              key={index}
              className="group border border-gray-300 rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={fundraiser.image}
                  alt="fundraiser image"
                  className="rounded-t-2xl w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl flex flex-col items-center text-center">
                <ProgressBar
                  current={fundraiser.amountRaised}
                  target={fundraiser.targetAmount}
                />
                <h4 className="text-xl text-gray-900 font-medium leading-8 mt-6 mb-5">
                  {fundraiser.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-6">
                  {fundraiser.description}
                </p>
                <Link to={fundraiser.link}>
                  <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebComponent;
