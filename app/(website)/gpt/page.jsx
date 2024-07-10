"use client";
import { useState } from "react";

export default function Box({ title, topics }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenChange = () => {
    console.log("Button clicked"); // Debugging statement
    setIsOpen(!isOpen);
  };

  return (
    <div className="border p-4">
      <button onClick={handleIsOpenChange}>
        Toggle
      </button>
      {isOpen && <div>Content is open</div>}
    </div>
  );
}
