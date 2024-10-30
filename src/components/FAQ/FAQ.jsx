import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Importing icons from react-icons

const FAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const faqs = [
    {
      question: "Looking for a refund?",
      answer:
        "If you're unsatisfied with your donation photos, please contact us to discuss refund options.",
    },
    {
      question: "Unsatisfied with the donation photos you received?",
      answer:
        "We strive for quality. Please reach out to our support for assistance.",
    },
    {
      question: "Want to know more about how your donation is being used?",
      answer:
        "You can track the impact of your donation through our reporting tools.",
    },
    {
      question: "Need help with the donation process?",
      answer: "Our support team is available to assist you with any issues.",
    },
    {
      question: "Curious about the impact of your donation?",
      answer:
        "Each donation contributes to a larger mission, and we provide updates on our efforts.",
    },
    {
      question: "Having trouble accessing your donation receipt?",
      answer:
        "If you need assistance accessing your receipt, please contact support.",
    },
  ];

  return (
    <section>
      <div className="mx-auto flex w-full max-w-full flex-col items-center justify-center px-5 py-4 md:px-10 md:py-8 mt-4">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h1 className="max-w-3xl mx-auto text-2xl font-bold text-center md:text-4xl">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQs */}
        <div className="mt-10 flex w-full max-w-4xl flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative my-2 w-full rounded-md border border-green-800 px-12 py-4" // Keeping the adjusted padding
            >
              <div
                className="flex justify-between items-center cursor-pointer" // Add cursor-pointer for better UX
                onClick={() => toggleFaq(index)}
              >
                <div className="max-w-4xl">
                  <h2
                    className={`font-bold text-base ${
                      openFaqIndex === index ? "text-green-900" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </h2>
                  {openFaqIndex === index && (
                    <p className="font-inter mt-4 text-base font-light text-gray-500">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <span
                  className={`absolute right-5 top-5 ${
                    openFaqIndex === index ? "text-green-900" : "text-black"
                  }`}
                >
                  {openFaqIndex === index ? (
                    <AiOutlineMinus size={20} />
                  ) : (
                    <AiOutlinePlus size={20} />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="" className="text-black font-bold">
            {" "}
            customer support team.
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
