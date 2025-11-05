import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

type Props = {
  params: { slug: string }
}

// Blog yazıları verisi (gerçek uygulamada veritabanından gelecek)
const blogPosts: Record<string, any> = {
  'erp-nedir-isletmelere-faydalari': {
    title: 'ERP Nedir? İşletmelere Sağladığı 10 Önemli Fayda',
    description: 'ERP (Enterprise Resource Planning) sistemleri işletmelerin tüm süreçlerini tek bir platformda yönetmesini sağlar.',
    date: '2025-01-15',
    author: 'Helken Tech',
    category: 'ERP Sistemleri',
    readTime: '8 dakika',
    content: `
      <h2>ERP Nedir?</h2>
      <p>ERP (Enterprise Resource Planning - Kurumsal Kaynak Planlaması), işletmelerin günlük faaliyetlerini yönetmek için kullandığı yazılım sistemleridir. Finans, insan kaynakları, üretim, tedarik zinciri, hizmetler, satın alma ve daha fazlası gibi iş süreçlerini tek bir platformda birleştirir.</p>
      
      <h2>İşletmelere Sağladığı 10 Önemli Fayda</h2>
      
      <h3>1. Merkezi Veri Yönetimi</h3>
      <p>Tüm departmanlarınızın verileri tek bir sistemde birleşir. Bu sayede veri tutarsızlıkları ve tekrar eden kayıtlar ortadan kalkar.</p>
      
      <h3>2. Gerçek Zamanlı Raporlama</h3>
      <p>İşletmenizin durumunu anlık olarak takip edebilir, hızlı kararlar alabilirsiniz. Satış, stok, finans gibi kritik verilere her an erişim.</p>
      
      <h3>3. Süreç Otomasyonu</h3>
      <p>Manuel işlemler otomatikleştirilir. Fatura kesme, stok takibi, ödeme süreçleri gibi rutin işler sisteme bırakılır.</p>
      
      <h3>4. Maliyet Tasarrufu</h3>
      <p>Operasyonel verimliliğin artması ve hataların azalması sonucunda önemli maliyet tasarrufları sağlanır. Ortalama %20-30 maliyet düşüşü gözlemlenir.</p>
      
      <h3>5. İyileştirilmiş İşbirliği</h3>
      <p>Farklı departmanlar aynı veriler üzerinde çalışır, iletişim ve koordinasyon artar.</p>
      
      <h3>6. Müşteri Memnuniyeti</h3>
      <p>Daha hızlı sipariş işleme, doğru faturalandırma ve zamanında teslimat ile müşteri memnuniyeti artar.</p>
      
      <h3>7. Ölçeklenebilirlik</h3>
      <p>İşletmeniz büyüdükçe ERP sisteminiz de büyür. Yeni modüller ve özellikler kolayca eklenir.</p>
      
      <h3>8. Yasal Uyumluluk</h3>
      <p>Vergi mevzuatı, e-fatura, e-arşiv gibi yasal zorunluluklar sisteme entegredir.</p>
      
      <h3>9. Risk Yönetimi</h3>
      <p>Potansiyel riskler önceden tespit edilir ve önlemler alınır. Stok eksiklikleri, ödeme gecikmeleri gibi sorunlar minimize edilir.</p>
      
      <h3>10. Rekabet Avantajı</h3>
      <p>Daha hızlı ve verimli çalışan işletmeler pazarda öne çıkar. ERP kullanan firmalar rakiplerine göre %30 daha verimli çalışır.</p>
      
      <h2>Helken Tech ERP Çözümleri</h2>
      <p>Helken Tech olarak, işletmenizin ihtiyaçlarına özel ERP sistemleri geliştiriyoruz. 5+ yıllık tecrübemiz ve 10+ mutlu müşterimiz ile yanınızdayız.</p>
      
      <h3>Özelliklerimiz:</h3>
      <ul>
        <li>Özelleştirilebilir modüller</li>
        <li>Bulut tabanlı veya on-premise kurulum</li>
        <li>7/24 teknik destek</li>
        <li>Detaylı eğitim programları</li>
        <li>E-fatura, e-arşiv entegrasyonu</li>
        <li>Mobil uygulama desteği</li>
      </ul>
      
      <p>ERP sistemi hakkında daha fazla bilgi almak veya demo talep etmek için bizimle iletişime geçin!</p>
    `
  },
  'b2b-satis-sistemi-neden-gerekli': {
    title: 'B2B Satış Sistemi: İşletmeler İçin Neden Gerekli?',
    description: 'B2B satış süreçlerini dijitalleştirmek, müşteri memnuniyetini artırır ve maliyetleri düşürür.',
    date: '2025-01-10',
    author: 'Helken Tech',
    category: 'B2B Çözümler',
    readTime: '6 dakika',
    content: '<p>B2B satış sistemleri hakkında detaylı bilgi...</p>'
  },
  // Diğer blog yazıları...
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
    };
  }

  return {
    title: `${post.title} | Helken Tech Blog`,
    description: post.description,
    alternates: {
      canonical: `https://helkentech.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Yazısı Bulunamadı</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Blog sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Blog'a Dön
          </Link>

          <div className="mb-6">
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('tr-TR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{post.readTime} okuma</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-li:text-gray-700
            prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Buttons */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <Share2 className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600 font-semibold">Paylaş:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://helkentech.com/blog/' + params.slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://helkentech.com/blog/' + params.slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            İşletmeniz için ERP Çözümü mü Arıyorsunuz?
          </h2>
          <p className="text-blue-50 mb-6">
            Uzman ekibimizle tanışın, işletmenize özel çözümler keşfedin.
          </p>
          <Link
            href="/#demo"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Ücretsiz Demo Talep Edin
          </Link>
        </div>
      </div>
    </article>
  );
}

// Tüm blog yazılarının slug'larını döndür (static generation için)
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

