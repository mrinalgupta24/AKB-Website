import React from "react";
import bgImage from "../../images/aboutus.jpg";

const AboutUs = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-full px-12 py-8 mt-12">
          {/* Component */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Content */}
            <div className="flex flex-col gap-8 lg:w-3/5">
              <h2 className="text-3xl font-bold md:text-4xl text-center lg:text-left">About Us</h2>
              <p className="text-base text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Proin fermentum leo vel orci. Dui faucibus in ornare quam
                viverra orci sagittis eu. Viverra nam libero justo laoreet sit
                amet. Vulputate odio ut enim blandit volutpat maecenas volutpat
                blandit. A lacus vestibulum sed arcu non odio euismod. Feugiat
                pretium nibh ipsum consequat. Cum sociis natoque penatibus et.
                Leo in vitae turpis massa sed. Neque aliquam vestibulum morbi
                blandit cursus. Facilisis sed odio morbi quis. A pellentesque
                sit amet porttitor eget.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
            {/* Image with background */}
            <div
              className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5 lg:h-auto"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* This div now has the background image applied */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
