import React from "react";
import bgImage from "../../images/greybg.avif";

const LowCostMission = () => {
  return (
    <div className="relative">
      <section>
        {/* Transparent Rectangle Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#eaf4f4",
            opacity: 0.8, // Adjust this value to change the transparency
          }}
        ></div>

        <div className="relative w-full max-w-6xl px-12 py-8 mt-8 mx-auto">
          <div className="flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center lg:justify-center">
            <div className="flex flex-col items-start text-left">
              <h2 className="mb-6 max-w-4xl mx-auto text-3xl font-bold text-center md:text-5xl">
                The Secret to Our Low Cost Missions
              </h2>
              <p className="mb-2 text-sm text-gray-600 sm:text-base md:mb-6 lg:mb-8">
                This low price is made possible through careful sourcing and
                strategic partnerships, allowing us to make the most of every
                donation.
              </p>
              <ol className="flex flex-col">
                <li className="mb-2 flex items-center">
                  <p className="text-gray-600 text-sm sm:text-base">
                    <strong>1. Direct Sourcing:</strong> We work directly with
                    manufacturers and suppliers of key ingredients like rice,
                    vegetables, and spices. By cutting out middlemen, we are
                    able to secure large quantities of high-quality ingredients
                    at reduced prices.
                  </p>
                </li>
                <li className="mb-2 flex items-center">
                  <p className="text-gray-600 text-sm sm:text-base">
                    <strong>2. Partnerships with Primary Dealers:</strong> We
                    collaborate with trusted primary dealers who provide bulk
                    supplies of essential items at wholesale rates.
                  </p>
                </li>
                <li className="mb-2 flex items-center">
                  <p className="text-gray-600 text-sm sm:text-base">
                    <strong>3. Economies of Scale:</strong> By purchasing in
                    bulk and managing large-scale meal production, we reduce
                    per-meal costs.
                  </p>
                </li>
              </ol>
              {/* Left-aligned final Paragraph */}
              <p className="mt-2 text-sm text-gray-600 sm:text-base md:mt-6">
                By maintaining these relationships and sourcing strategies, we
                can continue to provide nutritious, high-quality meals at a
                fraction of the usual cost. This allows us to stretch every
                rupee further, ensuring that a single donation can feed more
                people.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LowCostMission;
