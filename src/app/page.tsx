import { Metadata } from 'next';
import { 
  Shield, 
  Cloud, 
  Database, 
  Sparkles, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Clock,
  Award,
  Zap,
  CreditCard,
  ShoppingCart
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';
import Link from 'next/link';

// Ana Sayfa SEO Metadata
export const metadata: Metadata = {
  title: 'Helken Tech - ERP, B2B Satış, E-Ticaret ve Ödeme Sistemi Çözümleri',
  description: 'Türkiye\'nin güvenilir B2B teknoloji ortağı Helken Tech. ERP yazılımları, B2B satış sistemi, e-ticaret platformu, ödeme sistemi entegrasyonları ve bulut altyapı hizmetleri. 5+ yıllık tecrübe, 10+ mutlu müşteri.',
  keywords: [
    'B2B teknoloji çözümleri Türkiye',
    'ERP yazılımı İstanbul',
    'B2B satış sistemi',
    'e-ticaret platformu özel',
    'ödeme sistemi entegrasyonu',
    'sanal pos entegrasyonu 3d secure',
    'bulut altyapı yönetimi',
    'sipariş yönetim sistemi',
    'stok yönetim yazılımı',
    'müşteri portali B2B',
    'dijital dönüşüm danışmanlığı',
    'kurumsal yazılım geliştirme',
    'özel yazılım çözümleri'
  ],
  openGraph: {
    title: 'Helken Tech - ERP, B2B Satış, E-Ticaret ve Ödeme Sistemi Çözümleri',
    description: 'ERP, B2B satış, e-ticaret ve ödeme sistemi entegrasyonları ile işletmenizi dijitalleştirin. 5+ yıllık tecrübe.',
    url: 'https://helkentech.com',
    type: 'website',
    images: ['/helkonlogo2.png'],
  },
  alternates: {
    canonical: 'https://helkentech.com',
  },
};

export default function Home() {
  const services = [
    {
      icon: Database,
      title: 'ERP Yazılımları',
      description: 'İşletmenize özel, ölçeklenebilir ve entegre ERP çözümleri ile süreçlerinizi tek platformda yönetin.',
      features: ['Özelleştirilebilir Modüller', 'Gerçek Zamanlı Raporlama', 'Kolay Entegrasyon']
    },
    {
      icon: Cloud,
      title: 'Bulut Altyapı Yönetimi',
      description: 'Modern bulut teknolojileri ile güvenli, hızlı ve ölçeklenebilir altyapı çözümleri sunuyoruz.',
      features: ['7/24 İzleme', 'Otomatik Yedekleme', 'Yüksek Performans']
    },
    {
      icon: Shield,
      title: 'B2B Satış Sistemi',
      description: 'İşletmenizin satış süreçlerini dijitalleştiren, müşteri ilişkilerini güçlendiren kapsamlı B2B satış çözümleri.',
      features: ['Sipariş Yönetimi', 'Müşteri Portali', 'Otomatik Fiyatlandırma']
    },
    {
      icon: Sparkles,
      title: 'Yazılım Danışmanlığı',
      description: 'Deneyimli ekibimiz ile dijital dönüşüm yolculuğunuzda yanınızdayız.',
      features: ['Teknoloji Danışmanlığı', 'Süreç Optimizasyonu', 'Eğitim & Destek']
    },
    {
      icon: CreditCard,
      title: 'Ödeme Sistemi Entegrasyonları',
      description: 'Tüm popüler ödeme sistemlerini işletmenize entegre ediyor, güvenli ve hızlı ödeme altyapısı sağlıyoruz.',
      features: ['Sanal POS Entegrasyonu', '3D Secure', 'Çoklu Ödeme Yöntemleri']
    },
    {
      icon: ShoppingCart,
      title: 'E-Ticaret Çözümleri',
      description: 'Modern ve kullanıcı dostu e-ticaret platformları ile online satışlarınızı artırın.',
      features: ['Özel E-Ticaret Platformu', 'Stok Yönetimi', 'Mobil Uyumlu Tasarım']
    }
  ];

  const whyUs = [
    {
      icon: Users,
      title: '10+ Mutlu Müşteri',
      description: 'Farklı sektörlerden işletmelere hizmet veriyoruz.'
    },
    {
      icon: TrendingUp,
      title: '%150 Verimlilik Artışı',
      description: 'Çözümlerimiz ortalama %150 süreç verimliliği sağlar.'
    },
    {
      icon: Clock,
      title: '7/24 Teknik Destek',
      description: 'Uzman ekibimiz her zaman yanınızda.'
    },
    {
      icon: Award,
      title: '5+ Yıllık Tecrübe',
      description: 'Sektörde kanıtlanmış deneyim ve uzmanlık.'
    }
  ];

  const trustedBy = [
    'Paşa Home Halıcılık'
  ];

  return (
    <>
      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "B2B Teknoloji Çözümleri",
            "provider": {
              "@type": "Organization",
              "name": "Helken Tech"
            },
            "areaServed": "TR",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Teknoloji Hizmetleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ERP Yazılımları"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bulut Altyapı Yönetimi"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-center lg:text-left space-y-6 md:space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Türkiye'nin Güvenilir B2B Teknoloji Ortağı</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                İşletmenizi <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Geleceğe</span> Taşıyan Teknoloji Çözümleri
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Helken Tech ile dijital dönüşümü hızlandırın. Özelleştirilmiş ERP sistemleri, 
                güvenli bulut altyapısı ve siber güvenlik çözümleriyle rekabette öne çıkın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#demo"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 text-center"
                >
                  Ücretsiz Demo Talep Et
                </a>
                <a
                  href="#hizmetler"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-200 text-center"
                >
                  Çözümlerimizi Keşfedin
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">ISO 27001 Sertifikalı</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">100+ Aktif Proje</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">7/24 Destek</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Database className="w-24 h-24 text-blue-600 mx-auto" />
                    <p className="text-gray-700 font-semibold text-xl">Modern Teknoloji</p>
                    <p className="text-gray-500">Geleceğin Çözümleri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="referanslar" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 font-medium mb-8">Bize Güvenen Firmalar</p>
          <div className="flex justify-center">
            {trustedBy.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-white px-12 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-gray-700 font-semibold text-lg">{company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-16 md:py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kapsamlı Teknoloji Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600">
              İşletmenizin her ihtiyacına yönelik profesyonel ve ölçeklenebilir çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#demo"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Hizmetlerimiz Hakkında Bilgi Alın
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="hakkimizda" className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Helken Tech?
            </h2>
            <p className="text-lg text-gray-600">
              Müşterilerimizin dijital dönüşüm yolculuğunda tercih edilen çözüm ortağıyız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Dijital Dönüşüm Yolculuğunuza Bugün Başlayın
          </h2>
          <p className="text-xl text-blue-50">
            Uzman ekibimiz, işletmeniz için en uygun çözümü oluşturmaya hazır.
          </p>
          <a
            href="#demo"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            Hemen İletişime Geçin
          </a>
        </div>
      </section>

      {/* Contact / Demo Form Section */}
      <section id="demo" className="py-16 md:py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ücretsiz Demo Talep Edin
            </h2>
            <p className="text-lg text-gray-600">
              Formu doldurun, uzman ekibimiz 24 saat içinde sizinle iletişime geçsin.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 md:p-12 rounded-2xl shadow-xl">
            <DemoForm />
          </div>

          {/* Alternate Contact */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-gray-600">veya doğrudan bizimle iletişime geçin:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700">
              <a href="mailto:info@helkentech.com" className="hover:text-blue-600 transition-colors">
                info@helkentech.com
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="tel:+905382947727" className="hover:text-blue-600 transition-colors">
                +90 538 294 77 27
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
