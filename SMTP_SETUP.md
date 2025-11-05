# 📧 SMTP Email Yapılandırma Rehberi

Demo formundan gelen taleplerin `info@helkentech.com` adresine gönderilmesi için SMTP kullanıyoruz.

## 🎯 Hangi SMTP Servisini Kullanmalıyım?

### 1️⃣ Gmail (En Popüler - Ücretsiz)
- ✅ Ücretsiz
- ✅ Güvenilir
- ✅ Kolay kurulum
- ❌ Günde 500 email limiti
- ❌ Uygulama şifresi gerekli

### 2️⃣ Outlook/Hotmail (Microsoft)
- ✅ Ücretsiz
- ✅ Güvenilir
- ❌ Günde 300 email limiti

### 3️⃣ Yandex Mail
- ✅ Ücretsiz
- ✅ Limit yüksek
- ❌ Türkiye'de daha az bilinen

### 4️⃣ Kendi Domain Email'iniz (Önerilen)
- ✅ Profesyonel görünüm
- ✅ Marka imajı
- ✅ Yüksek limitler
- ❌ Ücretli (genellikle hosting ile gelir)

---

## 🚀 Gmail Kurulumu (En Popüler)

### Adım 1: 2 Adımlı Doğrulama Aktif Et

1. Google Hesabınıza gidin: https://myaccount.google.com/
2. Sol menüden **"Güvenlik"** seçin
3. **"2 Adımlı Doğrulama"** bölümünü bulun
4. Aktif değilse **aktif edin**

### Adım 2: Uygulama Şifresi Oluştur

1. Bu linke gidin: https://myaccount.google.com/apppasswords
2. **"Uygulama seç"** → **"Diğer (Özel ad)"** seçin
3. İsim yazın: "Helken Tech Web Site"
4. **"Oluştur"** butonuna tıklayın
5. Karşınıza çıkan **16 haneli şifreyi kopyalayın** (örn: `abcd efgh ijkl mnop`)

### Adım 3: .env.local Dosyasını Düzenle

Proje kök dizinindeki `.env.local` dosyasını açın ve şu değerleri girin:

\`\`\`bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=sizin-email@gmail.com
SMTP_PASS=abcdefghijklmnop  # 16 haneli uygulama şifresi (boşluksuz)
SMTP_FROM=sizin-email@gmail.com
\`\`\`

### Adım 4: Hedef Email Adresini Güncelle

\`src/app/api/demo-request/route.ts\` dosyasında:

\`\`\`typescript
to: 'info@helkentech.com', // Gerçek email adresinizi buraya
\`\`\`

### Adım 5: Sunucuyu Yeniden Başlat

\`\`\`bash
npm run dev
\`\`\`

---

## 📮 Outlook/Hotmail Kurulumu

### .env.local Ayarları:

\`\`\`bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=sizin-email@outlook.com
SMTP_PASS=hesap-sifreniz
SMTP_FROM=sizin-email@outlook.com
\`\`\`

**Not:** Outlook uygulama şifresi gerektirmez, direkt hesap şifrenizi kullanabilirsiniz.

---

## 📬 Yandex Mail Kurulumu

### .env.local Ayarları:

\`\`\`bash
SMTP_HOST=smtp.yandex.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=sizin-email@yandex.com
SMTP_PASS=hesap-sifreniz
SMTP_FROM=sizin-email@yandex.com
\`\`\`

---

## 🏢 Kendi Domain Email Kurulumu (cPanel, Plesk, vs.)

### SMTP Bilgilerini Öğrenme:

1. Hosting kontrol panelinize (cPanel/Plesk) giriş yapın
2. **Email Hesapları** bölümüne gidin
3. **SMTP Ayarları** veya **Mail Server Ayarları** bulun
4. Genellikle şu formattadır:
   - **SMTP Host:** `mail.yourdomain.com` veya `smtp.yourdomain.com`
   - **Port:** 587 (TLS) veya 465 (SSL)

### .env.local Ayarları:

\`\`\`bash
SMTP_HOST=mail.sirketiniz.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=demo@sirketiniz.com
SMTP_PASS=email-sifreniz
SMTP_FROM=demo@sirketiniz.com
\`\`\`

---

## 🧪 Test Etme

### 1. Geliştirme Ortamında Test

\`\`\`bash
npm run dev
\`\`\`

1. http://localhost:3000 adresine gidin
2. Demo formunu doldurun
3. Gönder butonuna tıklayın
4. Email'i kontrol edin (spam klasörüne de bakın!)

### 2. Console Logları Kontrol

Terminal'de şu mesajı görmeli:
\`\`\`
✅ Email başarıyla gönderildi: <message-id>
\`\`\`

Hata varsa:
\`\`\`
❌ Email gönderme hatası: [hata mesajı]
\`\`\`

---

## 🚢 Production (Vercel) Kurulumu

### 1. Vercel Dashboard'a Git

1. Projenizi seçin
2. **Settings** → **Environment Variables**

### 2. Environment Variables Ekle

Her bir değişkeni ayrı ayrı ekleyin:

| Key | Value | Environment |
|-----|-------|-------------|
| \`SMTP_HOST\` | \`smtp.gmail.com\` | Production, Preview, Development |
| \`SMTP_PORT\` | \`587\` | Production, Preview, Development |
| \`SMTP_SECURE\` | \`false\` | Production, Preview, Development |
| \`SMTP_USER\` | \`sizin-email@gmail.com\` | Production, Preview, Development |
| \`SMTP_PASS\` | \`your-app-password\` | Production, Preview, Development |
| \`SMTP_FROM\` | \`sizin-email@gmail.com\` | Production, Preview, Development |

### 3. Redeploy

Environment variables ekledikten sonra projeyi **yeniden deploy** edin.

---

## ⚠️ Önemli Güvenlik Notları

### ❌ YAPMAYIN:

- **ASLA** SMTP şifrenizi GitHub'a commit etmeyin
- \`.env.local\` dosyası \`.gitignore\` içinde olmalı
- Şifrelerinizi public repo'larda paylaşmayın

### ✅ YAPIN:

- Güçlü şifreler kullanın
- Gmail için **uygulama şifresi** kullanın (asıl şifrenizi değil)
- Production'da **environment variables** kullanın
- SMTP bilgilerini güvende tutun

---

## 🔧 Sorun Giderme

### Sorun: "Invalid login" hatası

**Çözüm:**
- Gmail: Uygulama şifresi kullanıyor musunuz?
- 2 Adımlı Doğrulama aktif mi?
- Şifrede boşluk var mı? (Boşlukları silin)

### Sorun: "Connection timeout"

**Çözüm:**
- Port numarasını kontrol edin (587 veya 465)
- \`SMTP_SECURE\` değerini kontrol edin
- Firewall SMTP portlarını engelliyor olabilir

### Sorun: Email gelmiyor

**Çözüm:**
- Spam klasörünü kontrol edin
- \`to:\` adresi doğru mu?
- Console'da "✅ Email gönderildi" mesajını görüyor musunuz?
- Email sağlayıcınızın günlük limitini aştınız mı?

### Sorun: "Self signed certificate" hatası

**Çözüm:**
\`src/app/api/demo-request/route.ts\` içinde transportera ekleyin:
\`\`\`typescript
const transporter = nodemailer.createTransport({
  // ... diğer ayarlar
  tls: {
    rejectUnauthorized: false
  }
});
\`\`\`

---

## 📊 SMTP Servis Karşılaştırması

| Servis | Günlük Limit | Güvenlik | Kurulum | Maliyet |
|--------|--------------|----------|---------|---------|
| Gmail | 500 email | ⭐⭐⭐⭐⭐ | Kolay | Ücretsiz |
| Outlook | 300 email | ⭐⭐⭐⭐ | Kolay | Ücretsiz |
| Yandex | 1000 email | ⭐⭐⭐⭐ | Kolay | Ücretsiz |
| Kendi Domain | Değişken | ⭐⭐⭐⭐⭐ | Orta | Ücretli |

---

## 🎯 Önerilen Kurulum (Production İçin)

### Geliştirme: Gmail
- Hızlı kurulum
- Test için ideal

### Production: Kendi Domain Email
- Profesyonel görünüm
- \`demo@helkentech.com\` gibi
- Güvenilirlik artırır
- Spam filtresinden daha az etkilenir

---

## 📞 Destek

Sorun yaşıyorsanız:
1. Console loglarını kontrol edin
2. \`.env.local\` dosyasını gözden geçirin
3. SMTP bilgilerinizi doğrulayın
4. Güvenlik duvarı ayarlarını kontrol edin

**Test Email Gönderimi:**

Formu doldurmadan önce SMTP ayarlarınızı test etmek için:
\`\`\`bash
# Test script'i çalıştırın (opsiyonel)
node -e "console.log(process.env.SMTP_USER)"
\`\`\`

---

✅ **Kurulum tamamlandı! Demo formu artık SMTP üzerinden email gönderiyor.**

