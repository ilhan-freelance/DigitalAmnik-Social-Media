import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent border-t border-white/5 pt-24 pb-12 text-gray-500 overflow-hidden relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 flex items-center">
              <img 
                src="https://i.ibb.co/wNGDCLz6/Untitled-design-2.png" 
                alt="Digital Amnik" 
                className="h-20 md:h-28 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Your Vision + Our Digital Expertise = Unending Growth. Transforming businesses into industry leaders since 2020.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-nexus-cyan transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-nexus-cyan transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-nexus-cyan transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-nexus-cyan transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/#top" className="hover:text-nexus-cyan transition-colors">Home</a></li>
              <li><a href="/#instagram-showcase" className="hover:text-nexus-cyan transition-colors">Work</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-8">Locations</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex flex-col">
                <span className="text-white">India</span>
                <span className="text-xs mt-1">Kota, Vigyan Nagar</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white">UAE</span>
                <span className="text-xs mt-1">Dubai, Damas Tower</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-8">Get in Touch</h4>
            <div className="space-y-4 text-sm font-medium">
              <a href="mailto:digitalamnik@gmail.com" className="block hover:text-nexus-cyan transition-colors">digitalamnik@gmail.com</a>
              <a href="tel:+919929855285" className="block hover:text-nexus-cyan transition-colors">+91 99298 55285</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[10px] font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Digital Amnik.
            </p>
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors group"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
