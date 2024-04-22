// components/Layout.js
import { useState } from 'react';
import Modal from './Modal';

export default function Layout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header>
       
      </header>
      <main>
        {children}
      </main>
     
    </>
  );
}
