'use client';

import { ShieldCheck, ArrowRight, Phone, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WHATSAPP_NUMBER = '593994670519';

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Galo, necesito consultoría ambiental para mi empresa en Ecuador. ¿Podemos conversar?')}`;

  return (
    <section className="relative overflow-hidden">
      {/* Background image with green overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(18, 70, 43, 0.85)' }} />

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-20 w-24 h-24 bg-[#C49B3C]/15 rounded-full blur-sm hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-[#C49B3C]" />
                Consultoría Ambiental Certificada en Ecuador
              </div>

              {/* Main headline */}
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight">
                Cumpla la normativa ambiental.
                <span className="block mt-2 text-[#C49B3C]">Evite multas. Proteja su inversión.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Acompañamos a empresas e instituciones a desarrollar su crecimiento ambiental sustentable alineado con las normas regulatorias locales e internacionales. +10 años siendo líderes en consultoría y capacitación corporativa.
              </p>

              {/* CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white hover:bg-gray-50 text-[#1B7340] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Escríbame al WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#servicios"
                  className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3.5 rounded-xl font-medium text-base transition-all border border-white/25 hover:border-white/40"
                >
                  <Leaf className="w-4 h-4" />
                  Ver nuestros servicios
                </a>
              </div>

              {/* Trust line */}
              <p className="mt-6 text-sm text-white/60 flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#C49B3C]" />
                Respuesta garantizada en menos de 2 horas
              </p>
            </motion.div>
          </div>

          {/* Right: Visual block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-md lg:max-w-lg hidden md:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center shadow-lg p-2">
                    <Image
                      src="/ambimag-logo.png"
                      alt="Ambimag Logo"
                      width={72}
                      height={72}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Ambiental Integral Ambimag</h3>
                    <p className="text-white/60 text-sm">Cía. Ltda. — Soluciones Integrales</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">10+</p>
                    <p className="text-xs text-white/60 mt-1">Años de experiencia</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C49B3C]">200+</p>
                    <p className="text-xs text-white/60 mt-1">Proyectos realizados</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-xs text-white/60 mt-1">Cumplimiento normativo</p>
                  </div>
                </div>

                {/* Director info */}
                <div className="mt-6 pt-6 border-t border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1B7340] flex items-center justify-center text-white font-bold text-sm">
                      GE
                    </div>
                    <div>
                      <p className="text-white font-medium">Galo Estupiñán Vera</p>
                      <p className="text-white/50 text-xs">Gerente General</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#C49B3C]/30 rounded-full blur-lg" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
