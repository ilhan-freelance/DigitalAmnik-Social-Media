import { useEffect } from 'react';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstagramShowcase from './components/InstagramShowcase';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingIcons from './components/FloatingIcons';
import SplashCursor from './components/SplashCursor';

function Home() {
  return (
    <div className="min-h-screen bg-nexus-black text-white font-sans selection:bg-nexus-cyan selection:text-black">
      <Navbar />
      <FloatingIcons />
      <main>
        <Hero />
        <InstagramShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Smooth scroll to initial hash if it exists
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash) as HTMLElement | null;
        if (element) {
          lenis.scrollTo(element, { offset: -80, duration: 1.2 });
        }
      }, 100);
    }

    // Intercept clicks on links with hashes on the same page for smooth butter scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const currentPath = window.location.pathname;
        const targetPath = anchor.pathname;

        if (currentPath === targetPath) {
          e.preventDefault();
          const element = document.querySelector(anchor.hash) as HTMLElement | null;
          if (element) {
            lenis.scrollTo(element, { offset: -80, duration: 1.0 });
            window.history.pushState(null, '', anchor.hash);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [pathname, hash]);

  return (
    <>
      <ScrollToTop />
      <WhatsAppButton />
      <SplashCursor />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}


