'use client';

import { Leaf, FileCheck, Scale, ArrowRight, Phone, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const SERVICES = [
  {
    icon: Leaf,
    title: 'Consultoría Ambiental Integral',
    image: '/images/service-consulting.jpg',
    description:
      'Diagnósticos ambientales completos, estudios de impacto ambiental (EsIA), evaluaciones de riesgo y planes de manejo ambiental (PMA). Diseñamos estrategias que le permiten operar dentro del marco legal ecuatoriano sin interrupciones ni sorpresas regulatorias. Acompañamos a empresas e instituciones a desarrollar su crecimiento ambiental sustentable alineado con las normas locales e internacionales.',
    features: ['Estudios de Impacto Ambiental', 'Plan de Manejo Ambiental', 'Diagnóstico Ambiental', 'Línea Base Ambiental', 'Evaluación de Riesgos'],
    accent: '#1B7340',
  },
  {
    icon: FileCheck,
    title: 'Gestión de Licencias y Permisos',
    image: '/images/service-advisory.jpg',
    description:
      'Tramitamos y obtenemos licencias ambientales de operación, permisos de descarga, autorizaciones del Ministerio del Ambiente, Agua y Transición Ecológica (MAATE), registro de generadores de residuos y toda la documentación regulatoria que su actividad exige. Gestionamos cada paso del proceso hasta la obtención final del documento.',
    features: ['Licencia Ambiental de Operación', 'Permisos MAATE', 'Registro de Generadores', 'Certificaciones ISO 14001', 'Autorizaciones de Descarga'],
    accent: '#0E8A7D',
  },
  {
    icon: Scale,
    title: 'Normativa y Cumplimiento Legal',
    image: '/images/service-fieldwork.jpg',
    description:
      'Auditorías de cumplimiento ambiental, revisión de normativa vigente, elaboración de protocolos de autocontrol y supervisión, y acompañamiento en procesos de fiscalización. Le aseguramos que su empresa cumple cada requisito antes de que las autoridades lo exigen. Especialidades en seguridad, higiene, salud y normativa ambiental.',
    features: ['Auditorías Ambientales', 'Protocolos de Autocontrol', 'Asesoría Legal Ambiental', 'Prevención de Infracciones', 'Seguridad e Higiene Industrial'],
    accent: '#C49B3C',
  },
  {
    icon: Briefcase,
    title: 'Gestión 360 — Proyectos Contractuales',
    image: '/images/service-construction.jpg',
    description:
      'Administración integral de proyectos ambientales contractuales: desde la planificación y estructuración del contrato hasta la ejecución, seguimiento y cierre. Coordinamos todos los actores, plazos y entregables para que su proyecto cumpla con los estándares ambientales y contractuales sin desviaciones. Ideal para obras civiles, industriales y de infraestructura.',
    features: ['Administración de Proyectos', 'Seguimiento de Entregables', 'Coordinación Multidisciplinaria', 'Cumplimiento Contractual Ambiental', 'Reportes de Avance'],
    accent: '#2D6A4F',
  },
  {
    icon: GraduationCap,
    title: 'Capacitación Profesional',
    image: '/images/service-training.jpg',
    description:
      'Programas de formación y capacitación corporativa en materia ambiental, seguridad, salud ocupacional y normativa vigente. Diseñamos cursos presenciales y virtuales adaptados a las necesidades de su equipo, con contenido práctico y enfocado en el cumplimiento real. Más de 10 años formando profesionales en el sector ambiental ecuatoriano.',
    features: ['Cursos de Normativa Ambiental', 'Capacitación en SST', 'Talleres de Gestión de Desechos', 'Formación en Ingeniería Ambiental', 'Programas Corporativos a Medida'],
    accent: '#7C4A1E',
  },
  {
    icon: Leaf,
    title: 'Ingeniería Ambiental y Desechos',
    image: '/images/service-engineering.jpg',
    description:
      'Soluciones de ingeniería ambiental para el manejo, tratamiento y disposición final de residuos y desechos industriales. Diseñamos sistemas de gestión de residuos, planes de minimización y estrategias de economía circular adaptadas a su proceso productivo. Cumplimiento garantizado con la normativa de desechos peligrosos y no peligrosos del Ecuador.',
    features: ['Gestión de Residuos Industriales', 'Planes de Minimización', 'Economía Circular', 'Manejo de Desechos Peligrosos', 'Tratamiento de Efluentes'],
    accent: '#1B7340',
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

export function ServicesSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Galo, necesito información sobre sus servicios de consultoría ambiental. ¿Podemos conversar?')}`;

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
            <Leaf className="w-4 h-4" />
            Servicios especializados
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Soluciones integrales que protegen
            <span className="text-[#1B7340]"> su operación</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Acompañamos a empresas e instituciones a desarrollar su crecimiento ambiental sustentable alineado con las normas regulatorias locales e internacionales. Cada servicio resuelve un problema real.
          </p>
        </motion.div>

        {/* Service cards - 2 rows of 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="group h-full border-0 transition-all duration-300 rounded-[15px] bg-white" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                {/* Service photo */}
                <div className="w-full flex items-center justify-center bg-white p-[10px]" style={{ maxHeight: '260px', borderRadius: '15px 15px 0 0' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '240px', borderRadius: '12px 12px 0 0' }}
                  />
                </div>
                <CardContent className="p-6 sm:p-8">
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
                    href={whatsappUrl}
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
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1B7340] hover:bg-[#145C33] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5" />
            Hable con Galo Estupiñán — Gerente General
          </a>
        </motion.div>
      </div>
    </section>
  );
}
