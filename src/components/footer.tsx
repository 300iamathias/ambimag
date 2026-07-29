'use client';

import { Leaf, Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const WHATSAPP_NUMBER = '593994670519';
const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://www.instagram.com/ambimag.ec/', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Linkedin, href: 'https://ec.linkedin.com/company/ambimag', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Facebook, href: 'https://www.facebook.com/ambimag.ec/', label: 'Facebook', color: 'hover:text-blue-300' },
];

export function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito información sobre los servicios de Ambimag.')}`;

  return (
    <footer id="contacto" className="bg-gradient-to-br from-[#145C33] to-[#1B7340] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-white/70 text-sm leading-relaxed">
              Acompañamos a empresas e instituciones a desarrollar su crecimiento ambiental sustentable alineado con las normas regulatorias locales e internacionales.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.label} de Ambimag`}
                  className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 ${social.color} hover:bg-white/20 transition-all`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Consultoría Ambiental Integral
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Gestión de Licencias y Permisos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Normativa y Cumplimiento Legal
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Estudios de Impacto Ambiental
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Plan de Manejo Ambiental
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Gestión 360 — Proyectos Contractuales
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Capacitación Profesional
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contacto directo
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#25D366]" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                >
                  +593 99 467 0519
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C49B3C]" />
                <a
                  href="mailto:galogestupinan@gmail.com"
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                >
                  galogestupinan@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/70 text-sm">Carchi 609 y 1ro. de Mayo, Guayaquil</span>
              </li>
            </ul>
            <div className="mt-4 bg-white/10 rounded-lg p-3">
              <p className="text-white text-sm font-semibold">Galo Estupiñán Vera</p>
              <p className="text-white/60 text-xs">Gerente General</p>
            </div>
          </div>

          {/* Quick links + Social */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Enlaces
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-white/70 hover:text-white text-sm transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-white/70 hover:text-white text-sm transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#25D366]/80 text-sm font-medium transition-colors">
                  WhatsApp directo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Ambiental Integral Ambimag Cía. Ltda. — Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${social.label} de Ambimag`}
                className={`text-white/40 ${social.color} transition-colors`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <a href="https://jimbra.net" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white/70 text-xs sm:text-sm transition-colors">
            Desarrollado por Jimbra
          </a>
        </div>
      </div>
    </footer>
  );
}
