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
            <a
              key={index}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-[300px] items-end"
            >
              <div className="inline-block h-full w-full rounded-lg bg-gray-200 flex items-center justify-center">
                <p className="text-lg font-bold">View Document</p>
              </div>
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm sm:text-base font-bold">{doc.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
