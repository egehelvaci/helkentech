import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Dynamic route - build zamanında çalıştırılmaz
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { authorizedName, authorizedSurname, company, phone, address, message } = body;

    // Validasyon
    if (!authorizedName || !authorizedSurname || !company || !phone || !address) {
      return NextResponse.json(
        { error: 'Tüm zorunlu alanları doldurun' },
        { status: 400 }
      );
    }

    // SMTP ayarlarını konsola yazdır (debug için)
    console.log('📧 SMTP Ayarları:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER ? '✓ Var' : '✗ Yok',
      pass: process.env.SMTP_PASS ? '✓ Var' : '✗ Yok',
    });

    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // Self-signed certificate'leri kabul et
      }
    });

    // Email içeriği
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
              line-height: 1.6; 
              color: #333; 
              margin: 0;
              padding: 0;
            }
            .container { 
              max-width: 600px; 
              margin: 20px auto; 
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header { 
              background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .header h1 {
              margin: 0 0 10px 0;
              font-size: 28px;
              font-weight: 600;
            }
            .header p {
              margin: 0;
              opacity: 0.9;
              font-size: 16px;
            }
            .content { 
              padding: 30px; 
            }
            .info-row { 
              margin-bottom: 20px; 
              padding: 20px; 
              background: #f9fafb; 
              border-radius: 8px; 
              border-left: 4px solid #2563EB; 
            }
            .label { 
              font-weight: 600; 
              color: #2563EB; 
              margin-bottom: 8px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value { 
              color: #1f2937;
              font-size: 16px;
              word-wrap: break-word;
            }
            .footer { 
              text-align: center; 
              padding: 20px 30px;
              background: #f9fafb;
              border-top: 1px solid #e5e7eb;
            }
            .footer p {
              margin: 5px 0;
              color: #6b7280; 
              font-size: 13px;
            }
            .icon {
              font-size: 32px;
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="icon">🚀</div>
              <h1>Yeni Demo Talebi</h1>
              <p>Helken Tech Web Sitesi</p>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">👤 Yetkili Kişi</div>
                <div class="value">${authorizedName} ${authorizedSurname}</div>
              </div>
              
              <div class="info-row">
                <div class="label">🏢 Firma Adı</div>
                <div class="value">${company}</div>
              </div>
              
              <div class="info-row">
                <div class="label">📞 Telefon</div>
                <div class="value"><a href="tel:${phone}" style="color: #2563EB; text-decoration: none;">${phone}</a></div>
              </div>
              
              <div class="info-row">
                <div class="label">📍 Adres</div>
                <div class="value">${address.replace(/\n/g, '<br>')}</div>
              </div>
              
              ${message ? `
              <div class="info-row">
                <div class="label">💬 Mesaj / İhtiyaçlar</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p><strong>Bu e-posta Helken Tech web sitesi demo talep formundan otomatik olarak gönderilmiştir.</strong></p>
              <p>📅 Tarih: ${new Date().toLocaleString('tr-TR', { 
                dateStyle: 'long', 
                timeStyle: 'short' 
              })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
🚀 YENİ DEMO TALEBİ - Helken Tech

👤 Yetkili Kişi: ${authorizedName} ${authorizedSurname}
🏢 Firma Adı: ${company}
📞 Telefon: ${phone}
📍 Adres: ${address}
${message ? `💬 Mesaj: ${message}` : ''}

📅 Tarih: ${new Date().toLocaleString('tr-TR')}

---
Bu e-posta Helken Tech web sitesi demo talep formundan otomatik olarak gönderilmiştir.
    `;

    // Email gönder
    const info = await transporter.sendMail({
      from: `"Helken Tech Demo Talepleri" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER || 'info@helkentech.com', // SMTP_USER'dan otomatik alınır
      subject: `🚀 Yeni Demo Talebi - ${company}`,
      text: emailText,
      html: emailHtml,
      replyTo: phone ? `${authorizedName} ${authorizedSurname} <${process.env.SMTP_USER}>` : undefined,
    });

    console.log('✅ Email başarıyla gönderildi:', info.messageId);

    return NextResponse.json(
      { 
        success: true,
        message: 'Demo talebi başarıyla gönderildi', 
        messageId: info.messageId 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Email gönderme hatası:', error);
    return NextResponse.json(
      { error: 'Email gönderilemedi. Lütfen daha sonra tekrar deneyin.', details: error.message },
      { status: 500 }
    );
  }
}
