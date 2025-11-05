import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Ana SEO Metadata - Tüm sayfalarda geçerli
export const metadata: Metadata = {
  metadataBase: new URL('https://helkentech.com'),
  title: {
    default: 'Helken Tech - B2B Teknoloji Çözümleri | ERP, E-Ticaret, Ödeme Sistemleri',
    template: '%s | Helken Tech'
  },
  description: 'Helken Tech ile işletmenizi dijitalleştirin. ERP yazılımları, B2B satış sistemi, e-ticaret çözümleri, ödeme sistemi entegrasyonları ve bulut altyapı yönetimi. 5+ yıllık tecrübe ile Türkiye genelinde hizmet.',
  keywords: [
    'B2B teknoloji çözümleri',
    'ERP yazılımı',
    'B2B satış sistemi',
    'e-ticaret çözümleri',
    'ödeme sistemi entegrasyonu',
    'sanal pos entegrasyonu',
    'bulut altyapı yönetimi',
    'yazılım danışmanlığı',
    'kurumsal yazılım',
    'dijital dönüşüm',
    'Türkiye ERP',
    'B2B e-ticaret platformu',
    'özel yazılım geliştirme',
    'stok yönetim sistemi',
    'sipariş yönetim sistemi'
  ],
  authors: [{ name: 'Helken Tech' }],
  creator: 'Helken Tech',
  publisher: 'Helken Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
  ],
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://helkentech.com',
    title: 'Helken Tech - B2B Teknoloji Çözümleri | ERP, E-Ticaret, Ödeme Sistemleri',
    description: 'ERP yazılımları, B2B satış sistemi, e-ticaret çözümleri ve ödeme sistemi entegrasyonları. 5+ yıllık tecrübe ile işletmenizi dijitalleştirin.',
    siteName: 'Helken Tech',
    images: [
      {
        url: '/helkonlogo2.png',
        width: 1200,
        height: 630,
        alt: 'Helken Tech - B2B Teknoloji Çözümleri',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helken Tech - B2B Teknoloji Çözümleri',
    description: 'ERP, B2B satış, e-ticaret ve ödeme sistemi çözümleri ile işletmenizi dijitalleştirin.',
    images: ['/helkonlogo2.png'],
  },
  alternates: {
    canonical: 'https://helkentech.com',
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console'dan alacağınız kod
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SLHN4EZTZY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SLHN4EZTZY');
            `,
          }}
        />
        {/* Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Helken Tech",
              "url": "https://helkentech.com",
              "logo": "https://helkentech.com/logo.png",
              "description": "B2B teknoloji çözümleri ve yazılım danışmanlığı",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "info@helkentech.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/helkentech",
                "https://twitter.com/helkentech"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
