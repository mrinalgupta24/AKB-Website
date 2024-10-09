import React from "react";
import bgImage from "../../images/image.png"; // Adjust the path as necessary

const CTA = () => {
  return (
    <div>
      <section>
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
              <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold md:mb-8 md:text-5xl lg:mb-10 text-green-900">
                Start a Fundraiser!
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-sm text-gray-500 sm:text-base md:mb-8">
                Help someone in need by raising funds through AKB Foundation.
                Whether it's for a local family, school fees for a child, or
                medical help, you can now create a fundraiser and bring change
                to your community.
              </p>

              {/* Centered View Showreel Button */}
              {/* <div className="flex justify-center mb-6">
                <a href="#" className="flex flex-row items-center font-bold">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bd85e6cf98_ArrowUpRight%20(4).svg"
                    alt="Arrow Icon"
                    className="mr-2 max-h-4 w-5"
                  />
                  <p className="text-sm sm:text-base">Read More</p>
                </a>
              </div> */}

              <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
