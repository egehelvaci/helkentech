import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://helkentech.com';
  
  const blogPosts = [
    'erp-nedir-isletmelere-faydalari',
    'b2b-satis-sistemi-neden-gerekli',
    'e-ticaret-sitesi-acmak-icin-gerekenler',
    'odeme-sistemi-entegrasyonu-rehberi',
    'dijital-donusum-rehberi-kobiler',
    'bulut-altyapi-avantajlari',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${blogPosts.map((slug) => `<url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n  ')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}

