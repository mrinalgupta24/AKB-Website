import React from "react";

const Story = ({ content }) => {
  // Accept only content as prop
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
              <h2 className="mb-6 max-w-4xl mx-auto text-3xl font-bold text-center md:text-4xl">
                Story
              </h2>
              <p className="mb-2 text-sm text-justify text-gray-600 sm:text-base md:mb-6 lg:mb-8">
                {content} {/* Render the content prop */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
