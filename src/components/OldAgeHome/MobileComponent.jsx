import React, { useState } from "react";
import bgImage from "../../images/bg1.jpg";

const MobileComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const oldAgeHomes = [
    {
      location: "Hyderabad",
      title: "Sunset Haven",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      link: "/donation3",
    },
    {
      location: "Kolkata",
      title: "Golden Years Retreat",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
      link: "/donation3",
    },
    {
      location: "Bangalore",
      title: "Serene Senior Living",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
      link: "/donation3",
    },
    {
      location: "Delhi",
      title: "Autumn Leaves Home",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      link: "/donation3",
    },
    {
      location: "Mumbai",
      title: "Silver Linings Care",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
      link: "/donation3",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };

  const filteredHomes = oldAgeHomes.filter(
    (home) =>
      home.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      home.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section className="py-8">
        <div className="mx-auto w-full max-w-md px-4">
          {/* Title */}
          <h2 className="text-center mb-6 text-2xl font-bold">
            Our Old Age Homes
          </h2>

          {/* Search */}
          <form className="mb-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="search"
                className="w-full p-3 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-green-500 focus:border-green-500"
                placeholder="Search old age homes or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-2 text-white bg-gradient-to-r from-green-900 to-green-800 font-medium rounded-lg text-sm px-4 py-1 transition-all duration-300 hover:from-green-800 hover:to-green-900 active:scale-95"
              >
                Search
              </button>
            </div>
          </form>

          {/* Display Old Age Homes */}
          <div className="space-y-6">
            {filteredHomes.map((home, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src={home.image}
                  alt={home.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white bg-opacity-90">
                  <h3 className="text-lg font-semibold mb-2">{home.title}</h3>
                  <p className="text-green-800 font-bold text-sm mb-3">
                    {home.location}
                  </p>
                  <button
                    className="w-full bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-2 px-4 rounded text-sm transition-all duration-300 hover:scale-105 hover:rotate-1 hover:from-green-800 hover:to-green-900 active:scale-95"
                    onClick={() => (window.location.href = initiative.link)}
                  >
                    Support Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileComponent;
