'use client';

import { Phone, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '593994670519';

export function CTASection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito asesoría urgente para mi empresa. ¿Podemos conversar hoy?')}`;

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#1B7340] to-[#0E8A7D] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
            <AlertTriangle className="w-4 h-4 text-[#C49B3C]" />
            No arriesgue su operación
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            ¿Su empresa ya cuenta con la licencia ambiental vigente?
          </h2>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            La falta de licencia ambiental o el incumplimiento de la normativa puede generar multas desde USD 10.000 hasta la paralización de sus operaciones. No espere a que las autoridades le fiscalicen. Hable hoy con un experto.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white hover:bg-gray-50 text-[#1B7340] px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Contacta a uno de nuestros expertos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="mt-6 text-sm text-white/50 flex items-center gap-2 justify-center">
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            Disponible ahora — +593 99 467 0519
          </p>
        </motion.div>
      </div>
    </section>
  );
}
