import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Şirket Bilgisi */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative w-24 h-24">
                <Image
                  src="/helkonlogo2.png"
                  alt="Helken Tech"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              İşletmenizi geleceğe taşıyan profesyonel B2B teknoloji çözümleri.
              Güvenilir, yenilikçi ve çözüm odaklı yaklaşımımızla yanınızdayız.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="#hizmetler" className="hover:text-blue-400 transition-colors duration-200">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="#hakkimizda" className="hover:text-blue-400 transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#iletisim" className="hover:text-blue-400 transition-colors duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Çözümlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hizmetler" className="hover:text-blue-400 transition-colors duration-200">
                  ERP Yazılımları
                </Link>
              </li>
              <li>
                <Link href="#hizmetler" className="hover:text-blue-400 transition-colors duration-200">
                  Bulut Altyapı
                </Link>
              </li>
              <li>
                <Link href="#hizmetler" className="hover:text-blue-400 transition-colors duration-200">
                  B2B Satış Sistemi
                </Link>
              </li>
              <li>
                <Link href="#hizmetler" className="hover:text-blue-400 transition-colors duration-200">
                  Yazılım Danışmanlığı
                </Link>
              </li>
              <li>
                <Link href="#hizmetler" className="hover:text-blue-400 transition-colors duration-200">
                  Ödeme Sistemi Entegrasyonları
                </Link>
              </li>
              <li>
                <Link href="#hizmetler" className="hover:text-blue-400 transition-colors duration-200">
                  E-Ticaret Çözümleri
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@helkentech.com" className="hover:text-blue-400 transition-colors duration-200">
                  info@helkentech.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+905382947727" className="hover:text-blue-400 transition-colors duration-200">
                  +90 538 294 77 27
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>

            {/* Sosyal Medya */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/helkentech?igsh=OWtjamFtNnBjaGY4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Helken Tech. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

