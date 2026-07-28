'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const TESTIMONIALS = [
  {
    name: 'Carlos Montoya',
    role: 'Director de Operaciones',
    company: 'Constructora Guayas S.A.',
    text: 'Ambimag nos ayudó a obtener la Licencia Ambiental de Operación en tiempo récord. Su equipo gestionó todo el proceso con el MAATE sin que nosotros tuviéramos que preocuparnos por nada. Lo que más valoro es la comunicación constante: siempre supimos en qué etapa estaba el trámite. Sin duda, el mejor aliado ambiental en Ecuador.',
    rating: 5,
    initials: 'CM',
    color: '#1B7340',
  },
  {
    name: 'María Fernanda López',
    role: 'Gerente de Planta',
    company: 'Agroindustrial El Dorado',
    text: 'Después de recibir una notificación de fiscalización, contactamos a Galo Estupiñán directamente por WhatsApp. En menos de 24 horas ya teníamos un plan de acción claro. Su conocimiento de la normativa ambiental ecuatoriana es impresionante y nos evitaron multas que habrían superado los USD 50.000. Recomendados al 100%.',
    rating: 5,
    initials: 'ML',
    color: '#0E8A7D',
  },
  {
    name: 'Ing. Roberto Anchundia',
    role: 'Supervisor de SST',
    company: 'Minera Aurífera del Ecuador',
    text: 'Llevamos más de 3 años trabajando con Ambimag en todos nuestros proyectos de consultoría ambiental y capacitación. Lo que los diferencia es el compromiso real: no solo entregan documentos, sino que acompañan hasta que la empresa opera con total cumplimiento. Su programa de capacitación en SST transformó la cultura de seguridad en nuestra operación.',
    rating: 5,
    initials: 'RA',
    color: '#C49B3C',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-16 sm:py-20 lg:py-24 bg-gray-50">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231B7340' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10S0 14.5 0 20s4.5 10 10 10 10-4.5 10-10zm20 0c0-5.5-4.5-10-10-10S20 14.5 20 20s4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1B7340]/10 px-4 py-2 rounded-full text-[#1B7340] text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Testimonios de clientes
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Empresas que confían
            <span className="text-[#1B7340]"> en Ambimag</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Más de 200 proyectos exitosos respaldan nuestro compromiso. Conozca la opinión de quienes ya eligieron a Ambimag como su aliado ambiental.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden bg-white">
                <CardContent className="p-6 sm:p-8">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 mb-4 opacity-15" style={{ color: testimonial.color }} />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C49B3C] text-[#C49B3C]" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: testimonial.color }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">{testimonial.role} — {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 bg-white rounded-xl px-6 sm:px-10 py-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[5, 5, 5, 5, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C49B3C] text-[#C49B3C]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-900">5.0</span>
              <span className="text-xs text-gray-400">promedio</span>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-lg font-bold text-[#1B7340]">200+</p>
              <p className="text-xs text-gray-400">clientes satisfechos</p>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-lg font-bold text-[#0E8A7D]">100%</p>
              <p className="text-xs text-gray-400">tasa de aprobación</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
