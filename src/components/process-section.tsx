'use client';

import { MessageSquare, FileSearch, ShieldCheck, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Contáctenos',
    description: 'Escríba al WhatsApp del Gerente General y en menos de 2 horas recibirá una respuesta personalizada. Sin formularios, sin esperas.',
    accent: '#1B7340',
    step: '01',
  },
  {
    icon: FileSearch,
    title: 'Diagnóstico gratuito',
    description: 'Analizamos su situación ambiental, identificamos los permisos y licencias que necesita, y le entregamos un plan de acción con cronograma y presupuesto.',
    accent: '#0E8A7D',
    step: '02',
  },
  {
    icon: ShieldCheck,
    title: 'Gestión integral',
    description: 'Nuestro equipo elabora los estudios, tramita los permisos y gestiona todo el proceso ante las autoridades competentes hasta la obtención final.',
    accent: '#C49B3C',
    step: '03',
  },
  {
    icon: Rocket,
    title: 'Operación con cumplimiento',
    description: 'Su empresa opera con total tranquilidad y cumplimiento normativo. Le acompañamos con monitoreo continuo y soporte permanente.',
    accent: '#1B7340',
    step: '04',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProcessSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
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
            <Rocket className="w-4 h-4" />
            Proceso simple
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Cómo funciona
            <span className="text-[#1B7340]"> trabajar con Ambimag</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            En 4 pasos simples, su empresa pasa de la incertidumbre al cumplimiento total. Sin complicaciones, sin intermediarios.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {STEPS.map((step, index) => (
            <motion.div key={step.step} variants={stepVariants} className="relative">
              {/* Connector line (hidden on mobile) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-200" />
              )}

              <div className="text-center">
                {/* Step number + icon */}
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: `${step.accent}12` }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.accent }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            ¿Listo para iniciar? El primer paso es el más fácil.
          </p>
          <a
            href={`https://wa.me/593994670519?text=${encodeURIComponent('Hola Galo, quiero iniciar un proyecto de consultoría ambiental. ¿Podemos conversar?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1B7340] hover:bg-[#145C33] text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4" />
            Iniciar ahora por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
