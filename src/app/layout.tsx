import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B7340",
};

const SITE_URL = "https://ambimag.com.ec";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ambimag | Consultoría y Asesoría Integral en Ecuador",
  description:
    "Acompañamos a empresas e instituciones a desarrollar su crecimiento alineado con las normas regulatorias locales e internacionales en Calidad, Seguridad y Medio Ambiente. Consultoría y asesoría integral, Gestión 360, Capacitación Profesional. Guayaquil, Ecuador.",
  keywords: [
    "consultoría y asesoría Ecuador",
    "licencias y permisos",
    "gestión normativa",
    "Ambimag",
    "calidad",
    "consultoría integral",
    "Ecuador",
    "estudios ambientales",
    "SST",
    "capacitación profesional",
    "gestión 360 proyectos contractuales",
    "gestión de calidad",
    "higiene industrial",
    "seguridad industrial",
    "gestión de desechos",
    "Guayaquil",
  ],
  authors: [{ name: "Ambimag Cía. Ltda." }],
  creator: "Ambimag Cía. Ltda.",
  publisher: "Ambimag Cía. Ltda.",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ambimag",
  },
  openGraph: {
    title: "Ambimag | Consultoría y Asesoría Integral en Ecuador",
    description:
      "Acompañamos a empresas e instituciones a desarrollar su crecimiento en Calidad, Seguridad y Medio Ambiente.",
    url: SITE_URL,
    siteName: "Ambimag",
    type: "website",
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambimag | Consultoría y Asesoría Integral en Ecuador",
    description:
      "Acompañamos a empresas e instituciones a desarrollar su crecimiento en Calidad, Seguridad y Medio Ambiente.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Ambimag" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <JsonLd />
        {children}
        <Toaster />
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('SW registrado:', registration.scope);
                    },
                    function(err) {
                      console.log('SW error:', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
