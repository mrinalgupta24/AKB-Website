import React, { useState } from "react";
import bgImage from "../../images/bg1.jpg";

const WebComponent = () => {
  const blogs = [
    {
      id: 1,
      price: "₹13 / Person",
      title: "Feed a Homeless Person 1",
      description:
        "Feed a hungry stomach and protect the poor from malnutrition.",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      link: "/donation",
    },
    {
      id: 2,
      price: "₹15 / Person",
      title: "Feed a Homeless Person 2",
      description: "Help provide nutritious meals to those in dire need.",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
      link: "/donation2",
    },
    {
      id: 3,
      price: "₹20 / Person",
      title: "Feed a Homeless Person 3",
      description: "Your help will go a long way in combating hunger.",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
      link: "/donation2",
    },
    {
      id: 4,
      price: "₹18 / Person",
      title: "Provide Clean Water",
      description: "Help provide access to clean and safe drinking water.",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      link: "/donation2",
    },
    {
      id: 5,
      price: "₹25 / Child",
      title: "Support Education",
      description:
        "Contribute to a child's education and brighten their future.",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
      link: "/donation2",
    },
    {
      id: 6,
      price: "₹30 / Family",
      title: "Emergency Relief",
      description:
        "Provide immediate assistance to families affected by disasters.",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
      link: "/donation2",
    },
  ];

  return (
    <section className="py-24 flex justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-5xl font-bold text-gray-900 text-center mb-16">
          Our Missions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogs.map((blog, index) => (
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
                  src={blog.image}
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50 flex flex-col items-center text-center">
                <span className="text-green-800 font-bold mb-3 block">
                  {blog.price}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {blog.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-6">
                  {blog.description}
                </p>
                <button
                  className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
                  onClick={() => window.open(blog.link, "_blank")}
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

export default WebComponent;
