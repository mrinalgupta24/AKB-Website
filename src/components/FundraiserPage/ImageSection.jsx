import React, { useState } from "react";

const ImageSection = ({ documents }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-8">
        <h2 className="text-3xl text-center font-bold md:text-4xl mb-8">
          Related Documents
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-10">
          {documents.map((doc, index) => {
            const imageUrl = doc.link;

            return (
              <div
                key={index}
                className="relative flex h-[300px] items-end rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(imageUrl)} // Open modal on click
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-lg font-bold text-white">View Document</p>
                </div>
                <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                  <p className="text-sm sm:text-base font-bold">{doc.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Popup */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal} // Close modal on click outside of the image
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected document"
                className="max-h-[90vh] max-w-[90vw] rounded-lg"
              />
              <button
                className="absolute top-3 right-3 text-white bg-red-600 rounded-full p-2"
                onClick={closeModal} // Close modal on button click
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageSection;
