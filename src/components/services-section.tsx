'use client';

import { Leaf, Scale, ArrowRight, Phone, Briefcase, GraduationCap, Shield, UtensilsCrossed, Users, TreePine, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const SERVICES = [
  {
    icon: Leaf,
    title: 'Consultoría Ambiental Integral',
    image: '/images/service-consulting.jpg',
    description:
      'Diagnósticos, auditorías y gestión ambiental. Planes de manejo ambiental, monitoreo, relación con la autoridad ambiental, certificaciones ISO y BASC. Acompañamos a empresas e instituciones a desarrollar su crecimiento sustentable alineado con las normas regulatorias locales e internacionales.',
    features: ['Planes de Manejo Ambiental', 'Monitoreo Ambiental', 'Certificaciones ISO / BASC', 'Buenas Prácticas de Manufactura', 'Relación con Autoridad Ambiental'],
    accent: '#1B7340',
  },
  {
    icon: Award,
    title: 'BPM / BPADT',
    image: '/images/service-bpm-bradt.jpg',
    description:
      'Buenas Prácticas de Manufactura, Almacenamiento, Distribución y Transporte. Implementación y mantenimiento de sistemas BPM en sectores farmacéutico, alimentario y cosmético, garantizando el cumplimiento regulatorio en cada etapa de la cadena productiva.',
    features: ['BPM Farmacéutica', 'BPM Alimentaria y Cosméticos', 'BPADT: Almacenamiento y Distribución', 'Buenas Prácticas de Transporte', 'Cumplimiento Regulatorio BPM'],
    accent: '#0E8A7D',
  },
  {
    icon: Award,
    title: 'Gestión de Calidad / BASC',
    image: '/images/service-advisory.jpg',
    description:
      'Implementación, mantenimiento y fortalecimiento de sistemas de gestión de calidad como ISO 9001:2015. Gestión de seguridad y control en la cadena de suministro bajo el estándar BASC. Auditorías internas, a proveedores y reingeniería de procesos para la mejora continua.',
    features: ['ISO 9001:2015', 'BASC: Seguridad en Comercio Exterior', 'Gestión de Calidad Integral', 'Auditorías y Reingeniería de Procesos', 'Mejora Continua'],
    accent: '#2D6A4F',
  },
  {
    icon: Shield,
    title: 'Seguridad y Salud Ocupacional',
    image: '/images/service-fieldwork.jpg',
    description:
      'Asesoría integral en Sistema de Gestión SST basado en ISO 45001:2018. Conformación de Comité Paritario, elaboración de matrices de riesgo, fichas médicas, plan de vigilancia de la salud y programa de prevención de consumo de drogas.',
    features: ['ISO 45001:2018', 'Matriz de Riesgos y Peligros', 'Comité Paritario de Seguridad', 'Fichas Médicas y Vigilancia', 'Prevención de Consumo de Drogas'],
    accent: '#C49B3C',
  },
  {
    icon: Briefcase,
    title: 'Gestión 360 / Proyectos Contractuales',
    image: '/images/service-construction.jpg',
    description:
      'Optimización y gestión de procesos, negociaciones gubernamentales y municipales. Consultoría civil: estudios estructurales, construcción y fiscalización. Asesoría legal en legislación ambiental y civil/comercial. Maquila, formulación y representación técnica química.',
    features: ['Optimización de Procesos', 'Negociaciones Gubernamentales', 'Consultoría Civil y Fiscalización', 'Legislación Ambiental y Civil', 'Maquila y Representación Técnica'],
    accent: '#2D6A4F',
  },
  {
    icon: GraduationCap,
    title: 'Capacitación y Asesoría',
    image: '/images/service-training.jpg',
    description:
      'Programas de formación y capacitación corporativa en Sistemas de Calidad, Seguridad y Salud Ocupacional, Ambientales, Consultoría y Proyectos, Gestión de Proyectos y Metodologías Agile. Más de 10 años formando profesionales en el sector ecuatoriano.',
    features: ['Sistemas de Calidad (BPM, ISO)', 'Seguridad y Salud Ocupacional', 'Ambientales', 'Gestión de Proyectos', 'Metodologías Agile'],
    accent: '#7C4A1E',
  },
  {
    icon: TreePine,
    title: 'Gestión Ambiental',
    image: '/images/service-engineering.jpg',
    description:
      'Legislación ambiental: diagnóstico de impactos ambientales, estudios de impacto ambiental, auditorías ambientales de cumplimiento. Producción más limpia, manejo de desechos sólidos y sistemas de tratamiento de aguas residuales.',
    features: ['Estudios de Impacto Ambiental', 'Auditorías de Cumplimiento', 'Producción más Limpia', 'Manejo de Desechos Sólidos', 'Tratamiento de Aguas Residuales'],
    accent: '#1B7340',
  },
  {
    icon: UtensilsCrossed,
    title: 'Seguridad Alimentaria',
    image: '/images/service-food-safety.jpg',
    description:
      'Asesoría especializada en seguridad alimentaria con base en las normas BPM, HACCP y BRC. Acompañamos a empresas alimentarias a garantizar la inocuidad de sus productos y cumplir con los estándares nacionales e internacionales de calidad.',
    features: ['BPM — Buenas Prácticas de Manufactura', 'HACCP — Análisis de Peligros', 'BRC — Norma Global de Seguridad', 'Auditorías de Cumplimiento', 'Capacitación Interna'],
    accent: '#0E8A7D',
  },
  {
    icon: Users,
    title: 'Sistema de Gestión de Talento Humano',
    image: '/images/service-talent.jpg',
    description:
      'Elaboración de procedimientos y registros relativos a la selección, contratación, formación y evaluación del talento humano. Diseñamos sistemas que optimizan la gestión de personas y fortalecen el compromiso organizacional.',
    features: ['Selección y Contratación', 'Formación y Capacitación', 'Evaluación del Desempeño', 'Procedimientos y Registros', 'Compromiso Organizacional'],
    accent: '#2D6A4F',
  },
  {
    icon: Scale,
    title: 'Asesoría Jurídica',
    image: '/images/service-legal.jpg',
    description:
      'Servicio legal integral con cobertura en derecho penal, civil, ambiental, laboral y societario. Nuestro equipo multidisciplinario de profesionales brinda acompañamiento legal estratégico para la toma de decisiones empresariales.',
    features: ['Derecho Penal', 'Derecho Civil', 'Derecho Ambiental', 'Derecho Laboral', 'Derecho Societario'],
    accent: '#C49B3C',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WHATSAPP_NUMBER = '593994670519';

function getServiceWhatsAppUrl(serviceTitle: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, necesito información sobre su servicio de ${serviceTitle}. ¿Podemos conversar?`)}`;
}

const genericWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito información sobre sus servicios de consultoría y asesoría. ¿Podemos conversar?')}`;

export function ServicesSection() {

  return (
    <section id="servicios" className="relative py-16 sm:py-20 lg:py-24 bg-white">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1B7340]/[0.03] to-transparent pointer-events-none" />

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
            <Briefcase className="w-4 h-4" />
            Soluciones integrales
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Soluciones en Calidad, Seguridad
            <span className="text-[#1B7340]"> y Medio Ambiente</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Acompañamos a empresas e instituciones a desarrollar su crecimiento alineado con las normas regulatorias locales e internacionales en Calidad, Seguridad y Medio Ambiente. Cada servicio resuelve un problema real.
          </p>
        </motion.div>

        {/* Service cards - 3 rows of 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card
                className="group h-full border-0 transition-all duration-300"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Service photo or gradient */}
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    style={{
                      borderRadius: '12px 12px 0 0',
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      borderRadius: '12px 12px 0 0',
                      width: '100%',
                      height: '220px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${service.accent} 0%, ${service.accent}99 50%, ${service.accent}66 100%)`,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Decorative pattern */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.08,
                        backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 80%, white 1px, transparent 1px)`,
                        backgroundSize: '40px 40px, 60px 60px, 50px 50px',
                      }}
                    />
                    <service.icon style={{ width: '64px', height: '64px', color: 'rgba(255,255,255,0.9)', position: 'relative', zIndex: 1 }} />
                  </div>
                )}
                <CardContent style={{ padding: '24px' }}>
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                    style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.accent }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 font-medium text-sm transition-colors"
                    style={{ color: service.accent }}
                  >
                    Consultar este servicio
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
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
          <a
            href={genericWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1B7340] hover:bg-[#145C33] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5" />
            Contacta a uno de nuestros expertos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
