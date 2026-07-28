'use client';

import { Phone, Mail, MapPin, ArrowRight, Leaf, Quote, Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '593994670519';

export function AboutSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Galo, quiero saber más sobre Ambimag y cómo pueden ayudar a mi empresa. ¿Podemos conversar?')}`;

  return (
    <section id="nosotros" className="relative py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1B7340]/10 px-4 py-2 rounded-full text-[#1B7340] text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Sobre Ambimag
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Un equipo comprometido con
            <span className="text-[#1B7340]"> su cumplimiento</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About text - 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                <strong className="text-gray-900">Ambiental Integral Ambimag Cía. Ltda.</strong> es una firma de consultoría ambiental fundada en Ecuador con la misión de ayudar a empresas de todos los sectores a operar dentro del marco legal, minimizar riesgos ambientales y obtener las licencias y permisos necesarios sin complicaciones. Nuestra filosofía se basa en tres principios: <strong className="text-[#1B7340]">cumplimiento real</strong>, <strong className="text-[#0E8A7D]">agilidad en la gestión</strong> y <strong className="text-[#C49B3C]">compromiso con el resultado</strong>.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Sabemos que la normativa ambiental ecuatoriana es extensa, dinámica y exigente. Las empresas que no cuentan con un aliado especializado enfrentan multas, paralizaciones de operaciones y daño reputacional. En Ambimag transformamos esa complejidad en soluciones concretas: desde la elaboración del Estudio de Impacto Ambiental hasta la obtención de la Licencia Ambiental de Operación, nuestro equipo gestiona cada paso del proceso.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Lo que realmente nos distingue es la <strong className="text-[#1B7340]">atención personalizada</strong>. Cada proyecto es supervisado directamente por nuestro Gerente General, <strong className="text-gray-900">Galo Estupiñán Vera</strong>, quien garantiza la calidad, los tiempos de entrega y la comunicación constante con cada cliente. Cuando usted trabaja con Ambimag, tiene un profesional de confianza al que puede llamar directamente, sin intermediarios.
              </p>

              {/* Quote */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex gap-3">
                  <Quote className="w-5 h-5 text-[#C49B3C] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 italic text-base leading-relaxed">
                    &ldquo;Nuestro compromiso no termina cuando se aprueba la licencia; termina cuando el cliente opera con total tranquilidad y cumplimiento, mes a mes, año a año.&rdquo;
                  </p>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#1B7340]">— Galo Estupiñán Vera, Gerente General</p>
              </div>
            </div>
          </motion.div>

          {/* Contact card - 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-[#1B7340] to-[#145C33] rounded-xl p-6 sm:p-8 text-white shadow-lg h-full flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold mb-2">
                Contacte al Gerente General
              </h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Hablar directamente con Galo Estupiñán Vera es la forma más rápida y efectiva de iniciar su proyecto de consultoría ambiental. Sin intermediarios, sin burocracia interna.
              </p>

              {/* Contact items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                  <div>
                    <p className="text-white/60 text-xs">WhatsApp / Teléfono</p>
                    <p className="text-white font-semibold">+593 99 467 0519</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <Mail className="w-5 h-5 text-[#C49B3C]" />
                  <div>
                    <p className="text-white/60 text-xs">Correo electrónico</p>
                    <p className="text-white font-semibold">galogestupinan@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <MapPin className="w-5 h-5 text-white/70" />
                  <div>
                    <p className="text-white/60 text-xs">Ubicación</p>
                    <p className="text-white font-semibold">Carchi 609 y 1ro. de Mayo, Guayaquil</p>
                  </div>
                </div>

              </div>

              {/* Social media */}
              <div className="mb-6">
                <p className="text-white/60 text-xs mb-2">Síguenos en redes sociales</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/ambimag.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Ambimag"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500/30 text-white/70 hover:text-pink-300 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://ec.linkedin.com/company/ambimag"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Ambimag"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500/30 text-white/70 hover:text-blue-300 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/ambimag.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de Ambimag"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600/30 text-white/70 hover:text-blue-300 transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#1B7340] px-6 py-4 rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg w-full"
                >
                  <Phone className="w-5 h-5" />
                  Escríbame al WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-3 text-center text-xs text-white/50">
                  Respuesta garantizada en menos de 2 horas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
