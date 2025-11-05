import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

type Props = {
  params: { slug: string }
}

// Blog yazıları verisi (gerçek uygulamada veritabanından gelecek)
export const blogPosts: Record<string, any> = {
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
    content: `
      <h2>B2B Satış Nedir?</h2>
      <p>B2B (Business to Business) satış, işletmeden işletmeye yapılan ticari satış sürecidir. Geleneksel perakende satıştan farklı olarak, B2B satışlar genellikle daha yüksek hacimli, daha karmaşık ve daha uzun vadeli ilişkiler gerektirir.</p>
      
      <h2>Neden B2B Satış Sistemi Gerekli?</h2>
      
      <h3>1. Sipariş Süreçlerini Hızlandırır</h3>
      <p>Manuel sipariş alma süreçleri zaman alıcı ve hata yapma riski yüksektir. B2B satış sistemi ile müşterileriniz 7/24 online sipariş verebilir, siz de siparişleri otomatik olarak işleme alabilirsiniz.</p>
      
      <h3>2. Müşteri Deneyimini İyileştirir</h3>
      <p>Müşterileriniz kendilerine özel fiyatları görebilir, sipariş geçmişine erişebilir ve kargo durumunu takip edebilir. Bu şeffaflık müşteri memnuniyetini önemli ölçüde artırır.</p>
      
      <h3>3. Hataları Minimize Eder</h3>
      <p>Manuel veri girişindeki hatalar maliyetli olabilir. Otomatik sistemler sayesinde fiyat hataları, yanlış ürün gönderimi gibi sorunlar %90 oranında azalır.</p>
      
      <h3>4. Satış Ekibini Güçlendirir</h3>
      <p>Satış ekibiniz rutin siparişlerle uğraşmak yerine yeni müşteri kazanmaya ve ilişkileri geliştirmeye odaklanabilir. Bu da satışları %40'a kadar artırabilir.</p>
      
      <h3>5. Veri ve Raporlama</h3>
      <p>Hangi ürünler daha çok satılıyor? Hangi müşteriler en karlı? Satış trendleri nedir? Tüm bu soruların cevaplarını gerçek zamanlı raporlarla alabilirsiniz.</p>
      
      <h3>6. Entegrasyon Kolaylığı</h3>
      <p>ERP, CRM, muhasebe ve lojistik sistemleriyle entegre çalışır. Veriler manuel olarak aktarılmaz, tüm sistemler senkronize çalışır.</p>
      
      <h2>Helken Tech B2B Satış Sistemi Özellikleri</h2>
      
      <h3>Müşteri Portali</h3>
      <ul>
        <li>Özel fiyat listelerini görüntüleme</li>
        <li>Online sipariş verme</li>
        <li>Sipariş takibi</li>
        <li>Fatura ve hesap ekstresi görüntüleme</li>
        <li>Geçmiş siparişleri tekrar etme</li>
      </ul>
      
      <h3>Otomatik Fiyatlandırma</h3>
      <ul>
        <li>Müşteriye özel fiyatlar</li>
        <li>Hacim indirimleri</li>
        <li>Kampanya yönetimi</li>
        <li>Fiyat listesi güncellemeleri</li>
      </ul>
      
      <h3>Sipariş Yönetimi</h3>
      <ul>
        <li>Otomatik onay süreçleri</li>
        <li>Stok kontrolü</li>
        <li>Toplu sipariş işleme</li>
        <li>Teslimat takibi</li>
      </ul>
      
      <p>B2B satış sisteminizi modernleştirerek rekabette öne geçin. Helken Tech olarak size özel çözümler sunuyoruz!</p>
    `
  },
  'e-ticaret-sitesi-acmak-icin-gerekenler': {
    title: 'E-Ticaret Sitesi Açmak İçin Gerekenler: Kapsamlı Rehber',
    description: 'E-ticaret sitenizi kurarken nelere dikkat etmelisiniz? Ödeme sistemleri, stok yönetimi ve müşteri deneyimi için ipuçları.',
    date: '2025-01-05',
    author: 'Helken Tech',
    category: 'E-Ticaret',
    readTime: '10 dakika',
    content: `
      <h2>E-Ticaret Sitesi Nedir?</h2>
      <p>E-ticaret sitesi, ürün veya hizmetlerinizi online olarak satışa sunduğunuz dijital bir mağazadır. Fiziksel mağazanızın yanı sıra veya onun yerine 7/24 açık olan bir satış kanalı sağlar.</p>
      
      <h2>E-Ticaret Sitesi Açmak İçin Gerekenler</h2>
      
      <h3>1. Ticari Alt Yapı</h3>
      <p><strong>Yasal Gereksinimler:</strong></p>
      <ul>
        <li>Şirket kuruluşu (Ltd. Şti. veya A.Ş.)</li>
        <li>Vergi levhası</li>
        <li>Ticaret sicil gazetesi</li>
        <li>Mesafeli satış sözleşmesi</li>
        <li>KVKK uyumlu gizlilik politikası</li>
      </ul>
      
      <h3>2. Teknik Altyapı</h3>
      <p><strong>Temel Bileşenler:</strong></p>
      <ul>
        <li>Domain adı (örn: markaniz.com)</li>
        <li>SSL sertifikası (güvenli bağlantı için)</li>
        <li>Hosting/Sunucu hizmeti</li>
        <li>E-ticaret platformu</li>
        <li>CDN (İçerik Dağıtım Ağı)</li>
      </ul>
      
      <h3>3. Ödeme Altyapısı</h3>
      <p>Müşterilerinizin ödeme yapabilmesi için:</p>
      <ul>
        <li>Sanal POS (banka ile anlaşma)</li>
        <li>3D Secure entegrasyonu</li>
        <li>İyzico, PayTR gibi ödeme aggregatörleri</li>
        <li>Kapıda ödeme altyapısı</li>
        <li>Havale/EFT bilgileri</li>
      </ul>
      
      <h3>4. Lojistik Entegrasyonu</h3>
      <p>Ürünleri müşteriye ulaştırmak için:</p>
      <ul>
        <li>Kargo firmalarıyla anlaşma</li>
        <li>Kargo entegrasyon yazılımı</li>
        <li>Barkod sistemi</li>
        <li>Paketleme malzemeleri</li>
        <li>Depo yönetimi</li>
      </ul>
      
      <h3>5. Ürün Yönetimi</h3>
      <p>Ürünlerinizi sisteme eklemek için:</p>
      <ul>
        <li>Profesyonel ürün fotoğrafları</li>
        <li>Detaylı ürün açıklamaları</li>
        <li>Kategori yapısı</li>
        <li>Stok takip sistemi</li>
        <li>Fiyatlandırma stratejisi</li>
      </ul>
      
      <h3>6. Pazarlama ve SEO</h3>
      <p>Müşterilere ulaşmak için:</p>
      <ul>
        <li>Google Analytics</li>
        <li>Google Search Console</li>
        <li>SEO optimizasyonu</li>
        <li>Google Ads hesabı</li>
        <li>Sosyal medya hesapları</li>
        <li>E-posta pazarlama sistemi</li>
      </ul>
      
      <h2>Helken Tech E-Ticaret Çözümleri</h2>
      <p>Helken Tech olarak, sıfırdan e-ticaret sitesi kurulumundan mevcut sitenizin optimize edilmesine kadar tüm hizmetleri sunuyoruz:</p>
      
      <h3>Özelleştirilmiş E-Ticaret Platformu</h3>
      <ul>
        <li>Mobil uyumlu modern tasarım</li>
        <li>Hızlı sayfa yükleme</li>
        <li>Güçlü ürün arama ve filtreleme</li>
        <li>Sepet ve ödeme süreclerinde optimizasyon</li>
        <li>Çoklu dil ve para birimi desteği</li>
      </ul>
      
      <h3>Entegrasyonlar</h3>
      <ul>
        <li>Tüm popüler ödeme sistemleri</li>
        <li>Kargo şirketleri otomatik entegrasyon</li>
        <li>Pazaryeri entegrasyonları (Trendyol, Hepsiburada)</li>
        <li>ERP ve muhasebe sistemi entegrasyonu</li>
        <li>SMS ve e-posta bildirim sistemleri</li>
      </ul>
      
      <h3>Destek ve Eğitim</h3>
      <ul>
        <li>7/24 teknik destek</li>
        <li>Kapsamlı kullanım eğitimleri</li>
        <li>Düzenli güncellemeler</li>
        <li>Performans raporları</li>
      </ul>
      
      <p>E-ticaret maceranıza başlamak için Helken Tech'in deneyiminden faydalanın. Size özel çözümler için iletişime geçin!</p>
    `
  },
  'odeme-sistemi-entegrasyonu-rehberi': {
    title: 'Ödeme Sistemi Entegrasyonu: Sanal POS ve 3D Secure',
    description: 'Online ödeme almak için sanal POS entegrasyonu nasıl yapılır? 3D Secure güvenliği nedir? Tüm detaylar bu rehberde.',
    date: '2024-12-28',
    author: 'Helken Tech',
    category: 'Ödeme Sistemleri',
    readTime: '7 dakika',
    content: `
      <h2>Online Ödeme Sistemleri Nedir?</h2>
      <p>Online ödeme sistemleri, müşterilerinizin internet üzerinden güvenli bir şekilde kredi kartı, banka kartı veya diğer ödeme yöntemleriyle alışveriş yapabilmesini sağlayan altyapılardır.</p>
      
      <h2>Sanal POS Nedir?</h2>
      <p>Sanal POS (Point of Sale), fiziksel mağazalardaki POS cihazlarının online versiyonudur. Bankalardan alınan bir hizmet olup, web sitenizde kredi kartı ödemesi almanızı sağlar.</p>
      
      <h3>Sanal POS Nasıl Alınır?</h3>
      <ol>
        <li><strong>Banka Seçimi:</strong> Farklı bankaların komisyon oranlarını karşılaştırın</li>
        <li><strong>Başvuru:</strong> Şirket evraklarıyla bankaya başvurun</li>
        <li><strong>Anlaşma:</strong> Komisyon oranları ve tahsilat süreleri üzerine anlaşma</li>
        <li><strong>Entegrasyon:</strong> Banka API'sini sitenize entegre edin</li>
        <li><strong>Test:</strong> Test kartlarıyla deneme ödemeleri yapın</li>
        <li><strong>Canlı:</strong> Sistemi yayına alın</li>
      </ol>
      
      <h3>Sanal POS Komisyon Oranları</h3>
      <p>Bankalar genellikle %2-4 arası komisyon alır. Faktörler:</p>
      <ul>
        <li>İşlem hacminiz</li>
        <li>Sektörünüz</li>
        <li>Taksit sayısı</li>
        <li>Yerli/yabancı kart</li>
      </ul>
      
      <h2>3D Secure Nedir?</h2>
      <p>3D Secure (Three-Domain Secure), online ödemelerde ek güvenlik katmanı sağlayan bir teknolojidir. İşlem sırasında müşterinin telefonu veya e-postasına gelen onay kodunu girmesi gerekir.</p>
      
      <h3>3D Secure Avantajları</h3>
      <ul>
        <li><strong>Güvenlik:</strong> Dolandırıcılık riskini %90 azaltır</li>
        <li><strong>Sorumluluk:</strong> 3D Secure ile yapılan ödemelerde chargeback sorumluluğu bankaya geçer</li>
        <li><strong>Müşteri Güveni:</strong> Müşteriler güvenli ödeme yaptıklarını bilir</li>
        <li><strong>Yasal Uyum:</strong> Birçok ülkede zorunludur</li>
      </ul>
      
      <h3>3D Secure Zorlukları</h3>
      <ul>
        <li>Ödeme sürecini uzatır</li>
        <li>Sepet terk oranını artırabilir</li>
        <li>Teknik entegrasyon gerektirir</li>
      </ul>
      
      <h2>Ödeme Aggregatörleri</h2>
      <p>Her bankayla ayrı ayrı anlaşmak yerine, ödeme aggregatörlerini kullanabilirsiniz:</p>
      
      <h3>İyzico</h3>
      <ul>
        <li>Hızlı kurulum</li>
        <li>Tek entegrasyon ile çoklu banka</li>
        <li>Detaylı raporlama</li>
        <li>Abonelik ve marketplace desteği</li>
      </ul>
      
      <h3>PayTR</h3>
      <ul>
        <li>Düşük komisyon oranları</li>
        <li>7/24 destek</li>
        <li>Hızlı ödeme onayı</li>
        <li>API entegrasyonu</li>
      </ul>
      
      <h2>Alternatif Ödeme Yöntemleri</h2>
      
      <h3>Kapıda Ödeme</h3>
      <ul>
        <li>Türkiye'de en popüler yöntem</li>
        <li>Müşteri güvenini artırır</li>
        <li>Kargo firması tahsilat yapar</li>
        <li>Komisyon oranı yüksek (%3-5)</li>
      </ul>
      
      <h3>Havale/EFT</h3>
      <ul>
        <li>Komisyonsuz</li>
        <li>Manuel takip gerektirir</li>
        <li>B2B satışlarda tercih edilir</li>
      </ul>
      
      <h3>Dijital Cüzdanlar</h3>
      <ul>
        <li>Apple Pay</li>
        <li>Google Pay</li>
        <li>PayPal</li>
        <li>Papara</li>
      </ul>
      
      <h2>Helken Tech Ödeme Entegrasyon Hizmetleri</h2>
      <p>Ödeme sistemlerini sitenize entegre etmek karmaşık olabilir. Helken Tech olarak:</p>
      
      <ul>
        <li>Tüm popüler ödeme sistemleriyle entegrasyon</li>
        <li>3D Secure ve 3D Secure 2.0 desteği</li>
        <li>PCI-DSS uyumlu güvenli altyapı</li>
        <li>Çoklu ödeme yöntemi desteği</li>
        <li>Taksit seçenekleri yönetimi</li>
        <li>Otomatik fatura kesimi</li>
        <li>Detaylı ödeme raporları</li>
        <li>7/24 teknik destek</li>
      </ul>
      
      <p>Ödeme sisteminizi profesyonelce kurmak ve yönetmek için bizimle iletişime geçin!</p>
    `
  },
  'dijital-donusum-rehberi-kobiler': {
    title: 'KOBİ\'ler İçin Dijital Dönüşüm Rehberi 2025',
    description: 'Küçük ve orta ölçekli işletmelerin dijital dönüşüm yolculuğunda izlemesi gereken adımlar ve dikkat edilmesi gereken noktalar.',
    date: '2024-12-20',
    author: 'Helken Tech',
    category: 'Dijital Dönüşüm',
    readTime: '12 dakika',
    content: `
      <h2>Dijital Dönüşüm Nedir?</h2>
      <p>Dijital dönüşüm, işletmenizin tüm süreçlerini, müşteri deneyimini ve iş modelinizi dijital teknolojilerle yeniden şekillendirme sürecidir. Sadece teknoloji kullanmak değil, işletme kültürünü ve zihniyetini değiştirmektir.</p>
      
      <h2>KOBİ'ler İçin Dijital Dönüşüm Neden Önemli?</h2>
      
      <h3>1. Rekabet Avantajı</h3>
      <p>Dijitalleşen rakipleriniz daha hızlı, daha verimli ve daha müşteri odaklı çalışıyor. Dijital dönüşüm gerçekleştirmezseniz geride kalma riski yüksek.</p>
      
      <h3>2. Müşteri Beklentileri</h3>
      <p>Müşteriler artık 7/24 erişilebilir olmayı, hızlı yanıt almayı ve dijital kanallardan alışveriş yapmayı bekliyor.</p>
      
      <h3>3. Operasyonel Verimlilik</h3>
      <p>Dijital araçlar manuel işleri otomatikleştirerek zamandan ve maliyetten tasarruf sağlar. KOBİ'ler ortalama %30-40 verimlilik artışı görüyor.</p>
      
      <h3>4. Veri Odaklı Kararlar</h3>
      <p>Dijital sistemler size değerli veriler sağlar. Bu verilerle daha bilinçli iş kararları alabilirsiniz.</p>
      
      <h2>Dijital Dönüşüm Adımları</h2>
      
      <h3>Adım 1: Mevcut Durumu Analiz Edin</h3>
      <p>İlk adım, şu anki durumunuzu objektif olarak değerlendirmektir:</p>
      <ul>
        <li>Hangi süreçler manuel yapılıyor?</li>
        <li>Müşterilerle nasıl iletişim kuruyorsunuz?</li>
        <li>Veriler nasıl toplanıyor ve saklanıyor?</li>
        <li>Ekip dijital araçları ne kadar kullanıyor?</li>
        <li>Rakipleriniz hangi dijital araçları kullanıyor?</li>
      </ul>
      
      <h3>Adım 2: Hedeflerinizi Belirleyin</h3>
      <p>Dijital dönüşümden ne bekliyorsunuz?</p>
      <ul>
        <li>Satışları artırmak</li>
        <li>Maliyetleri düşürmek</li>
        <li>Müşteri memnuniyetini yükseltmek</li>
        <li>Yeni pazarlara açılmak</li>
        <li>İş süreçlerini hızlandırmak</li>
      </ul>
      
      <h3>Adım 3: Bütçe Planlayın</h3>
      <p>Dijital dönüşüm yatırım gerektirir. KOBİ'ler için önerilen:</p>
      <ul>
        <li>İlk yıl ciron un %5-10'u</li>
        <li>Devam eden yıllarda %3-5</li>
        <li>Kademeli yatırım yapın</li>
        <li>ROI'yi takip edin</li>
      </ul>
      
      <h3>Adım 4: Öncelik Belirleyin</h3>
      <p>Her şeyi aynı anda yapmaya çalışmayın. KOBİ'ler için öncelik sırası:</p>
      <ol>
        <li>Web sitesi ve online görünürlük</li>
        <li>Sosyal medya varlığı</li>
        <li>Dijital ödeme sistemleri</li>
        <li>Müşteri yönetimi (CRM)</li>
        <li>Stok ve sipariş takibi</li>
        <li>Muhasebe otomasyonu</li>
        <li>ERP sistemi</li>
      </ol>
      
      <h3>Adım 5: Doğru Araçları Seçin</h3>
      <p>KOBİ'ler için uygun dijital araçlar:</p>
      
      <h4>Web ve E-Ticaret</h4>
      <ul>
        <li>Profesyonel web sitesi</li>
        <li>E-ticaret platformu</li>
        <li>SEO ve dijital pazarlama</li>
      </ul>
      
      <h4>Müşteri İlişkileri</h4>
      <ul>
        <li>CRM yazılımı</li>
        <li>E-posta pazarlama</li>
        <li>WhatsApp Business</li>
        <li>Canlı destek sistemleri</li>
      </ul>
      
      <h4>İş Süreçleri</h4>
      <ul>
        <li>Bulut depolama (Google Drive, Dropbox)</li>
        <li>Proje yönetimi (Trello, Asana)</li>
        <li>Online muhasebe</li>
        <li>Stok takip sistemi</li>
      </ul>
      
      <h4>İletişim ve İşbirliği</h4>
      <ul>
        <li>Microsoft Teams / Slack</li>
        <li>Zoom / Google Meet</li>
        <li>Bulut ofis araçları</li>
      </ul>
      
      <h3>Adım 6: Ekibi Hazırlayın</h3>
      <p>Dijital dönüşümün en önemli unsuru insandır:</p>
      <ul>
        <li>Ekip eğitimleri düzenleyin</li>
        <li>Değişime karşı direnci yönetin</li>
        <li>Dijital şampiyonlar belirleyin</li>
        <li>Başarıları kutlayın</li>
      </ul>
      
      <h3>Adım 7: Kademeli Uygulayın</h3>
      <p>Aşamalı geçiş yapın:</p>
      <ul>
        <li>Pilot uygulamalarla başlayın</li>
        <li>Geri bildirimleri toplayın</li>
        <li>İyileştirmeler yapın</li>
        <li>Başarılı olanı yaygınlaştırın</li>
      </ul>
      
      <h3>Adım 8: Ölçün ve İyileştirin</h3>
      <p>Sürekli takip edin:</p>
      <ul>
        <li>KPI'ları belirleyin</li>
        <li>Düzenli raporlama yapın</li>
        <li>ROI hesaplayın</li>
        <li>Sürekli iyileştirme yapın</li>
      </ul>
      
      <h2>Dijital Dönüşümde Dikkat Edilmesi Gerekenler</h2>
      
      <h3>Sık Yapılan Hatalar</h3>
      <ol>
        <li><strong>Strateji olmadan başlamak:</strong> Net hedefler belirleyin</li>
        <li><strong>Ekibi unutmak:</strong> İnsanları sürece dahil edin</li>
        <li><strong>Çok hızlı gitmek:</strong> Kademeli ilerleyin</li>
        <li><strong>Sadece teknoloji odaklı olmak:</strong> Kültür değişimi de gerekli</li>
        <li><strong>Ölçmemek:</strong> Başarıyı nasıl takip edeceğinizi bilin</li>
      </ol>
      
      <h3>Başarı Faktörleri</h3>
      <ul>
        <li>Üst yönetim desteği</li>
        <li>Net vizyon ve strateji</li>
        <li>Yeterli bütçe</li>
        <li>Eğitimli ekip</li>
        <li>Doğru teknoloji ortakları</li>
        <li>Sabır ve kararlılık</li>
      </ul>
      
      <h2>Helken Tech ile Dijital Dönüşüm</h2>
      <p>Helken Tech olarak KOBİ'lerin dijital dönüşüm yolculuğunda yanınızdayız:</p>
      
      <h3>Danışmanlık</h3>
      <ul>
        <li>Dijital olgunluk analizi</li>
        <li>Yol haritası oluşturma</li>
        <li>Teknoloji seçimi</li>
        <li>Uygulama stratejisi</li>
      </ul>
      
      <h3>Uygulama</h3>
      <ul>
        <li>Web sitesi ve e-ticaret</li>
        <li>ERP ve CRM sistemleri</li>
        <li>Süreç otomasyonu</li>
        <li>Entegrasyonlar</li>
      </ul>
      
      <h3>Destek</h3>
      <ul>
        <li>Ekip eğitimleri</li>
        <li>7/24 teknik destek</li>
        <li>Sürekli iyileştirme</li>
        <li>Performans takibi</li>
      </ul>
      
      <p>Dijital dönüşüm yolculuğunuza başlamak için bugün bizimle iletişime geçin!</p>
    `
  },
  'bulut-altyapi-avantajlari': {
    title: 'Bulut Altyapı: İşletmeler İçin 7 Büyük Avantaj',
    description: 'Bulut bilişim teknolojileri işletmelere esneklik, maliyet tasarrufu ve güvenlik sağlar. Bulut altyapının avantajlarını keşfedin.',
    date: '2024-12-15',
    author: 'Helken Tech',
    category: 'Bulut Teknolojileri',
    readTime: '5 dakika',
    content: `
      <h2>Bulut Altyapı Nedir?</h2>
      <p>Bulut altyapı, bilgi işlem kaynaklarının (sunucu, depolama, veritabanı, ağ, yazılım) internet üzerinden hizmet olarak sunulmasıdır. Fiziksel sunuculara sahip olmak yerine, ihtiyacınız kadar kaynağı kullanır ve sadece kullandığınız kadar ödersiniz.</p>
      
      <h2>Bulut Altyapı Türleri</h2>
      
      <h3>Public Cloud (Kamu Bulutu)</h3>
      <p>AWS, Microsoft Azure, Google Cloud gibi sağlayıcıların paylaşılan altyapısı</p>
      <ul>
        <li>En uygun maliyetli</li>
        <li>Hızlı başlangıç</li>
        <li>Sınırsız ölçeklenebilirlik</li>
      </ul>
      
      <h3>Private Cloud (Özel Bulut)</h3>
      <p>Sadece sizin kullanımınız için ayrılmış bulut altyapısı</p>
      <ul>
        <li>Daha yüksek güvenlik</li>
        <li>Tam kontrol</li>
        <li>Özelleştirilebilir</li>
      </ul>
      
      <h3>Hybrid Cloud (Hibrit Bulut)</h3>
      <p>Public ve private cloud'un birleşimi</p>
      <ul>
        <li>Hassas veriler private'da</li>
        <li>Diğer işler public'te</li>
        <li>Esnek ve dengeli</li>
      </ul>
      
      <h2>Bulut Altyapının 7 Büyük Avantajı</h2>
      
      <h3>1. Maliyet Tasarrufu</h3>
      <p>Geleneksel yöntemle karşılaştırıldığında:</p>
      <ul>
        <li><strong>CAPEX'ten OPEX'e:</strong> Büyük ön yatırım yerine aylık abonelik</li>
        <li><strong>Donanım Maliyeti:</strong> Sunucu, ağ ekipmanları almaya gerek yok</li>
        <li><strong>Bakım:</strong> Soğutma, elektrik, bakım maliyetleri yok</li>
        <li><strong>İnsan Kaynağı:</strong> Sistem yöneticisi maliyeti azalır</li>
        <li><strong>Ortalama Tasarruf:</strong> %30-50 maliyet düşüşü</li>
      </ul>
      
      <h3>2. Ölçeklenebilirlik ve Esneklik</h3>
      <p>İhtiyaçlarınız değiştikçe anında adapte olun:</p>
      <ul>
        <li>Dakikalar içinde yeni sunucu ekleyin</li>
        <li>Trafik arttığında otomatik ölçeklendirme</li>
        <li>Sezonluk değişimlere hızlı yanıt</li>
        <li>Sadece kullandığınız kadar ödeyin</li>
      </ul>
      
      <h3>3. Yüksek Erişilebilirlik</h3>
      <p>Sistemleriniz 7/24 çalışır:</p>
      <ul>
        <li><strong>SLA Garantisi:</strong> %99.9+ uptime</li>
        <li><strong>Coğrafi Dağılım:</strong> Birden fazla veri merkezinde yedekleme</li>
        <li><strong>Otomatik Yedekleme:</strong> Günlük/saatlik yedekler</li>
        <li><strong>Felaket Kurtarma:</strong> Hızlı recovery planları</li>
      </ul>
      
      <h3>4. Güvenlik</h3>
      <p>Kurumsal seviye güvenlik önlemleri:</p>
      <ul>
        <li>Fiziksel güvenlik (veri merkezleri)</li>
        <li>Veri şifreleme (iletimde ve depoda)</li>
        <li>DDoS koruması</li>
        <li>Düzenli güvenlik güncellemeleri</li>
        <li>Compliance sertifikaları (ISO 27001, SOC 2)</li>
        <li>KVKK uyumlu veri işleme</li>
      </ul>
      
      <h3>5. Performans ve Hız</h3>
      <p>Kullanıcılarınıza hızlı hizmet sunun:</p>
      <ul>
        <li><strong>CDN Entegrasyonu:</strong> İçerikler kullanıcıya yakın sunuculardan</li>
        <li><strong>SSD Diskler:</strong> Hızlı okuma/yazma</li>
        <li><strong>Yüksek Bant Genişliği:</strong> Hızlı veri transferi</li>
        <li><strong>Load Balancing:</strong> Trafik dengeli dağıtılır</li>
      </ul>
      
      <h3>6. Otomatik Yönetim</h3>
      <p>Teknik işleri sağlayıcı halleder:</p>
      <ul>
        <li>Otomatik yazılım güncellemeleri</li>
        <li>Güvenlik yamaları</li>
        <li>Sunucu bakımı</li>
        <li>Monitoring ve uyarılar</li>
        <li>Performans optimizasyonu</li>
      </ul>
      
      <h3>7. İş Sürekliliği</h3>
      <p>Beklenmedik durumlara hazırlıklı olun:</p>
      <ul>
        <li>Yangın, deprem gibi felaketlere karşı dayanıklı</li>
        <li>Elektrik kesintisi riski yok</li>
        <li>Donanım arızalarında otomatik geçiş</li>
        <li>Verileriniz çoklu lokasyonda güvende</li>
      </ul>
      
      <h2>Bulut Altyapı Kullanım Senaryoları</h2>
      
      <h3>Web Sitesi ve Uygulama Hosting</h3>
      <p>Web sitenizi bulutta barındırın, yüksek trafiğe hazır olun</p>
      
      <h3>Veri Depolama ve Yedekleme</h3>
      <p>Dosyalarınızı güvenle saklayın, her yerden erişin</p>
      
      <h3>E-Ticaret</h3>
      <p>Kampanya dönemlerinde trafik artışına anında yanıt verin</p>
      
      <h3>ERP ve İş Uygulamaları</h3>
      <p>Kurumsal yazılımlarınızı bulutta çalıştırın</p>
      
      <h3>Geliştirme ve Test</h3>
      <p>Yeni projeler için hızlıca ortam oluşturun</p>
      
      <h3>Big Data ve Analitik</h3>
      <p>Büyük veri setlerini işleyin, analizler yapın</p>
      
      <h2>Bulut Geçişi (Migration)</h2>
      
      <h3>Geçiş Adımları</h3>
      <ol>
        <li><strong>Değerlendirme:</strong> Mevcut altyapınızı analiz edin</li>
        <li><strong>Planlama:</strong> Geçiş stratejisi oluşturun</li>
        <li><strong>Pilot:</strong> Küçük bir projeyle başlayın</li>
        <li><strong>Migrasyon:</strong> Uygulamaları taşıyın</li>
        <li><strong>Optimizasyon:</strong> Performansı iyileştirin</li>
        <li><strong>Yönetim:</strong> Sürekli izleme ve bakım</li>
      </ol>
      
      <h3>Dikkat Edilmesi Gerekenler</h3>
      <ul>
        <li>Bant genişliği ihtiyaçları</li>
        <li>Veri transferi maliyetleri</li>
        <li>Uyumluluk gereksinimleri</li>
        <li>Ekip eğitimi</li>
        <li>Vendor lock-in riski</li>
      </ul>
      
      <h2>Helken Tech Bulut Altyapı Hizmetleri</h2>
      <p>Buluta geçiş sürecinizde yanınızdayız:</p>
      
      <h3>Danışmanlık</h3>
      <ul>
        <li>Bulut hazırlık değerlendirmesi</li>
        <li>Maliyet-fayda analizi</li>
        <li>Sağlayıcı seçimi</li>
        <li>Migrasyon stratejisi</li>
      </ul>
      
      <h3>Uygulama</h3>
      <ul>
        <li>Cloud architecture tasarımı</li>
        <li>Migrasyon hizmetleri</li>
        <li>Güvenlik yapılandırması</li>
        <li>Performans optimizasyonu</li>
      </ul>
      
      <h3>Yönetim</h3>
      <ul>
        <li>7/24 monitoring</li>
        <li>Otomatik yedekleme</li>
        <li>Güvenlik güncellemeleri</li>
        <li>Maliyet optimizasyonu</li>
        <li>Teknik destek</li>
      </ul>
      
      <p>Bulut altyapıya geçerek işletmenizi geleceğe taşıyın. Helken Tech ile bu yolculuğa başlayın!</p>
    `
  }
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

