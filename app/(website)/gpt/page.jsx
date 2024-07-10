"use client"
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
