import React from "react";
import Image from "../../images/volunteer.png";
import bgImage from "../../images/bg1.jpg";

const WebComponent = () => {
  const blogs = [
    {
      price: "₹13 / Person",
      title: "Feed a Homeless Person",
      description:
        "Feed a hungry stomach and Protect the poor from malnutrition and starvation.",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
    },
    {
      price: "₹13 / Person",
      title: "Feed a Homeless Person",
      description:
        "Feed a hungry stomach and Protect the poor from malnutrition and starvation.",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
    },
    {
      price: "₹13 / Person",
      title: "Feed a Homeless Person",
      description:
        "Feed a hungry stomach and Protect the poor from malnutrition and starvation.",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
    },
  ];

  return (
    <section className="py-24 flex justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-5xl font-bold text-gray-900 text-center mb-16">
          Our Missions
        </h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
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
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50 flex flex-col items-center text-center opacity-0 animate-fadeIn">
                <span className="text-green-800 font-bold mb-3 block">
                  {blog.price}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {blog.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-6">
                  {blog.description}
                </p>
                <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8 mt-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
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
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50 flex flex-col items-center text-center opacity-0 animate-fadeIn">
                <span className="text-green-800 font-bold mb-3 block">
                  {blog.price}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {blog.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-6">
                  {blog.description}
                </p>
                <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                  Learn More
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
