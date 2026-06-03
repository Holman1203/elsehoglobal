'use client';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const phone = '2340000000000';
  const message = 'Hello El-SEHO Frontier Solutions! I\'d like to enquire about your products and services.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="glass-dark rounded-2xl p-5 w-72 shadow-2xl animate-fade-up">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">El-SEHO Support</p>
              <p className="text-green-400 text-xs">Typically replies within an hour</p>
            </div>
          </div>
          <p className="text-white/70 text-sm mb-4">
            Hi there! How can we help you today? Chat with us on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#25D366] hover:bg-[#20b358] text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
          >
            Start Chat
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b358] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp Chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
