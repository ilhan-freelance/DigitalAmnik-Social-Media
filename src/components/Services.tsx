import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Search, Megaphone, PenTool, Share2, Code, BarChart3, Video, Smartphone, Newspaper, Globe, Rocket } from 'lucide-react';

const services = [
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Comprehensive management and marketing services to boost your online presence on Facebook, Instagram, Twitter, and more.',
  },
  {
    icon: PenTool,
    title: 'Graphic Designing & Branding',
    description: 'Creative logos, product branding, social media posts, and motion graphics that make your brand stand out.',
  },
  {
    icon: Smartphone,
    title: 'Personal Branding (UGC)',
    description: 'Build your unique identity and authority with authentic User Generated Content strategies.',
  },
  {
    icon: Megaphone,
    title: 'Paid Ads (PPC)',
    description: 'Targeted campaigns on Google, Meta, LinkedIn, and YouTube to drive traffic and conversions.',
  },
  {
    icon: Code,
    title: 'Website Development & SEO',
    description: 'Responsive, user-friendly websites optimized for search engines to attract organic traffic.',
  },
  {
    icon: Globe,
    title: 'Digital PR',
    description: 'Amplify your reach globally through expertly crafted online press releases on major news platforms.',
  },
  {
    icon: BarChart3,
    title: 'Influencer Marketing',
    description: 'Connect with trusted voices in your industry to build meaningful connections with your audience.',
  },
  {
    icon: Rocket,
    title: 'App Marketing',
    description: 'Strategic promotion, ASO, and trend analysis to increase downloads and user engagement.',
  },
  {
    icon: Video,
    title: 'Video Marketing',
    description: 'Engaging videos and reels that captivate audiences and drive brand growth across platforms.',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useLayoutEffect(() => {
    const calculateScroll = () => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // We want to scroll until the end of the container is visible
        // Adding a bit of extra space at the end for better visual balance
        const distance = Math.max(0, containerWidth - viewportWidth + (viewportWidth * 0.05));
        setScrollDistance(distance);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      calculateScroll();
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    calculateScroll();
    window.addEventListener('resize', calculateScroll);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateScroll);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section id="services" ref={containerRef} className="relative h-[400vh] bg-transparent z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-nexus-accent text-sm font-display font-bold uppercase tracking-[0.3em] mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white">
              Our Services
            </h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:flex items-center gap-4 text-gray-500 text-sm font-display uppercase tracking-widest"
          >
            <span>Scroll to explore</span>
            <div className="w-12 h-[1px] bg-gray-800 relative overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-nexus-accent"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          ref={scrollRef}
          style={{ x }} 
          className="flex gap-8 px-6 md:px-[10%] w-max min-w-max transform-gpu will-change-transform"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  key?: any;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[300px] md:w-[400px] group"
    >
      <div className="relative h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-nexus-accent/50 transition-all duration-500 overflow-hidden">
        {/* Animated Glow Background */}
        <div className="absolute -inset-px bg-gradient-to-br from-nexus-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="w-14 h-14 bg-nexus-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <service.icon className="w-7 h-7 text-nexus-accent" />
          </div>
          
          <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-nexus-accent transition-colors duration-500">
            {service.title}
          </h4>
          
          <p className="text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
          <div className="w-12 h-12 border-t-2 border-r-2 border-nexus-accent rounded-tr-xl" />
        </div>
      </div>
    </motion.div>
  );
}
