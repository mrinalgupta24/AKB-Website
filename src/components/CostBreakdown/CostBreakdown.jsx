import React from "react";
import bgImage from "../../images/bg1.jpg";

const CostBreakdown = () => {
  const data = [
    { item: "Rice", cost: "3 Rupees" },
    { item: "Vegetables", cost: "2 Rupees" },
    { item: "Gas and Chef", cost: "3 Rupees" },
    { item: "Ingredients", cost: "3 Rupees" },
    { item: "Parcel box, print", cost: "2 Rupees" },
    { item: "Volunteers", cost: "0 Rupees", note: "See why?" },
    { item: "Transportation", cost: "0 Rupees", note: "See why?" },
    { item: "Maintenance", cost: "0 Rupees", note: "See why?" },
  ];

  return (
    <section
      className="w-full max-w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-4xl px-4 sm:px-8 md:px-12 py-8 mx-auto">
        <h2 className="text-3xl font-bold md:text-5xl text-center  text-center mb-6 sm:mb-8 md:mb-12">
          Detailed Cost Breakdown
        </h2>

        {/* Table-like layout with green borders */}
        <div className="grid grid-cols-2 gap-0 sm:gap-0 border border-green-900">
          {data.map((entry, index) => (
            <React.Fragment key={index}>
              {/* Item Column with Green Border */}
              <div className="border border-green-900 p-2 text-gray-700 font-medium">
                {entry.item}
              </div>

              {/* Cost and Note Column with Green Border */}
              <div className="flex justify-between items-center border border-green-900 p-2">
                <span className="text-gray-700 font-medium">
                {entry.cost}
                </span>
                {entry.note && (
                  <span className="ml-2 text-green-800 font-bold">{entry.note}</span>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Total Row with Green Border */}
        <div className="grid grid-cols-2 gap-0 sm:gap-0 mt-6 sm:mt-4 border-t-2 pt-4 sm:pt-2 border border-green-900">
          <span className="font-bold text-gray-900 border border-green-900 p-2">
            Total
          </span>
          <span className="font-bold text-green-900 border border-green-900 p-2">
            13 Rupees
          </span>
        </div>
      </div>
    </section>
  );
};

export default CostBreakdown;
