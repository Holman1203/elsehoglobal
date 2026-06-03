'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const services = [
  'Technology Procurement',
  'ICT Infrastructure',
  'Network Administration',
  'Technical Support',
  'Information Security',
  'IT Consulting',
  'Corporate Procurement',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#00C853] text-sm font-semibold uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3 mb-5">
            Let's Start a{' '}
            <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-white/60 text-lg">
            Reach out for product inquiries, corporate quotes, or technical support.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-[#060f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Office Address', lines: ['El-SEHO Frontier Solutions Ltd', 'Abuja, Nigeria'], color: '#0066FF' },
                { icon: Phone, title: 'Phone Number', lines: ['+234 000 000 0000', '+234 000 000 0001'], color: '#00C853' },
                { icon: Mail, title: 'Email Address', lines: ['info@elseho.com', 'support@elseho.com'], color: '#0066FF' },
                { icon: Clock, title: 'Business Hours', lines: ['Monday – Friday: 8AM – 6PM', 'Saturday: 9AM – 2PM'], color: '#00C853' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-5 bg-gray-50 dark:bg-[#0d1f35] rounded-2xl border border-gray-100 dark:border-white/5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${item.color}15` }}>
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#0A2540] dark:text-white mb-1">{item.title}</p>
                    {item.lines.map(line => (
                      <p key={line} className="text-sm text-gray-500 dark:text-white/50">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-48 bg-gray-100 dark:bg-[#0d1f35] flex items-center justify-center border border-gray-100 dark:border-white/5">
                <div className="text-center text-gray-400 dark:text-white/30">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p className="text-sm">Google Map Integration</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-50 dark:bg-[#0d1f35] rounded-2xl p-8 border border-gray-100 dark:border-white/5">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 size={56} className="text-[#00C853] mb-5" />
                  <h3 className="text-2xl font-bold font-heading text-[#0A2540] dark:text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-white/50 mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold font-heading text-[#0A2540] dark:text-white mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      {[
                        { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 000 000 0000' },
                        { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Your company (optional)' },
                      ].map(field => (
                        <div key={field.name}>
                          <label className="block text-sm font-medium text-[#0A2540] dark:text-white mb-2">{field.label}</label>
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={form[field.name as keyof typeof form]}
                            onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                            className="w-full bg-white dark:bg-[#0A2540] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0A2540] dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#0066FF] transition-colors"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0A2540] dark:text-white mb-2">Service Required</label>
                      <select
                        value={form.service}
                        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        className="w-full bg-white dark:bg-[#0A2540] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0A2540] dark:text-white focus:outline-none focus:border-[#0066FF] transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0A2540] dark:text-white mb-2">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your technology needs..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full bg-white dark:bg-[#0A2540] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0A2540] dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#0066FF] transition-colors resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 group">
                      Send Message
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
