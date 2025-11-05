import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts as blogPostsData } from '../blog/[slug]/page';

export const metadata: Metadata = {
  title: 'Blog - ERP, B2B ve E-Ticaret Hakkında Yazılar',
  description: 'ERP sistemleri, B2B satış, e-ticaret ve dijital dönüşüm hakkında uzman görüşleri ve rehberler.',
  alternates: {
    canonical: 'https://helkentech.com/blog',
  },
};

export default function BlogPage() {
  // Blog posts objesini array'e çevirip slug ekle
  const blogPosts = Object.entries(blogPostsData).map(([slug, post]) => ({
    slug,
    title: post.title,
    excerpt: post.description, // description'ı excerpt olarak kullan
    date: post.date,
    author: post.author,
    category: post.category,
    readTime: post.readTime
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Teknoloji ve Dijital Dönüşüm <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ERP sistemleri, B2B satış, e-ticaret ve dijital dönüşüm hakkında uzman görüşleri ve pratik rehberler
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Category Badge */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4">
                  <span className="text-white font-semibold text-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Blog Yazılarımızdan Haberdar Olun
            </h2>
            <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
              Yeni yazılarımız ve teknoloji trendleri hakkında bilgi almak için bizi takip edin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <a
                href="/#demo"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                İletişime Geçin
              </a>
              <a
                href="https://www.instagram.com/helkentech?igsh=OWtjamFtNnBjaGY4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Instagram'da Takip Edin
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

