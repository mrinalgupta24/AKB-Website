import React from "react";
import bgImage from "../../images/bg1.jpg";
import Image from "../../images/helpus.jpg";
import CTATwo from "../CTA2/CTATwo";

const HelpUs = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-full px-6 lg:px-12 mt-12">
          {/* Heading Container */}
          <div className="mb-8 text-center md:mb-8">
            {/* Heading */}
            <h2 className="text-2xl font-bold md:text-4xl">
              How can you help us?
            </h2>
            {/* Subheading */}
            <p className="mt-4 font-bold text-justify text-green-800">
              At AKB, you can make a meaningful impact in the lives of others by
              donating or joining us as a volunteer. Whether you help by giving
              your time, spreading our message, or contributing funds, your
              support plays a vital role in our efforts to uplift communities
              and serve those in need.
            </p>
          </div>
          <CTATwo />
          {/* Contents */}
          <div className="mt-12 mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-16 md:grid-cols-3 md:gap-4">
            {/* Content */}
            <div
              className="mx-auto w-full max-w-md gap-4 rounded-md bg-gray-100 p-8 text-black sm:px-4 sm:py-8"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="mb-3">
                <h6 className="text-lg font-bold text-center text-green-900">
                  Make a Donation
                </h6>
              </div>
              <img
                src={Image}
                alt="image"
                className="inline-block h-60 w-full rounded-md object-cover"
              />
              <div className="flex w-full text-gray-500 flex-col text-justify items-start gap-5 p-0 mt-4 text-center ">
                <div>
                  Your generosity goes beyond the act of giving—it creates
                  change. AKB is committed to using every donation responsibly,
                  ensuring that each contribution directly supports our mission
                  and benefits those who need it most.
                </div>
              </div>
            </div>

            <div
              className="mx-auto w-full max-w-md gap-4 rounded-md bg-gray-100 p-8 text-black sm:px-4 sm:py-8"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="mb-3">
                <h6 className="text-lg font-bold text-center text-green-900">
                  Join as a Volunteer
                </h6>
              </div>
              <img
                src={Image}
                alt="image"
                className="inline-block h-60 w-full rounded-md object-cover"
              />
              <div className="flex w-full text-gray-500 text-justify flex-col items-start gap-5 p-0 mt-4 text-center">
                <div>
                  Volunteering is a powerful way to shape the community you wish
                  to see. By giving your time and energy, you actively
                  contribute to positive change and strengthen the bonds within
                  society.
                </div>
              </div>
            </div>
            <div
              className="mx-auto w-full max-w-md gap-4 rounded-md bg-gray-100 p-8 text-black sm:px-4 sm:py-8"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="mb-3">
                <h6 className="text-lg font-bold text-center text-green-900">
                  Spread the Word
                </h6>
              </div>
              <img
                src={Image}
                alt="image"
                className="inline-block h-60 w-full rounded-md object-cover"
              />
              <div className="flex w-full text-gray-500 flex-col text-justify items-start gap-5 p-0 mt-4 text-center">
                <div>
                  Raising awareness is the first step towards action. Share our
                  story, spread our message, and help us inspire others to join
                  in our cause. With your voice, we can amplify our impact and
                  make a greater difference together.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpUs;
