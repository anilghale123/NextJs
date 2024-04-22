// Modal.jsx
"use client"

import React, { useState } from "react";

export default function Modal({ title, content, onClose }) {
  const [isVisible, setIsVisible] = useState(true); // Control visibility

  const handleClose = () => {
    setIsVisible(false); // Hide modal
    if (onClose) onClose(); // Call external onClose function if provided
  };

  return (
    isVisible && ( // Only render if visible
      <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="modal">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
            <div className="mt-2 px-4 py-3">
              <p className="text-sm text-gray-500">{content}</p>
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
}
