import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // TODO: Replace with your actual WhatsApp number (with country code, no + sign)
  const message = 'Hi Mediamation team! I have a question about your platform.';

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip / Popup */}
      <div className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg mb-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap max-w-[200px] text-center relative">
        Chat with us on WhatsApp
        {/* Tooltip arrow */}
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white transform rotate-45" />
      </div>

      {/* Button wrapper with relative for pulse ring */}
      <div className="relative">
        {/* Pulse ring behind icon */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none" />

        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          aria-label="Chat with us on WhatsApp"
          className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-out hover:shadow-green-500/30 hover:shadow-2xl active:scale-95"
        >
          <FaWhatsapp className="text-white text-2xl" />

          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#030712] animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
