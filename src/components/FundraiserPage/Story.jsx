import React from "react";
import bgImage from "../../images/greybg.avif";

const Story = () => {
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
                Story
              </h2>
              <p className="mb-2 text-sm text-gray-600 sm:text-base md:mb-6 lg:mb-8">
                Every day, millions worldwide suffer from hunger, particularly
                affecting the homeless. With nearly 150 million people
                struggling to secure their next meal, your support can have a
                profound impact. By donating even a small portion of your
                income, you can help provide essential food to those living on
                the streets, ensuring they don’t have to endure another day
                without nourishment. Your generosity can transform lives and
                bring hope to those in need. Join us in making a
                difference—together, we can fight hunger and restore dignity to
                those facing this dire challenge. Your kindness matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
