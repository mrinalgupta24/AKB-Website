import React from "react";

const ImageSection = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title for Related Documents */}
        <h2 className="text-3xl text-center font-bold md:text-5xl mb-8">
          Related Documents
        </h2>
        {/* Content for Related Documents */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-10">
          {/* Image Item 1 */}
          <a href="#" className="relative flex h-[300px] items-end">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt="Document 1"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm sm:text-base font-bold">Document 1</p>
            </div>
          </a>

          {/* Image Item 2 */}
          <a href="#" className="relative flex h-[300px] items-end">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt="Document 2"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm sm:text-base font-bold">Document 2</p>
            </div>
          </a>
        </div>

        {/* Title for ID Proof */}
        <h2 className="text-3xl text-center font-bold md:text-5xl mb-8 mt-16">
          ID Proofs
        </h2>
        {/* Content for ID Proof */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
          {/* Aadhar Card Item */}
          <a href="#" className="relative flex h-[300px] items-end">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt="Aadhar Card"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm sm:text-base font-bold">ID Proof</p>
            </div>
          </a>

          {/* Affiliation ID Proof Item */}
          <a href="#" className="relative flex h-[300px] items-end">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt="Affiliation ID Proof"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm sm:text-base font-bold">
                Affiliation ID Proof
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
