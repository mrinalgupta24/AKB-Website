import React from "react";
import bgImage from "../../images/volunteer.png"; // Adjust the path as necessary

const CTATwo = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div
            className="relative mx-auto w-full max-w-full px-4 py-32 text-center"
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
                backgroundColor: "#D1E9F6E5",
                opacity: 0.9, 
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold md:mb-8 md:text-5xl lg:mb-10 text-blue-900">
              Fund Our Volunteers And Organization
              </h2>
              <a
                href="#"
                className="mb-4 inline-block bg-black px-6 py-3 text-center font-semibold text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTATwo;
