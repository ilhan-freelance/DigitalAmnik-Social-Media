import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const clientLogos = [
  "https://i.ibb.co/ymx1CVcJ/1.png",
  "https://i.ibb.co/XZdSTBTx/2.png",
  "https://i.ibb.co/VWDB7xyx/3.png",
  "https://i.ibb.co/yBXFSzy9/4.png",
  "https://i.ibb.co/nshL5NwB/5.png",
  "https://i.ibb.co/8nxkBkkv/6.png",
  "https://i.ibb.co/DHdd7Z5P/7.png",
  "https://i.ibb.co/kgYrDCVv/8.png",
  "https://i.ibb.co/yKbXqB4/9.png",
  "https://i.ibb.co/W4z3GGxS/10.png",
  "https://i.ibb.co/23ZLFjFj/11.png",
  "https://i.ibb.co/GDp8SN0/12.png",
  "https://i.ibb.co/tTJp496S/13.png",
  "https://i.ibb.co/SXZgjyjn/14.png",
  "https://i.ibb.co/9McxqmR/15.png",
  "https://i.ibb.co/kgQKy3gq/16.png",
  "https://i.ibb.co/KzLWYNrb/17.png",
  "https://i.ibb.co/YBSXygm4/18.png",
  "https://i.ibb.co/gb2FQh9w/19.png"
];

export default function Clients() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-nexus-cyan selection:text-black">
      <Navbar />
      
      <main className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Our Trusted <span className="text-nexus-accent">Clients</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              We've had the privilege of working with some of the most innovative brands and industry leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-nexus-accent/30 hover:shadow-xl hover:shadow-nexus-accent/5 transition-all duration-500 group"
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className="max-h-16 md:max-h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
