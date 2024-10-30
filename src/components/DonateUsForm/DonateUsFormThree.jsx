import React, { useState } from "react";

// Calculate tomorrow's date in YYYY-MM-DD format
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const minDate = tomorrow.toISOString().split("T")[0];

const DonateUsFormThree = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [file, setFile] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAmountChange = (e) => {
    setTotalAmount(e.target.value);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="w-full max-w-6xl px-12 py-8 mt-4 lg:mt-12 md:mt-12 mx-auto">
      <section>
        <div className="w-full flex-col justify-center items-center gap-4 flex">
          <h2 className="text-3xl font-bold md:text-5xl text-center ">
            Delivery
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="lg:my-8 grid lg:grid-cols-2 grid-cols-1 gap-8">
            {/* Left Column */}
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

                {/* Date of Arrival */}
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="donation-date"
                    className="text-gray-600 text-base font-medium"
                  >
                    Date of Arrival
                  </label>
                  <input
                    type="date"
                    min={minDate} // Set the minimum date to tomorrow
                    className="w-full focus:outline-none text-gray-900 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                  />
                </div>

                {/* Donation Amount */}
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="donation-amount"
                    className="text-gray-600 text-base font-medium"
                  >
                    Donation Amount (INR)
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    value={totalAmount}
                    onChange={handleAmountChange}
                    placeholder="Enter the donation amount"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                {/* Account Holder Name */}
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="account-holder-name"
                    className="text-gray-600 text-base font-medium"
                  >
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    placeholder="Enter Account Holder Name"
                  />
                </div>

                {/* Account Number */}
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="account-number"
                    className="text-gray-600 text-base font-medium"
                  >
                    Account Number
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    placeholder="Enter Account Number"
                  />
                </div>

                {/* IFSC Code */}
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="ifsc-code"
                    className="text-gray-600 text-base font-medium"
                  >
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    placeholder="Enter IFSC Code"
                  />
                </div>

                {/* Name of the Bank */}
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="bank-name"
                    className="text-gray-600 text-base font-medium"
                  >
                    Name of the Bank
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    placeholder="Enter Bank Name"
                  />
                </div>

                {/* Bank Branch */}
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor="bank-branch"
                    className="text-gray-600 text-base font-medium"
                  >
                    Bank Branch
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
                    placeholder="Enter Bank Branch"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="w-full flex-col justify-start items-start gap-1.5 flex mt-6">
            <label
              htmlFor="special-request"
              className="text-gray-600 text-base font-medium"
            >
              Any Special Requests
            </label>
            <textarea
              className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm leading-relaxed px-5 py-3 rounded-lg shadow-sm border border-gray-200"
              rows="4"
              placeholder="Enter your special request"
            ></textarea>
          </div>

          {/* Upload Document Section */}
          <div className="w-full flex-col justify-start items-start gap-1.5 flex mt-8">
            <label
              htmlFor="upload-document"
              className="text-gray-600 text-base font-medium"
            >
              Upload delivery slip including money paid
            </label>
            <input
              type="file"
              className="text-sm text-grey-500 mt-2
        file:mr-5 file:py-2 file:px-6
        file:rounded-lg file:border-0
        file:text-sm file:font-medium
        file:bg-[#eaf4f4] file:text-green-800
        hover:file:cursor-pointer hover:file:bg-amber-50
      "
              onChange={handleFileUpload}
            />
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

          {/* Submit Button Section */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="flex justify-center items-center bg-gradient-to-r from-green-900 to-green-800 text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
            >
              Donate Now
            </button>
          </div>
        </form>

        {/* Popup for successful form submission */}
        {isPopupVisible && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <h3 className="text-lg font-bold mb-4">Form Submitted!</h3>
              <p className="mb-6">
                Thank you for your submission. Need to wait till it reaches us
                and then in 1-2 days we will deliver it to the needy.
              </p>
              <button
                onClick={handleClosePopup}
                className="bg-gradient-to-r from-green-900 to-green-800 text-white px-6 py-2 rounded transition-all duration-300 hover:scale-105 hover:rotate-3 hover:from-green-800 hover:to-green-900 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default DonateUsFormThree;
