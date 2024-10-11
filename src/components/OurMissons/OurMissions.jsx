import React from "react";
import Slider from "react-slick";
import bgImage from "../../images/bg1.jpg";
import Image from "../../images/volunteer.png";
import { Link } from "react-router-dom";

const OurMissions = () => {
  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-auto w-full max-w-full px-6 py-4">
      <section className="w-full max-w-full px-5 py-6 md:px-8 md:py-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Our Mission
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center font-bold md:text-center lg:text-center text-green-800">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>

        {/* Content */}
        {/* Mobile Slider: Only shows on small screens */}
        <div className="sm:block md:hidden lg:hidden">
          <Slider {...sliderSettings}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center rounded-md border border-slate-950 p-6 sm:text-center md:text-center lg:text-center bg-[#e5e5e5]"
              >
                <img
                  src={Image}
                  alt={`Mission Item ${index + 1}`}
                  className="mb-4 h-48 w-full object-cover rounded-md"
                />
                <p className="text-xl font-semibold text-center">{`Mission Item ${
                  index + 1
                }`}</p>
                <p className="mb-4 font-bold text-green-800 text-center">
                  Webflow Developer
                </p>
                <p className="text-sm text-black sm:text-base text-center">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut
                  aliquam, purus sit amet luctus venenatis elit ut aliquam,
                  purus sit amet luctus venenatis.
                </p>
                {/* Learn More Button */}
                <div className="mt-4 text-center">
                  <Link to="/donation">
                    <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid Layout for Medium and Large Screens */}
        <div className="hidden md:grid lg:grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-md border border-slate-950 p-6 sm:text-center md:text-center lg:text-center"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={Image}
                alt={`Mission Item ${index + 1}`}
                className="mb-4 h-48 w-full object-cover rounded-md"
              />
              <p className="text-xl font-semibold text-center">{`Mission Item ${
                index + 1
              }`}</p>
              <p className="mb-4 font-bold text-green-800 text-center">{`Webflow Developer`}</p>
              <p className="text-sm text-black sm:text-base text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut aliquam,
                purus sit amet luctus venenatis elit ut aliquam, purus sit amet
                luctus venenatis.
              </p>
              {/* Learn More Button */}
              <div className="mt-4 text-center">
                <Link to="/donation">
                  <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurMissions;
