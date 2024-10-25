import React from "react";

const ImageSection = ({ documents }) => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-12">
        <h2 className="text-3xl text-center font-bold md:text-5xl mb-8">
          Related Documents
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-10">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="relative flex h-[300px] items-end rounded-lg overflow-hidden" // Added overflow-hidden for rounded corners
              onClick={() => window.open(doc.link, "_self")} // Open PDF in the same tab
              style={{
                backgroundImage: `url(${doc.image})`, // Assuming each document has an image key
                backgroundSize: "cover", // Ensure the image covers the entire div
                backgroundPosition: "center", // Center the background image
                backgroundRepeat: "no-repeat", // Prevent background from repeating
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {" "}
                {/* Semi-transparent overlay */}
                <p className="text-lg font-bold text-white">View Document</p>
              </div>
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm sm:text-base font-bold">{doc.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
