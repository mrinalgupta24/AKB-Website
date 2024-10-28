import React from "react";
import sampleImage from "../../images/image.png"; // replace with the actual path to your images
import bgImage from "../../images/bg1.jpg";

const DonorBenefits = () => {
  const benefits = [
    {
      image: sampleImage,
      title: "Photographic Proof",
      description: "Visual evidence of how your donations are making an impact",
    },
    {
      image: sampleImage,
      title: "Paid Bills and Receipts",
      description:
        "We provide paid bills for fundraisers, medicines, groceries, and clothes",
    },
    {
      image: sampleImage,
      title: "How Every Rupee Is Spent",
      description:
        "Complete breakdown of every rupee spent, with detailed expense splits available for each mission",
    },
    {
      image: sampleImage,
      title: "Donation Certificate",
      description:
        "Receive a certificate of appreciation acknowledging your valuable contribution to our cause.",
    },
    {
      image: sampleImage,
      title: "80G Tax Exemptions",
      description:
        "Benefit from tax deductions on your donations with our 80G exemption certificates.",
    },
  ];

  return (
    <section
      className="mx-auto w-full max-w-full px-12 mt-12 py-12 bg-blue-50"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold md:text-4xl text-center mb-12">
          What We Provide to Donors
        </h2>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonorBenefits;
