import React, { useEffect, useRef } from "react";

// Hook for detecting outside clicks
const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current || !domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

const VideoSection = () => {
  const videoRef = useRef(null);
  const domNode = useClickOutside(() => console.log("Clicked outside!")); // Handle outside click

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
        threshold: 0.5, // Trigger when 50% of the video is visible
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
    <section className="bg-white py-20 overflow-hidden">
      {" "}
      {/* Add overflow-hidden */}
      <div ref={domNode} className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <h2 className="mb-6 max-w-4xl mx-auto text-3xl font-bold text-center md:text-5xl">
              Video
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-6xl">
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  muted
                  loop
                  playsInline
                  style={{ minHeight: "100px", maxHeight: "70vh" }} // Set maxHeight for better mobile responsiveness
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
