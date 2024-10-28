import React from "react";
import bgImage from "../../images/volunteer.png"; // Adjust the path as necessary

const CTATwo = () => {
  return (
    <div>
      <section className="mt-12">
        {/* Container */}
        <div>
          {/* Component */}
          <div
            className="relative mx-auto w-full max-w-full px-4 md:py:28 py-32 text-center"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Transparent Rectangle Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#eaf4f4",
                opacity: 0.9,
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="mx-auto mb-6 max-w-5xl text-3xl font-bold md:mb-8 md:text-5xl lg:mb-10 text-green-900">
              Fund Our Volunteers And Organization
              </h2>

              <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTATwo;
