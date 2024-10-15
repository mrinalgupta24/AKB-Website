import React from "react";
import bgImage from "../../images/bg1.jpg";

const WebComponent = () => {
  const fundraisers = [
    {
      amountRaised: "₹50,000 raised",
      title: "Help Us In Education Of Children",
      description:
        "Support the education of children from underprivileged communities and give them a better future.",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
    },
    {
      amountRaised: "₹30,000 raised",
      title: "Medical Aid for the Needy",
      description:
        "Provide medical assistance to individuals in need by contributing to their healthcare expenses.",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
    },
    {
      amountRaised: "₹20,000 raised",
      title: "Support Disaster Relief Efforts",
      description:
        "Help us provide urgent relief and aid to communities affected by natural disasters.",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
    },
  ];

  return (
    <section className="py-24 flex justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-5xl font-bold text-gray-900 text-center mb-16">
          Our Fundraisers
        </h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8">
          {fundraisers.map((fundraiser, index) => (
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
                  src={fundraiser.image}
                  alt="fundraiser image"
                  className="rounded-t-2xl w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl flex flex-col items-center text-center">
                <span className="text-green-800 font-bold mb-3 block">
                  {fundraiser.amountRaised}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {fundraiser.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-6">
                  {fundraiser.description}
                </p>
                <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8 mt-12">
          {fundraisers.map((fundraiser, index) => (
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
                  src={fundraiser.image}
                  alt="fundraiser image"
                  className="rounded-t-2xl w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xlflex flex-col items-center text-center">
                <span className="text-green-800 font-bold mb-3 block">
                  {fundraiser.amountRaised}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {fundraiser.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-6">
                  {fundraiser.description}
                </p>
                <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                  Donate Now
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
