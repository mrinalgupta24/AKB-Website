import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImage from "../../images/bg1.jpg";

// Custom next arrow component
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="group flex h-12 w-12 items-center justify-center rounded-full bg-green-800 transition hover:bg-green-900"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

// Custom previous arrow component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="group flex h-12 w-12 items-center justify-center rounded-full bg-green-800 transition hover:bg-green-900"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const Location = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cities = [
    {
      name: "Mumbai",
      description: "The financial capital of India",
      imgSrc:
        "https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Delhi",
      description: "The capital city of India",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bangalore",
      description: "The tech hub of India",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1697729434815-40ab4970ebc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Kolkata",
      description: "The cultural capital of India",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hyderabad",
      description: "The city of pearls",
      imgSrc:
        "https://images.unsplash.com/photo-1576906131787-4921116d8195?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <section className="mt-12">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <h2 className="text-center text-3xl font-bold md:text-5xl mb-12">
            Select Locations
          </h2>
          <div className="relative">
            <Slider
              ref={sliderRef}
              {...sliderSettings}
              className="relative max-w-5xl mx-auto"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 rounded-md border border-gray-300 px-8 py-6"
                >
                  <img
                    src={city.imgSrc}
                    alt={city.name}
                    className="mb-4 h-56 w-full object-cover lg:h-72"
                  />
                  <p className="font-bold">{city.name}</p>
                  <p className="text-sm font-bold text-green-800">
                    {city.description}
                  </p>
                </div>
              ))}
            </Slider>

            <div className="flex justify-center space-x-4 mt-4">
              <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
