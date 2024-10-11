import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import FAQs from "../../images/aboutus.jpg";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggle}
      >
        <h3
          className={`text-lg font-medium ${
            isOpen ? "text-[#287150]" : "text-gray-900"
          }`}
        >
          {question}
        </h3>
        {isOpen ? (
          <FaMinus className="text-[#287150]" />
        ) : (
          <FaPlus className="text-gray-900" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-sm text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="w-full max-w-full px-12 py-8 mt-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: Image */}
          <div className="hidden lg:block flex items-start justify-center lg:justify-start">
            <img
              src={FAQs}
              alt="Customer Support"
              className="w-[600px] h-[450px] object-cover rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </div>

          {/* Right Section: FAQs */}
          <div className="text-center lg:text-left">
            {/* Subtitle */}
            <h2 className="text-base font-semibold leading-7 text-[#287150]">
              Most Asked Questions
            </h2>

            {/* Title */}
            <h2 className="mt-2 text-4xl font-bold text-gray-900">FAQs</h2>

            {/* Description */}
            <p className="mt-4 text-gray-600">
              Trusted in More Than 100 Countries And 5 Million Customers.
              Transact Easily And Quickly With Just One Click.
            </p>

            {/* FAQ Items */}
            <div className="mt-6 space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
