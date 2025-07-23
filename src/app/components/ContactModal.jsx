'use client';
import { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her ville vi normalt sende data til en server
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-700"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-light text-black mb-6">+ Kontakt os</h2>
          
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Navn"
              className="w-full p-3 border border-gray-200 font-light focus:outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-200 font-light focus:outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon"
              className="w-full p-3 border border-gray-200 font-light focus:outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Besked"
              rows="4"
              className="w-full p-3 border border-gray-200 font-light focus:outline-none focus:border-black resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 font-light hover:bg-gray-900 transition-colors"
          >
            Send besked
          </button>
        </form>
      </div>
    </div>
  );
}
