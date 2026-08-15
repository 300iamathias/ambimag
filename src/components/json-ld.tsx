// JSON-LD Structured Data for Ambimag - SEO Schema.org
// This helps Google understand the business and show rich results

const SITE_URL = "https://ambimag.com.ec";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ambimag Cía. Ltda.",
    alternateName: "Ambimag Ecuador",
    description:
      "Consultoría y asesoría integral en Calidad, Seguridad y Medio Ambiente. Licencias, permisos, gestión normativa y capacitación profesional en Guayaquil, Ecuador.",
    url: SITE_URL,
    logo: `${SITE_URL}/ambimag-logo.png`,
    image: `${SITE_URL}/ambimag-logo.png`,
    telephone: "+593994670519",
    email: "gestupinan@consultorambimag.com.ec",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carchi 609 y 1ro. de Mayo",
      addressLocality: "Guayaquil",
      addressRegion: "Guayas",
      addressCountry: "EC",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -2.1894,
      longitude: -79.8891,
    },
    areaServed: {
      "@type": "Country",
      name: "Ecuador",
    },
    serviceType: [
      "Consultoría Ambiental Integral",
      "BPM / BPADT",
      "Gestión de Calidad / BASC",
      "Seguridad y Salud Ocupacional",
      "Gestión 360 / Proyectos Contractuales",
      "Capacitación y Asesoría",
      "Gestión Ambiental",
      "Seguridad Alimentaria",
      "Sistema de Gestión de Talento Humano",
      "Asesoría Jurídica",
    ],
    sameAs: [
      "https://www.instagram.com/ambimag.ec/",
      "https://ec.linkedin.com/company/ambimag",
      "https://www.facebook.com/ambimag.ec/",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ambimag | Consultoría y Asesoría Integral en Ecuador",
    url: SITE_URL,
    description:
      "Acompañamos a empresas e instituciones a desarrollar su crecimiento alineado con las normas regulatorias locales e internacionales en Calidad, Seguridad y Medio Ambiente.",
    inLanguage: "es-EC",
    publisher: {
      "@type": "Organization",
      name: "Ambimag Cía. Ltda.",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLd() {
  return (
    <>
      <LocalBusinessSchema />
      <WebSiteSchema />
    </>
  );
}
