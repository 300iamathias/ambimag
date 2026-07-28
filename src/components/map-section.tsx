'use client';

import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export function MapSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#1B7340]/10 px-4 py-2 rounded-full text-[#1B7340] text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Ubicación
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Visítenos en
            <span className="text-[#1B7340]"> Guayaquil</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Estamos ubicados en Carchi 609 y 1ro. de Mayo, junto a la parada de Metrovía "Universidad Estatal". Atendemos presencial y virtualmente a empresas de todo el país.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[350px] sm:h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7!2d-79.9334!3d-2.1847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6c4b5e6e5e5e%3A0x1a2b3c4d5e6f7a8b!2sCarchi%20609%20y%201ro.%20de%20Mayo%2C%20Guayaquil%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Ambimag - Carchi 609 y 1ro. de Mayo, Guayaquil, Ecuador"
              />
            </div>
          </motion.div>

          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Location card */}
            <div className="bg-gradient-to-br from-[#1B7340] to-[#145C33] rounded-xl p-6 text-white shadow-lg flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">Oficina Central</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                <strong className="text-white">Carchi 609 y 1ro. de Mayo</strong><br />
                Junto a Metrovía "Universidad Estatal"<br />
                Guayaquil, Guayas — Ecuador
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <div>
                    <p className="text-white/60 text-xs">WhatsApp</p>
                    <p className="text-white font-semibold text-sm">+593 99 467 0519</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <Clock className="w-4 h-4 text-[#C49B3C]" />
                  <div>
                    <p className="text-white/60 text-xs">Horario</p>
                    <p className="text-white font-semibold text-sm">Lun-Vie: 8:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get directions button */}
            <a
              href="https://www.google.com/maps/dir//Carchi+609+y+1ro+de+Mayo,+Guayaquil,+Ecuador"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#1B7340] border-2 border-[#1B7340] px-6 py-4 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Navigation className="w-4 h-4" />
              Cómo llegar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
