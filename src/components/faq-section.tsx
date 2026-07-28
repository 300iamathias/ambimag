'use client';

import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    question: '¿Cuánto tiempo toma obtener una Licencia Ambiental de Operación?',
    answer: 'El tiempo varía según la categoría del proyecto y la autoridad competente. En Ambimag, nuestro proceso optimizado permite obtener la Licencia Ambiental en un plazo de 3 a 6 meses para proyectos de categoría II, y de 6 a 12 meses para proyectos de categoría I. Nos encargamos de todo el proceso: desde la elaboración del Estudio de Impacto Ambiental hasta la obtención del documento final, manteniéndole informado en cada etapa del trámite.',
  },
  {
    question: '¿Qué pasa si mi empresa no cuenta con la Licencia Ambiental vigente?',
    answer: 'Operar sin licencia ambiental vigente es una infracción grave según la Ley de Gestión Ambiental del Ecuador. Las consecuencias incluyen multas desde USD 10.000 hasta USD 50.000, paralización de operaciones, e incluso procesamiento penal en casos de daño ambiental. Si su empresa está en esta situación, contáctenos inmediatamente: podemos diseñar un plan de regularización urgente que minimice riesgos y le permita operar dentro del marco legal en el menor tiempo posible.',
  },
  {
    question: '¿Trabajan con empresas de cualquier sector industrial?',
    answer: 'Sí, Ambimag tiene experiencia comprobada en más de 6 sectores industriales: manufacturera, minería, construcción, agroindustria, petrolero y gobierno. Cada sector tiene particularidades regulatorias específicas, y nuestro equipo tiene el conocimiento y la experiencia para gestionar los permisos y licencias que su actividad requiere. Además, trabajamos tanto con empresas grandes como con pymes, adaptando nuestros servicios al tamaño y necesidades de cada cliente.',
  },
  {
    question: '¿Cuál es la diferencia entre un Estudio de Impacto Ambiental y un Plan de Manejo Ambiental?',
    answer: 'El Estudio de Impacto Ambiental (EsIA) es un documento técnico que evalúa los efectos potenciales de un proyecto sobre el medio ambiente antes de su ejecución. Es el requisito principal para obtener la Licencia Ambiental. El Plan de Manejo Ambiental (PMA) es parte del EsIA y detalla las medidas de prevención, mitigación, compensación y monitoreo que se implementarán durante la vida del proyecto. En Ambimap elaboramos ambos documentos de forma integrada, asegurando que cumplan con todos los requisitos del MAATE.',
  },
  {
    question: '¿Cómo puedo iniciar un proyecto de consultoría ambiental con Ambimag?',
    answer: 'El proceso es simple y directo: escriba al WhatsApp del Gerente General, Galo Estupiñán Vera (+593 99 467 0519), y en menos de 2 horas recibirá una respuesta con una propuesta初步. No necesita intermediarios ni burocracia interna. En la primera conversación evaluaremos sus necesidades, le explicaremos el proceso y le entregaremos un cronograma y presupuesto sin compromiso. La consulta inicial es gratuita.',
  },
  {
    question: '¿Ofrecen servicios de capacitación ambiental para mi equipo?',
    answer: 'Sí, ofrecemos programas de capacitación profesional en normativa ambiental, seguridad y salud ocupacional (SST), gestión de desechos e ingeniería ambiental. Nuestros cursos son presenciales y virtuales, adaptados a las necesidades específicas de su equipo. Más de 10 años formando profesionales en el sector ambiental ecuatoriano nos respaldan. Podemos diseñar programas corporativos a medida que se ajusten a los horarios y requerimientos de su empresa.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof FAQS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left hover:bg-gray-50/50 transition-colors rounded-lg"
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1B7340] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-gray-600 text-sm sm:text-base leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#1B7340]/10 px-4 py-2 rounded-full text-[#1B7340] text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Preguntas frecuentes
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Resolvemos sus
            <span className="text-[#1B7340]"> dudas</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Las preguntas más comunes sobre consultoría ambiental y nuestros servicios. ¿No encuentra su respuesta? Escríbanos directamente.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y-0"
        >
          <div className="px-6 sm:px-8">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
