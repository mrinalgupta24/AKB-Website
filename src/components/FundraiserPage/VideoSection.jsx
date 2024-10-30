import React, { useEffect, useRef, useState } from "react";

const VideoSection = ({ data }) => {
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-8 lg:py-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <h2 className="mb-6 max-w-4xl mx-auto text-3xl font-bold text-center md:text-4xl">
              Video
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-6xl">
                <video
                  ref={videoRef}
                  className="w-full h-auto cursor-pointer"
                  muted
                  loop
                  playsInline
                  onClick={openModal} // Open modal on click
                  style={{ minHeight: "100px", maxHeight: "70vh" }}
                >
                  <source src={data.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Video Playback */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full">
            {/* Close button styled with Tailwind CSS */}
            <button
              className="absolute top-3 right-3 text-white bg-red-600 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation(); // Prevent click from propagating to the modal backdrop
                closeModal(); // Close modal on button click
                videoRef.current.pause(); // Ensure video pauses
              }}
            >
              &times;
            </button>
            <video
              className="w-full h-auto"
              controls
              autoPlay
              muted
              playsInline
              style={{
                maxWidth: "90vw", // Limit width to 90% of viewport
                maxHeight: "90vh", // Limit height to 90% of viewport
                objectFit: "contain", // Fit the video within modal bounds
              }}
              // Removed onClick event here
            >
              <source src={data.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
