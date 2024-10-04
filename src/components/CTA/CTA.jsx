import React from "react";
import bgImage from "../../images/image.svg"; // Adjust the path as necessary

const CTA = () => {
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
                backgroundColor: "#D1E9F6E5", // Light blue color with opacity
                opacity: 0.9, // Optional: Adjust for more/less transparency
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold md:mb-8 md:text-5xl lg:mb-10 text-blue-900">
                Start a Fundraiser!
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-sm text-gray-500 sm:text-base md:mb-8">
                Help someone in need by raising funds through AKB Foundation.
                Whether it's for a local family, school fees for a child, or
                medical help, you can now create a fundraiser and bring change
                to your community.
              </p>

              {/* Centered View Showreel Button */}
              <div className="flex justify-center mb-6">
                <a href="#" className="flex flex-row items-center font-bold">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bd85e6cf98_ArrowUpRight%20(4).svg"
                    alt="Arrow Icon"
                    className="mr-2 max-h-4 w-5"
                  />
                  <p className="text-sm sm:text-base">Read More</p>
                </a>
              </div>

              <a
                href="#"
                className="mb-4 inline-block bg-black px-6 py-3 text-center font-semibold text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
