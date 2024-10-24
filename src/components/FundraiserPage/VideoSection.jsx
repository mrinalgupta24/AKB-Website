import React, { useEffect, useRef, useState } from "react";

const VideoSection = ({ data }) => {
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

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
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <h2 className="mb-6 max-w-4xl mx-auto text-3xl font-bold text-center md:text-5xl">
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
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from closing when clicking the button
                closeModal();
              }}
            >
              &times; {/* Close button */}
            </button>
            <video
              className="w-full h-auto"
              controls
              autoPlay
              muted
              playsInline
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking video
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
