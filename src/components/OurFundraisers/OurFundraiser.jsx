import React from "react";

const OurFundraiser = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Our Fundraisers
          </h2>
          <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          {/* Content */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {/* Item 1 */}
            <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt="John"
                className="inline-block h-72 w-full object-cover"
              />
              <div>
                <p className="text-xl font-semibold">John</p>
                <p className="mb-4 font-semibold text-gray-500">
                  Webflow Developer
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut
                  aliquam, purus sit amet luctus venenatis elit ut aliquam,
                  purus sit amet luctus venenatis
                </p>
                {/* Learn More Button */}
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt="Anniyah"
                className="inline-block h-72 w-full object-cover"
              />
              <div>
                <p className="text-xl font-semibold">Anniyah</p>
                <p className="mb-4 font-semibold text-gray-500">
                  Webflow Developer
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut
                  aliquam, purus sit amet luctus venenatis elit ut aliquam,
                  purus sit amet luctus venenatis
                </p>
                {/* Learn More Button */}
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt="Kevin"
                className="inline-block h-72 w-full object-cover"
              />
              <div>
                <p className="text-xl font-semibold">Kevin</p>
                <p className="mb-4 font-semibold text-gray-500">
                  Webflow Developer
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut
                  aliquam, purus sit amet luctus venenatis elit ut aliquam,
                  purus sit amet luctus venenatis
                </p>
                {/* Learn More Button */}
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt="Tamara"
                className="inline-block h-72 w-full object-cover"
              />
              <div>
                <p className="text-xl font-semibold">Tamara</p>
                <p className="mb-4 font-semibold">Webflow Developer</p>
                <p className="text-sm text-gray-500 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut
                  aliquam, purus sit amet luctus venenatis elit ut aliquam,
                  purus sit amet luctus venenatis
                </p>
                {/* Learn More Button */}
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFundraiser;
