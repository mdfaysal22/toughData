"use client"
import { TfiArrowCircleDown } from "react-icons/tfi";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { useState } from "react";

function FAQ() {
    const faqItems = [
        {
          question: 'What is Tailwind CSS?',
          answer: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.',
        },
        {
          question: 'How to install Tailwind CSS?',
          answer: 'You can install Tailwind CSS using npm or yarn. Check the official documentation for detailed instructions.',
        },
      ];

      const [openIndex, setOpenIndex] = useState(null);

      const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };

  return (
    <div className=" mx-auto text-center mt-8">
      <h1 className="text-[2.1875rem] font-bold mb-4">Frequently Asked <span className="text-[#c34043]">Questions</span></h1>

      {faqItems.map((item, index) => (
        <div key={index} className="mb-4 border-b-[1px] mx-auto w-[60%]">
          <div className="mb-2">
            <button
              className={`text-left px-8 w-full flex justify-between items-center rounded-md text-[1.375rem] font-light py-4 focus:outline-none ${openIndex === index ? "bg-[#eeb7b870]" : ""}`}
              onClick={() => handleToggle(index)}
            >
              {item.question} {openIndex === index ? <TfiArrowCircleUp /> : <TfiArrowCircleDown /> }
            </button>
          </div>
          {openIndex === index && <div className="text-[1.375rem] px-8 text-left py-4">{item.answer}</div>}
        </div>
      ))}
      
    </div>
  )
}

export default FAQ