import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    'Real Estate Lead Generation',
    'Social Media Marketing',
    'Performance Marketing',
    'Website Development',
    'Search Engine Optimization',
    'Content Strategy',
    'Branding & Design'
  ];

  const handleServiceToggle = (service: string) => {
    setFormState(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const servicesText = formState.services.length > 0 ? formState.services.join(', ') : 'None selected';
    const message = `*New Lead from Website*\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n*Services Required:* ${servicesText}\n*Message:* ${formState.message}`;
    const whatsappUrl = `https://wa.me/919929855285?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Simulate API call success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '', services: [] });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-nexus-accent">Touch.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            Choose Digital Amnik as your digital partner, and let us guide your brand towards unparalleled success.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-nexus-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Email Us</h4>
                <a href="mailto:digitalamnik@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  digitalamnik@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-nexus-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Call Us</h4>
                <a href="tel:+919929855285" className="text-gray-400 hover:text-white transition-colors">
                  +91 99298 55285
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-nexus-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-400 mb-2">
                  <strong className="text-white">India:</strong> 1st Floor, 2-DHA-1, Centre Point, Vigyan Nagar, Kota
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">UAE:</strong> 4th floor, Damas Tower, Dubai
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md relative z-20"
        >
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-nexus-accent hover:text-white transition-colors font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-nexus-accent/50 focus:border-transparent transition-all text-white placeholder-gray-600 backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-nexus-accent/50 focus:border-transparent transition-all text-white placeholder-gray-600 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Which service do you want? (Select multiple)
                </label>
                <div className="flex flex-wrap gap-3">
                  {servicesList.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                        formState.services.includes(service)
                          ? 'bg-nexus-accent border-nexus-accent text-white shadow-lg shadow-nexus-accent/20'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-nexus-accent/50 focus:border-transparent transition-all text-white placeholder-gray-600 resize-none backdrop-blur-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-nexus-accent hover:bg-indigo-600 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
