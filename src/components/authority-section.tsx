'use client';

import { ShieldCheck, Award, Users, TrendingUp, Clock, CheckCircle2, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    value: '10+',
    label: 'Años de experiencia',
    description: 'Más de una década siendo líderes en consultoría ambiental para empresas y capacitación corporativa en Ecuador.',
  },
  {
    icon: Award,
    value: '200+',
    label: 'Proyectos exitosos',
    description: 'Cada proyecto completado representa una empresa que opera dentro del marco legal y con tranquilidad regulatoria.',
  },
  {
    icon: Users,
    value: '100%',
    label: 'Cumplimiento normativo',
    description: 'Nuestros clientes obtienen y mantienen sus licencias y permisos ambientales sin observaciones ni retrasos.',
  },
  {
    icon: TrendingUp,
    value: '2h',
    label: 'Tiempo de respuesta',
    description: 'Respuesta garantizada en menos de 2 horas. Sabemos que su tiempo es valioso y las urgencias ambientales no esperan.',
  },
];

const SPECIALTIES = [
  'Ambiental',
  'Higiene Industrial',
  'Salud Ocupacional',
  'Normativa Ambiental',
  'Medio Ambiente',
  'Seguridad Industrial',
  'Manufactura',
  'Gestión de Desechos',
  'Capacitación',
  'Ingeniería Ambiental',
];

const CLIENT_TYPES = [
  'Industria manufacturera',
  'Minería y recursos naturales',
  'Construcción e infraestructura',
  'Agroindustria',
  'Sector petrolero y energético',
  'Gobierno y entidades públicas',
];

const DIFFERENTIATORS = [
  {
    icon: CheckCircle2,
    title: 'Acompañamiento directo del Gerente',
    text: 'Galo Estupiñán Vera supervisa personalmente cada proyecto. No hay intermediarios ni dilaciones.',
  },
  {
    icon: Clock,
    title: 'Cumplimiento garantizado de plazos',
    text: 'Sabemos que los tiempos regulatorios son críticos. Entregamos siempre dentro del cronograma acordado.',
  },
  {
    icon: ShieldCheck,
    title: 'Conocimiento profundo del MAATE',
    text: 'Años de relación con el Ministerio del Ambiente nos permiten anticipar requisitos y evitar observaciones.',
  },
  {
    icon: Globe,
    title: 'Normas locales e internacionales',
    text: 'Alineamos su operación con las normas regulatorias locales e internacionales para un cumplimiento integral.',
  },
];

export function AuthoritySection() {
  return (
    <section id="autoridad" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#C49B3C]/15 px-4 py-2 rounded-full text-[#C49B3C] text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Confianza comprobada
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            +10 años siendo líderes en consultoría
            <span className="text-[#1B7340]"> y capacitación</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Nuestro historial de cumplimiento y satisfacción es la mejor garantía de que su empresa está en las manos correctas.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B7340]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1B7340]/15 transition-colors">
                <item.icon className="w-6 h-6 text-[#1B7340]" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-[#1B7340]">{item.value}</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">{item.label}</p>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed hidden sm:block">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Two-column: Specialties + Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Especialidades
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Nuestro equipo abarca todas las áreas críticas de la gestión ambiental, seguridad y salud ocupacional en Ecuador.
            </p>
            <div className="flex flex-wrap gap-2">
              {SPECIALTIES.map((specialty) => (
                <span
                  key={specialty}
                  className="inline-flex items-center gap-1.5 bg-[#1B7340]/8 text-[#1B7340] px-3 py-1.5 rounded-full text-sm font-medium border border-[#1B7340]/15"
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {specialty}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sectors we serve */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Sectores que atendemos
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Trabajamos con empresas de todos los tamaños y sectores en Ecuador que necesitan cumplir con la normativa ambiental vigente.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {CLIENT_TYPES.map((client) => (
                <div key={client} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E8A7D] flex-shrink-0" />
                  {client}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Differentiators with team photo */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Team photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full min-h-[300px]">
              <Image
                src="/images/authority-team.jpg"
                alt="Equipo Ambimag - Participación en Héroes del Comercio, Cámara de Comercio de Guayaquil"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">Galo Estupiñán Vera</p>
                <p className="text-white/70 text-xs">Gerente General — Ambimag Ecuador</p>
              </div>
            </div>
          </motion.div>

          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              ¿Por qué elegir Ambimag?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Nos diferenciamos por la cercanía, la agilidad y el compromiso real con el resultado de cada proyecto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {DIFFERENTIATORS.map((item) => (
                <div key={item.title} className="flex gap-3 sm:gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1B7340]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-[#1B7340]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400"
        >
          <MapPin className="w-4 h-4" />
          Sede principal: Guayaquil, Guayas — Ecuador
        </motion.div>
      </div>
    </section>
  );
}
