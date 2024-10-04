import React from "react";

const OurMissions = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Our Mission
          </h2>
          <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          {/* Content */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {/* Mission Item */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-md border border-solid border-gray-300 p-6 transition-transform transform hover:scale-105"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt={`Mission Item ${index + 1}`}
                  className="mb-4 h-48 w-full object-cover rounded-md"
                />
                <p className="text-xl font-semibold">
                  Mission Item {index + 1}
                </p>
                <p className="mb-4 font-semibold text-gray-500">
                  Webflow Developer
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut
                  aliquam, purus sit amet luctus venenatis elit ut aliquam,
                  purus sit amet luctus venenatis.
                </p>
                {/* Learn More Button */}
                <div className="mt-4 text-center">
                  <a
                    href="#"
                    className="w-full rounded-md bg-black px-6 py-2 text-center font-semibold text-white transition-colors hover:bg-gray-800"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMissions;
