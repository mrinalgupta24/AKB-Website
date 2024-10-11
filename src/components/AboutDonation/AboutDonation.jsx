import React from "react";
import bgImage from "../../images/aboutus.jpg";

const AboutDonation = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-full px-12 py-8 mt-12">
          {/* Component */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Content */}
            <div className="flex flex-col gap-8 lg:w-3/5">
              <h2 className="text-3xl font-bold md:text-5xl text-center lg:text-left">
                Help Provide Meals for the Homeless
              </h2>
              <p className="text-sm sm:text-base sm:text-center lg:text-left">
                Each day, millions of people around the world face the
                devastating effects of hunger, with the homeless among the most
                affected. In a world where nearly 150 million people struggle to
                find their next meal, your contribution can make an invaluable
                difference. By donating a small portion of your income, you can
                provide much-needed food to those living on the streets,
                ensuring they don't have to face another day hungry. Your
                kindness can be life-changing. As a gesture of our appreciation,
                we will send you a photo of the person you helped. Together, we
                can work toward ending hunger and bringing hope to those in
                need. Join us in this mission to ensure that no one has to
                endure the pain of an empty stomach.
              </p>
            </div>
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

export default AboutDonation;
