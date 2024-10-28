import React, { useState } from "react";

const DonationCustomForm = () => {
  const [count, setCount] = useState(1);
  const [amountPerItem, setAmountPerItem] = useState(""); // State for the amount per item
  const [totalAmount, setTotalAmount] = useState(0); // Total amount based on count and amount per item

  // Calculate tomorrow's date in YYYY-MM-DD format
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Handle count increment
  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    calculateTotalAmount(newCount, amountPerItem);
  };

  // Handle count decrement
  const decrementCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      calculateTotalAmount(newCount, amountPerItem);
    }
  };

  // Handle amount per item change
  const handleAmountChange = (e) => {
    const newAmount = e.target.value; // Keep it as string
    setAmountPerItem(newAmount);
    calculateTotalAmount(count, newAmount); // Update total amount based on count
  };

  // Calculate total amount based on count and amount per item
  const calculateTotalAmount = (count, amount) => {
    const numericAmount = parseFloat(amount) || 0; // Convert amount to number
    setTotalAmount(numericAmount * count); // Update total amount
  };

  return (
    <div className="w-full max-w-6xl px-12 py-8 mt-12 mx-auto">
      <section>
        <div className="w-full flex-col justify-center items-center gap-4 flex">
          <h2 className="text-3xl font-bold md:text-5xl text-center ">
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
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
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

              {/* Amount and Count */}
              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="amount-per-item"
                    className="text-gray-600 text-base font-medium"
                  >
                    Amount per Item (INR)
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    value={amountPerItem}
                    onChange={handleAmountChange}
                    placeholder="Enter the amount per item"
                  />
                </div>

                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="count"
                    className="text-gray-600 text-base font-medium"
                  >
                    Count
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={decrementCount}
                      className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 border border-gray-200 text-center"
                      value={count}
                      readOnly
                    />
                    <button
                      onClick={incrementCount}
                      className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Request Section */}
        <div className="w-full flex-col justify-start items-start gap-1.5 flex">
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
          <span className="text-lg font-semibold text-gray-700">
            Grand Total:
          </span>
          <span className="text-2xl font-bold text-gray-900">
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

export default DonationCustomForm;
