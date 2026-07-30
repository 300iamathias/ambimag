'use client';

import { Phone, Mail, Menu, X, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const WHATSAPP_NUMBER = '593994670519';
const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://www.instagram.com/ambimag.ec/', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Linkedin, href: 'https://ec.linkedin.com/company/ambimag', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: Facebook, href: 'https://www.facebook.com/ambimag.ec/', label: 'Facebook', color: 'hover:text-blue-500' },
];
const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa conocer más sobre los servicios de Ambimag.')}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="Ambimag - Inicio">
            <Image
              src="/ambimag-logo.png"
              alt="Ambimag Ecuador - Soluciones Integrales"
              width={220}
              height={80}
              className="h-14 sm:h-20 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#1B7340] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B7340] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}

            {/* Social icons */}
            <div className="flex items-center gap-1 ml-2 pl-4 border-l border-gray-200">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.label} de Ambimag`}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-gray-400 ${social.color} transition-all hover:bg-gray-50`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1B7340] hover:bg-[#145C33] text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Contactar ahora
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile social icons */}
            <div className="flex items-center gap-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.label} de Ambimag`}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-3 border-t border-gray-100">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-gray-600 hover:text-[#1B7340] transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1B7340] hover:bg-[#145C33] text-white px-4 py-3 rounded-lg font-medium text-sm transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Contactar al Gerente General
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-500 py-2 px-3">
                  <Mail className="w-4 h-4" />
                  galogestupinan@gmail.com
                </div>
                {/* Mobile social links */}
                <div className="flex items-center gap-4 py-2 px-3 border-t border-gray-100 mt-2 pt-4">
                  <span className="text-xs text-gray-400">Síguenos:</span>
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar ${social.label} de Ambimag`}
                      className={`flex items-center gap-1.5 text-sm text-gray-500 ${social.color} transition-colors`}
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="text-xs">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
