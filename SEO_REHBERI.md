# Helken Tech SEO Optimizasyon Rehberi

## ✅ Tamamlanan İyileştirmeler

### 1. Teknik SEO
- [x] sitemap.xml oluşturuldu
- [x] robots.txt eklendi
- [x] Meta tags optimize edildi
- [x] Open Graph tags eklendi
- [x] Twitter Cards eklendi
- [x] Schema.org markup (Organization + Service)
- [x] Canonical URL'ler
- [x] Alt textler optimize edildi

### 2. İçerik SEO
- [x] Blog sistemi kuruldu (`/blog`)
- [x] 6 adet SEO-optimized blog yazısı planlandı
- [x] Anahtar kelime yoğunluğu optimize edildi
- [x] Başlık yapısı (H1, H2, H3) düzenlendi

### 3. Sosyal Medya
- [x] Open Graph images
- [x] Share butonları (Twitter, LinkedIn)
- [x] Instagram entegrasyonu

---

## 🎯 Yapılacaklar Listesi

### 1. Google Search Console Kurulumu

#### Adım 1: Hesap Oluşturma
1. https://search.google.com/search-console adresine gidin
2. "Özellik Ekle" → "URL öneki" seçin
3. `https://helkentech.com` girin

#### Adım 2: Doğrulama
**HTML Dosyası Yöntemi (Önerilen):**
```bash
# Google'ın verdiği dosyayı public klasörüne ekleyin
# Örnek: google1234567890abcdef.html

# Public klasörüne kopyalayın
cp google*.html public/

# Git'e ekleyin
git add public/google*.html
git commit -m "Google Search Console doğrulama"
git push origin master
```

#### Adım 3: Sitemap Submit
1. Sol menü → "Sitemap"
2. Yeni sitemap: `sitemap.xml`
3. "Gönder" butonuna tıklayın
4. ✅ İşlem tamamlandı!

---

### 2. Google Analytics Kurulumu

#### Adım 1: Analytics Hesabı
1. https://analytics.google.com adresine gidin
2. "Ölçmeye başlayın"
3. Hesap adı: "Helken Tech"
4. Özellik adı: "Helken Tech Website"
5. Measurement ID alın (G-XXXXXXXXXX)

#### Adım 2: Koda Ekleyin
`src/app/layout.tsx` dosyasında `<head>` bölümüne ekleyin:

```tsx
<head>
  {/* Google Analytics */}
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  />
  <script
    dangerouslySetInnerHTML={{
      __html: \`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      \`,
    }}
  />
  ...
</head>
```

---

### 3. Backlink Stratejisi

#### A. Google My Business (Kritik!)
1. https://business.google.com
2. İşletme bilgilerini ekleyin
3. Adres, telefon, website
4. Logo ve fotoğraflar ekleyin
5. Müşteri yorumları toplayın

#### B. İş Dizinleri
- [ ] 11880.com.tr
- [ ] rehber.11880.com.tr
- [ ] telefonara.com
- [ ] YandexHaritalar

#### C. Sosyal Medya Profilleri
- [ ] LinkedIn Company Page oluşturun
- [ ] Twitter/X profili tamamlayın
- [x] Instagram profili (mevcut)
- [ ] Facebook Business Page

#### D. Sektörel Dizinler
- [ ] Sahibinden.com İlan
- [ ] Hürriyet Emlak (teknoloji kategorisi)
- [ ] Letgo Kurumsal

#### E. Forum ve Topluluk
- [ ] Ekşi Sözlük - ERP entry'leri
- [ ] Webmaster Forum - imza
- [ ] ShiftDelete Forum - teknoloji

#### F. İçerik Platformları
- [ ] Medium.com profili oluşturun
- [ ] Dev.to profili
- [ ] Blogger.com
- [ ] WordPress.com

---

### 4. Blog İçerikleri (Hazır şablonlar oluşturuldu)

#### Öncelikli Yazılar:
1. ✅ "ERP Nedir? İşletmelere Sağladığı 10 Önemli Fayda"
2. "B2B Satış Sistemi: İşletmeler İçin Neden Gerekli?"
3. "E-Ticaret Sitesi Açmak İçin Gerekenler"
4. "Ödeme Sistemi Entegrasyonu: Sanal POS ve 3D Secure"
5. "KOBİ'ler İçin Dijital Dönüşüm Rehberi 2025"
6. "Bulut Altyapı: İşletmeler İçin 7 Büyük Avantaj"

#### İçerik Takvimi (Önerilen):
- Haftada 1 blog yazısı
- Sosyal medyada paylaşım
- Newsletter (gelecekte)

---

### 5. Sayfa Hızı Optimizasyonu

#### Kontrol Araçları:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

#### Yapılacaklar:
- [x] Next.js kullanımı (zaten mevcut)
- [x] Image optimization (Next/Image)
- [ ] CDN kullanımı (Vercel zaten CDN)
- [ ] Lazy loading
- [ ] Font optimization

---

### 6. Anahtar Kelime Stratejisi

#### Primary Keywords (Ana Anahtar Kelimeler):
- ERP yazılımı
- B2B satış sistemi
- E-ticaret çözümleri
- Ödeme sistemi entegrasyonu

#### Secondary Keywords:
- Kurumsal yazılım
- Dijital dönüşüm
- Bulut altyapı
- Stok yönetim sistemi

#### Long-tail Keywords:
- "ERP yazılımı Türkiye"
- "B2B e-ticaret platformu özel"
- "Sanal POS entegrasyonu 3D secure"
- "Özel yazılım geliştirme İstanbul"

---

### 7. Lokal SEO (İstanbul)

- [ ] Google My Business optimize edin
- [ ] "İstanbul" kelimesini içerik에 ekleyin
- [ ] Yerel dizinlerde kayıt olun
- [ ] Müşteri yorumları toplayın

---

### 8. Link Building Stratejileri

#### Guest Posting:
- Teknoloji bloglarına yazılar yazın
- Sektörel dergilere katkı sağlayın

#### Press Release:
- Yeni özellik duyuruları
- Müşteri başarı hikayeleri

#### Rekabetçi Analiz:
- Rakiplerin backlinklerini inceleyin
- Ahrefs / SEMrush kullanın

---

## 📊 Takip Edilecek Metrikler

### Google Search Console:
- İzlenim sayısı
- Tıklama oranı (CTR)
- Ortalama konum
- Hata sayısı

### Google Analytics:
- Ziyaretçi sayısı
- Bounce rate
- Sayfa başına süre
- Dönüşüm oranı

### Hedefler (3 Aylık):
- 1000+ organik ziyaret/ay
- 50+ backlink
- İlk sayfada 10+ anahtar kelime

---

## 🎓 Kaynaklar

- Google Search Central: https://developers.google.com/search
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo
- Ahrefs Blog: https://ahrefs.com/blog
- Backlinko: https://backlinko.com

---

## 📞 Destek

Sorularınız için: info@helkentech.com

