import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#top' },
    { name: 'Work', href: '/#instagram-showcase' },
  ];

  return (
    <nav className="absolute top-6 left-0 right-0 z-50 px-6">
      <div 
        className="max-w-5xl mx-auto rounded-full px-6 py-1.5 flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/5"
      >
        <Link to="/" className="flex items-center">
          <img 
            src="https://i.ibb.co/wNGDCLz6/Untitled-design-2.png" 
            alt="Digital Amnik" 
            className="h-12 md:h-16 w-auto"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="https://wa.me/919929855285"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-nexus-cyan transition-all duration-300"
          >
            Connect WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 bg-nexus-black/95 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-bold text-gray-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-2xl font-bold text-gray-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="https://wa.me/919929855285"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-4 bg-white text-black rounded-2xl text-lg font-bold hover:bg-nexus-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
