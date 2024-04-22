// Page.jsx
"use client"
import React, { useState } from 'react';
import Modal from '../component/Modal';

const page = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const modalContent = (
    <p>Yo chi prototype modal vayo</p>
  );

  return (
    <div>
      <button className='bg-green-200 p-3 text-black rounded-lg ' onClick={openModal}>Open Modal</button>
      {showModal && (
        <Modal
          title="Naya Modal"
          content={modalContent} // Pass dynamic content
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default page;
