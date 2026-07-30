'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const CLIENT_LOGOS = [
  { src: '/images/clients/logo_2.png', alt: 'Cliente Logo 2' },
  { src: '/images/clients/logo_3.png', alt: 'Cliente Logo 3' },
  { src: '/images/clients/logo_4.png', alt: 'Cliente Logo 4' },
  { src: '/images/clients/logo_5.png', alt: 'Cliente Logo 5' },
  { src: '/images/clients/logo_6.png', alt: 'Cliente Logo 6' },
  { src: '/images/clients/logo_7.png', alt: 'Cliente Logo 7' },
  { src: '/images/clients/logo_8.png', alt: 'Cliente Logo 8' },
  { src: '/images/clients/logo_9.png', alt: 'Cliente Logo 9' },
  { src: '/images/clients/logo_10.png', alt: 'Cliente Logo 10' },
  { src: '/images/clients/logo_11.png', alt: 'Cliente Logo 11' },
  { src: '/images/clients/logo_12.png', alt: 'Cliente Logo 12' },
  { src: '/images/clients/logo_13.png', alt: 'Cliente Logo 13' },
  { src: '/images/clients/logo_14_inprofarm.png', alt: 'Inprofarm' },
  { src: '/images/clients/logo_14_reforma.png', alt: 'Reforma' },
  { src: '/images/clients/logo_15.png', alt: 'Cliente Logo 15' },
  { src: '/images/clients/logo_16.png', alt: 'Cliente Logo 16' },
  { src: '/images/clients/logo_17.png', alt: 'Cliente Logo 17' },
  { src: '/images/clients/logo_18.png', alt: 'Cliente Logo 18' },
  { src: '/images/clients/logo_19.png', alt: 'Cliente Logo 19' },
];

export function ClientsSection() {
  return (
    <section id="clientes" className="bg-[#f9f9f9] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Nuestros Clientes
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Empresas e instituciones que confían en nuestra asesoría integral
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 items-center justify-items-center"
        >
          {CLIENT_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-4 sm:p-5 rounded-xl bg-white/70 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={70}
                className="h-12 sm:h-[70px] w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
