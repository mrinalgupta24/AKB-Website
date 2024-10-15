import React from "react";
import Image from "../../images/volunteer.png";

const MobileComponent = () => {
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
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-12">
          {/* Title */}
          <h2 className="text-center mb-8 text-3xl font-bold">Our Fundraisers</h2>
          {/* Content */}
          <div className="mx-auto grid max-w-xl gap-4">
            {fundraisers.map((fundraiser, index) => (
              <a
                href="#"
                key={index}
                className="flex flex-col items-center text-center pb-8 border-b border-gray-300"
              >
                {/* Image */}
                <img
                  src={fundraiser.image}
                  alt={fundraiser.title}
                  className="h-28 w-40 object-cover rounded-md mb-4"
                />
                {/* Text content */}
                <div className="px-8">
                  <h3 className="mb-2 text-base font-semibold">
                    {fundraiser.title}
                  </h3>
                  <p className="mb-4 text-gray-500 text-sm">
                    {fundraiser.description}
                  </p>
                  <p className="text-sm text-green-800 font-bold">
                    {fundraiser.amountRaised}
                  </p>
                  <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium text-sm py-2 px-2 mt-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                    View More
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileComponent;
