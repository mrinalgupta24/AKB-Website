import React from "react";
import bgImage from "../../images/donation1.svg"; // Ensure you use the bgImage if needed

const DonateUs = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Donate To Us Directly !!
          </h2>
          <p className="mt-4 mb-4 text-center text-sm text-gray-500 md:mb-4 lg:mb-6">
            We Will Reimburse Delivery Charges
          </p>
          <a
            href="#"
            className="mb-8 inline-block bg-black px-6 py-3 text-center font-semibold text-white rounded-md hover:bg-gray-800 transition-colors duration-300 md:mb-12 lg:mb-16"
          >
            View More
          </a>
          {/* Content */}
          <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <img
                src={bgImage}
                alt="Place an Order"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm font-medium sm:text-xl">Place an Order</p>
              </div>
            </a>
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <img
                src={bgImage}
                alt="Donate Used Clothes"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm font-medium sm:text-xl">
                  Donate Used Clothes
                </p>
              </div>
            </a>
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <img
                src={bgImage}
                alt="Donate Groceries"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm font-medium sm:text-xl">
                  Donate Groceries
                </p>
              </div>
            </a>
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <img
                src={bgImage}
                alt="Donate Anything You Wish"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm font-medium sm:text-xl">
                  Donate Anything You Wish
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateUs;
