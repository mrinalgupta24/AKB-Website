import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../images/aboutus.jpg";

const DonateUs = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleNavigate = () => {
    navigate("/donation5"); // Navigate to the donation5 page
  };

  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-12 mt-12">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Donate To Us Directly !!
          </h2>
          <p className="mx-auto mb-8 mt-4 text-center font-bold md:text-center lg:text-center text-green-800">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          <button
            onClick={handleNavigate} // Trigger navigation on click
            className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95 mb-8 mx-auto block"
          >
            Donate Us
          </button>

          {/* Content */}
          <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <img
                src={bgImage}
                alt="Place an Order"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-[#eaf4f4] px-8 py-4">
                <p className="text-sm font-medium sm:text-xl ">
                  Place an Order
                </p>
              </div>
            </a>
            {/* Item */}
            <a href="#" className="relative flex h-[300px] items-end">
              <img
                src={bgImage}
                alt="Donate Used Clothes"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-[#eaf4f4] px-8 py-4">
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
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-[#eaf4f4] px-8 py-4">
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
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-[#eaf4f4] px-8 py-4">
                <p className="text-sm font-medium sm:text-xl">
                  Donate Anything
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
