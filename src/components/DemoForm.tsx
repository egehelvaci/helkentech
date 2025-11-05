'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    authorizedName: '',
    authorizedSurname: '',
    company: '',
    phone: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Hatası:', errorData);
        throw new Error(errorData.error || errorData.details || 'Form gönderilemedi');
      }
      
      setSubmitStatus('success');
      setFormData({
        authorizedName: '',
        authorizedSurname: '',
        company: '',
        phone: '',
        address: '',
        message: ''
      });

      // 5 saniye sonra success mesajını temizle
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Yetkili İsim Soyisim */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="authorizedName" className="block text-sm font-medium text-gray-700 mb-2">
            Yetkili Adı *
          </label>
          <input
            type="text"
            id="authorizedName"
            name="authorizedName"
            value={formData.authorizedName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Yetkili adı"
          />
        </div>
        <div>
          <label htmlFor="authorizedSurname" className="block text-sm font-medium text-gray-700 mb-2">
            Yetkili Soyadı *
          </label>
          <input
            type="text"
            id="authorizedSurname"
            name="authorizedSurname"
            value={formData.authorizedSurname}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Yetkili soyadı"
          />
        </div>
      </div>

      {/* Şirket Adı */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Firma Adı *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Firma adınız"
        />
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="+90 555 123 45 67"
        />
      </div>

      {/* Adres */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
          Adres *
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Firma adresiniz"
        />
      </div>

      {/* Mesaj */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mesajınız / İhtiyaçlarınız
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Projeniz veya ihtiyaçlarınız hakkında bize bilgi verin..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <span>Gönderiliyor...</span>
        ) : (
          <>
            <span>Demo Talep Et</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center animate-fade-in">
          ✓ Talebiniz başarıyla alındı! En kısa sürede size dönüş yapacağız.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center animate-fade-in">
          ✗ Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan bize ulaşın.
        </div>
      )}
    </form>
  );
};

export default DemoForm;
