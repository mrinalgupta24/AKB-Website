import React from "react";

const Gallery = () => {
  const images = [
    "https://pagedone.io/asset/uploads/1688025668.png",
    "https://pagedone.io/asset/uploads/1688029344.png",
    "https://pagedone.io/asset/uploads/1688029370.png",
    "https://pagedone.io/asset/uploads/1688029384.png",
    "https://pagedone.io/asset/uploads/1688029394.png",
    "https://pagedone.io/asset/uploads/1688029408.png",
    "https://pagedone.io/asset/uploads/1688029424.jpg",
    "https://pagedone.io/asset/uploads/1688029434.png",
    "https://pagedone.io/asset/uploads/1688029447.jpg",
    "https://pagedone.io/asset/uploads/1688029424.jpg",
    "https://pagedone.io/asset/uploads/1688029434.png",
    "https://pagedone.io/asset/uploads/1688029447.jpg",
  ];

  return (
    <div className="container relative mx-auto w-full max-w-7xl p-5">
      <h1 className="text-3xl font-bold md:mb-8 md:text-5xl text-center mb-8">
        Our Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
