import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../images/bg1.jpg";

const WebComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const initiatives = [
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
    {
      location: "Hyderabad",
      title: "Evergreen Elders",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
      link: "/donation3",
    },
    {
      location: "Kolkata",
      title: "Tranquil Twilight Home",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      link: "/donation3",
    },
    {
      location: "Bangalore",
      title: "Graceful Aging Center",
      image: "https://pagedone.io/asset/uploads/1696244340.png",
      link: "/donation3",
    },
    {
      location: "Delhi",
      title: "Blissful Retirement Haven",
      image: "https://pagedone.io/asset/uploads/1696244356.png",
      link: "/donation3",
    },
    {
      location: "Mumbai",
      title: "Harmony House for Seniors",
      image: "https://pagedone.io/asset/uploads/1696244317.png",
      link: "/donation3",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };

  const filteredInitiatives = initiatives.filter(
    (initiative) =>
      initiative.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      initiative.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mt-8 mb-24 flex justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <form className="max-w-7xl mx-auto" onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search old age homes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-r from-green-900 to-green-800 font-medium focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
            >
              Search
            </button>
          </div>
        </form>

        {/* Display Old Age Homes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredInitiatives.slice(0, 9).map((initiative, index) => (
            <div
              key={index}
              className="group border border-gray-300 rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="rounded-t-2xl w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl flex flex-col items-center text-center">
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-3">
                  {initiative.title}
                </h4>
                <span className="text-green-800 font-bold mb-5 block">
                  {initiative.location}
                </span>
                <Link
                  to={initiative.link}
                  className="bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
                >
                  Support Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebComponent;
