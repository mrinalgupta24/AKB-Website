import React, { useState } from "react";

const DonateUsFormOne = () => {
  const [count, setCount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(3000);

  // Calculate tomorrow's date in YYYY-MM-DD format
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0]; // Get the date in 'YYYY-MM-DD' format

  // Handle count change and update total amount
  const handleCountChange = (e) => {
    const newCount = e.target.value ? parseInt(e.target.value) : 0;
    setCount(newCount);
    setTotalAmount(newCount * 3000);
  };

  return (
    <div className="w-full max-w-6xl px-12 py-8 mt-4 lg:mt-12 md:mt-12 mx-auto" >
      <section>
        <div className="w-full flex-col justify-center items-center gap-4 flex">
          <h2 className="text-2xl font-bold md:text-4xl text-center ">
            Feed a Hungry Soul Today
          </h2>
          <p className="mx-auto mt-2 text-center font-bold md:text-center lg:text-center text-green-800">
            Your contribution can provide a warm meal to those in need.
          </p>
        </div>

        <div className="lg:my-8 grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full flex-col justify-start items-start gap-6 flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              {/* Donor Name */}
              <div className="w-full flex-col justify-start items-start gap-1.5 flex mt-6">
                <label
                  htmlFor="donor-name"
                  className="text-gray-600 text-base font-medium"
                >
                  Donor Name
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                  placeholder="Enter Your Name"
                />
              </div>

              {/* Mobile Number with Country Code */}
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor="mobile-number"
                  className="text-gray-600 text-base font-medium"
                >
                  Mobile Number
                </label>
                <div className="flex w-full">
                  <select className="w-1/3 sm:w-1/4 bg-[#eaf4f4] rounded-lg px-3 py-2 focus:outline-none border border-gray-300">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    className="w-2/3 sm:w-3/4 flex-grow text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200 ml-2 focus:outline-none"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>

              {/* Date of Donation */}
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor="donation-date"
                  className="text-gray-600 text-base font-medium"
                >
                  Date of Donation
                </label>
                <input
                  type="date"
                  min={minDate} // Set the minimum date to tomorrow
                  className="w-full focus:outline-none text-gray-900 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex-col justify-start items-start gap-6 flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              {/* Donor Email */}
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor="donor-email"
                  className="text-gray-600 text-base font-medium"
                >
                  Donor Email
                </label>
                <input
                  type="email"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                  placeholder="donor@xyz.com"
                />
              </div>

              {/* Name on Parcel */}
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor="parcel-name"
                  className="text-gray-600 text-base font-medium"
                >
                  Name on Parcel
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                  placeholder="Enter the parcel name"
                />
              </div>

              {/* Count and Total Amount */}
              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="count"
                    className="text-gray-600 text-base font-medium"
                  >
                    Count
                  </label>
                  <input
                    type="number"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    value={count}
                    onChange={handleCountChange}
                    placeholder="Enter the count"
                  />
                </div>

                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="total-amount"
                    className="text-gray-600 text-base font-medium"
                  >
                    Total Amount (INR)
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    value={totalAmount}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Request Section */}
        <div className="w-full flex-col justify-start items-start gap-1.5 flex mt-6">
          <label
            htmlFor="special-request"
            className="text-gray-600 text-base font-medium"
          >
            Do you have any special request?
          </label>
          <textarea
            className="w-full h-32 focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
            placeholder="Enter any special requests or instructions"
          ></textarea>
        </div>

        {/* Grand Total - Full Width */}
        <div className="w-full max-w-7xl flex justify-between items-center bg-[#eaf4f4] px-8 py-6 rounded-lg shadow-md mt-8">
          <span className="text-base font-semibold text-gray-700">
            Grand Total:
          </span>
          <span className="text-xl font-bold text-gray-900">
            ₹{totalAmount}
          </span>
        </div>

        <div className="flex justify-center mt-8">
          <button className="flex justify-center items-center bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default DonateUsFormOne;
