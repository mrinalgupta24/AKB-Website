import React, { useEffect, useState } from "react";
import fundimage from "../../images/aboutus.jpg";

const AboutFundraiser = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the visibility to true after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to see the animation effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-8 mt-16 sm:py-16">
      <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
        {/* Image */}
        <img
          className={`w-full mt-8 md:mt-0 md:mb-0 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          src={fundimage}
          alt="dashboard"
        />
        <div
          className={`mt-8 md:mt-0 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Updated Content */}
          <h2 className="mb-6 ml-8 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl text-center md:text-left">
            Fundraiser Details
          </h2>

          <p className="mb-2 ml-8 text-left md:text-left ">
            {/* Center align for mobile */}
            <strong className="text-black text-lg">Name:</strong>{" "}
            <span className="text-gray-500 text-lg">Abhi</span>
          </p>
          <p className="mb-2 ml-8 text-left md:text-left">
            {/* Center align for mobile */}
            <strong className="text-black text-lg">Age:</strong>{" "}
            <span className="text-gray-500 text-lg">99</span>
          </p>
          <p className="mb-2 ml-8 text-left md:text-left">
            {/* Center align for mobile */}
            <strong className="text-black text-lg">Address:</strong>{" "}
            <span className="text-gray-500 text-lg">
              Street 1, Street 2, City, Pincode
            </span>
          </p>
          <p className="mb-2 ml-8 text-left md:text-left">
            {/* Center align for mobile */}
            <strong className="text-black text-lg">Amount Needed:</strong>{" "}
            <span className="text-gray-500 text-lg">₹30,000</span>
          </p>
          <p className="mb-6 ml-8 text-left md:text-left">
            {/* Center align for mobile */}
            <strong className="text-black text-lg">Date of Needed:</strong>{" "}
            <span className="text-gray-500 text-lg">12-12-2003</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFundraiser;