'use client';

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '593994670519';
const WHATSAPP_MESSAGE = 'Hola, me interesa conocer más sobre los servicios de consultoría y asesoría de Ambimag. ¿Podrían atenderme?';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-lg rounded-lg p-3 max-w-[220px] text-sm text-gray-700 border border-gray-100"
              >
                <p className="font-semibold text-[#1B7340]">¿Necesita asesoría profesional?</p>
                <p className="mt-1 text-gray-500 text-xs">Escríbanos ahora, le atendemos directamente.</p>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 text-xs w-4 h-4 flex items-center justify-center"
                  aria-label="Cerrar tooltip"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp con Ambimag"
            className="group relative flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            {/* Hover label */}
            <span className="absolute right-full mr-3 bg-[#1B7340] text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
              Escríbanos ahora
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
