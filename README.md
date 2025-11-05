# 🚀 Helken Tech - B2B Teknoloji Çözümleri Web Sitesi

Modern, mobil öncelikli ve SEO optimize edilmiş B2B teknoloji firması web sitesi.

## ✨ Özellikler

### 🎨 Tasarım ve UX
- **Mobil Öncelikli (Mobile-First)**: Her ekran boyutunda mükemmel görünüm
- **Responsive Design**: Mobil, tablet ve masaüstü için optimize edilmiş
- **Modern UI/UX**: Temiz, minimalist ve profesyonel tasarım
- **Smooth Animations**: Kullanıcı deneyimini zenginleştiren animasyonlar
- **Accessibility**: WCAG standartlarına uygun erişilebilirlik

### 🔍 SEO Optimizasyonu
- **Static Site Generation (SSG)**: Maksimum performans ve taranabilirlik
- **Meta Tags**: Her sayfa için optimize edilmiş metadata
- **Schema Markup**: Organization ve Service yapılandırılmış verileri
- **Semantic HTML5**: SEO dostu anlamsal etiketler
- **Open Graph**: Sosyal medya paylaşımları için optimize edilmiş
- **Canonical URLs**: Duplicate content önleme

### 🛠️ Teknik Özellikler
- **Next.js 15+**: Modern React framework (App Router)
- **TypeScript**: Tip güvenli kod
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern, hafif ikon kütüphanesi
- **Google Fonts (Inter)**: Optimize edilmiş font yükleme

### 📱 Bileşenler
- **Navbar**: Sticky navigation, hamburger menü (mobil)
- **Hero Section**: Etkileyici açılış bölümü
- **Services**: Hizmetleri sergileyen kart yapısı
- **Why Choose Us**: Farklılaşma vurgulayan bölüm
- **Demo Form**: Validasyonlu iletişim formu
- **Footer**: Kapsamlı site haritası ve iletişim bilgileri

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18.17 veya üzeri
- npm veya yarn

### Kurulum

1. Bağımlılıkları yükleyin:
\`\`\`bash
npm install
\`\`\`

2. Geliştirme sunucusunu başlatın:
\`\`\`bash
npm run dev
\`\`\`

3. Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

### Production Build

\`\`\`bash
# Build oluştur
npm run build

# Production sunucusunu başlat
npm run start
\`\`\`

## 📁 Proje Yapısı

\`\`\`
helkentech/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Ana layout ve SEO metadata
│   │   ├── page.tsx             # Ana sayfa
│   │   └── globals.css          # Global stiller
│   └── components/
│       ├── Navbar.tsx           # Navigasyon bileşeni
│       ├── Footer.tsx           # Footer bileşeni
│       └── DemoForm.tsx         # Demo talep formu
├── public/                      # Statik dosyalar
├── tailwind.config.ts           # Tailwind yapılandırması
├── next.config.ts               # Next.js yapılandırması
└── package.json
\`\`\`

## 🎨 Renk Paleti

- **Ana Mavi**: `#2563EB` (blue-600)
- **Cyan**: `#06B6D4` (cyan-500)
- **Gri**: `#111827` (gray-900)
- **Açık Gri**: `#6B7280` (gray-500)
- **Beyaz**: `#FFFFFF`

## 📝 Özelleştirme

### 1. Firma Bilgilerini Güncelleme

\`src/app/layout.tsx\` dosyasında metadata'yı güncelleyin:
\`\`\`typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://sizindomain.com'), // Buraya kendi domain'inizi yazın
  // ... diğer ayarlar
}
\`\`\`

### 2. İletişim Bilgileri

\`src/components/Footer.tsx\` ve \`src/components/DemoForm.tsx\` dosyalarındaki e-posta, telefon ve adres bilgilerini güncelleyin.

### 3. Sosyal Medya Linkleri

\`src/components/Footer.tsx\` dosyasında sosyal medya linklerini kendi hesaplarınızla değiştirin.

### 4. Google Search Console Doğrulama

\`src/app/layout.tsx\` dosyasında:
\`\`\`typescript
verification: {
  google: 'your-google-verification-code', // Google Search Console kodunuzu buraya
}
\`\`\`

### 5. Demo Form API Entegrasyonu

\`src/components/DemoForm.tsx\` dosyasındaki \`handleSubmit\` fonksiyonunda kendi API endpoint'inizi ekleyin:
\`\`\`typescript
await fetch('/api/demo-request', { 
  method: 'POST', 
  body: JSON.stringify(formData) 
})
\`\`\`

## 🚢 Deployment (Vercel)

### Vercel'e Deploy Etme

1. GitHub reposunu Vercel'e bağlayın
2. Otomatik build ve deploy başlayacak
3. Domain ayarlarınızı yapın

### Ortam Değişkenleri

Eğer form veya analytics için API key'lere ihtiyacınız varsa, Vercel dashboard'da Environment Variables ekleyin.

## 📊 SEO Kontrol Listesi

- ✅ Semantic HTML5 kullanımı
- ✅ Meta description ve title her sayfada
- ✅ Open Graph tags
- ✅ Schema.org yapılandırılmış verileri
- ✅ Canonical URLs
- ✅ Alt text'ler (görsel eklendiğinde)
- ✅ Robots.txt (Next.js otomatik oluşturur)
- ✅ Sitemap.xml (Next.js otomatik oluşturur)
- ✅ Mobile-friendly design
- ✅ Fast page load (Next.js optimizasyonları)

## 🔧 Geliştirme Araçları

\`\`\`bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit

# Format check
npx prettier --check .
\`\`\`

## 📈 Performans İpuçları

- **Image Optimization**: Next.js Image component kullanın
- **Font Optimization**: `next/font` ile font'ları optimize edin
- **Code Splitting**: Next.js otomatik yapar
- **Lazy Loading**: Gerekli bileşenleri lazy load edin

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (\`git checkout -b feature/amazing-feature\`)
3. Commit yapın (\`git commit -m 'feat: Add amazing feature'\`)
4. Push edin (\`git push origin feature/amazing-feature\`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 Destek

Sorularınız için: info@helkentech.com

---

**Helken Tech** tarafından ❤️ ile geliştirilmiştir.
