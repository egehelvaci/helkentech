# Google Analytics Kurulum Rehberi

## Adım 1: Google Analytics Hesabı Oluşturun

1. https://analytics.google.com adresine gidin
2. "Ölçmeye Başla" butonuna tıklayın
3. Hesap bilgilerini doldurun:
   - Hesap adı: "Helken Tech"
   - Özellik adı: "Helken Tech Website"
   - Time zone: "Turkey"
   - Currency: "Turkish Lira (TRY)"

4. **Measurement ID** alın (G-XXXXXXXXXX formatında)

## Adım 2: Vercel Dashboard'a Ekleyin

### Vercel'de Environment Variable Ekleme:

1. https://vercel.com/dashboard adresine gidin
2. Projenizi seçin: **helkentech**
3. **Settings** sekmesine tıklayın
4. Sol menüden **Environment Variables** seçin
5. Yeni değişken ekleyin:
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-XXXXXXXXXX` (kendi Measurement ID'nizi yazın)
   - **Environment:** Production, Preview, Development (hepsini seçin)
6. **Save** butonuna tıklayın
7. **Redeploy** yapın (Deployments → en son deployment → üç nokta → Redeploy)

## Adım 3: Lokal Geliştirme için (Opsiyonel)

Projenizin kök dizininde `.env.local` dosyası oluşturun:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**NOT:** `.env.local` dosyası git'e eklenmez (zaten .gitignore'da var)

## Doğrulama

1-2 saat sonra https://analytics.google.com adresinde ziyaretçileri görmeye başlayacaksınız.

## Kod Zaten Eklendi ✅

Google Analytics kodu `src/app/layout.tsx` dosyasına zaten eklendi. Sadece Vercel'de environment variable eklemeniz yeterli!
