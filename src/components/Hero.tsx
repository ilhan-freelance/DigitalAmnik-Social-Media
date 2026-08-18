import { motion } from 'motion/react';
import { ArrowRight, Globe, Zap, BarChart, Users, TrendingUp } from 'lucide-react';
import Orb from './Orb';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="top" className="relative min-h-screen bg-transparent flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Pixis-inspired Fluid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{
            x: [0, 50, -25, 0],
            y: [0, -25, 50, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-nexus-accent/20 rounded-full blur-[80px] md:blur-[120px] will-change-transform" 
        />
        <motion.div 
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-fuchsia-500/15 rounded-full blur-[100px] md:blur-[140px] will-change-transform" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nexus-black/10 to-transparent" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Based in India • Serving Globally
          </div>
          <img 
            src="https://i.ibb.co/gbQXBfg2/403-4035869-bni-badge-large-logo-chipotle-hd-png-download-1.png" 
            alt="Proud BNI Member" 
            className="h-16 md:h-24 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex flex-col items-center mb-8">
          <motion.div variants={itemVariants} className="relative w-full max-w-5xl mx-auto mb-6 px-4 flex items-center justify-center">
            {/* React Bits Orb Glow Effect Behind Header Text */}
            <div className="absolute inset-0 max-w-4xl mx-auto h-[350px] md:h-[480px] -top-8 md:-top-16 z-0 pointer-events-none opacity-85">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={270}
                forceHoverState={true}
                backgroundColor="#000000"
              />
            </div>

            <svg 
              viewBox="0 0 1200 290" 
              className="relative z-10 w-full h-auto select-none drop-shadow-[0_0_35px_rgba(192,132,252,0.45)] overflow-visible"
            >
              <defs>
                <linearGradient id="heroArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#c084fc" />
                  <stop offset="50%" stopColor="#f0abfc" />
                  <stop offset="75%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                
                {/* Line 1 Curved Arc: WE ARE A 360° */}
                <path
                  id="heroArcLine1"
                  d="M 160 105 Q 600 35 1040 105"
                  fill="none"
                />
                {/* Line 2 Curved Arc: DIGITAL MARKETING AGENCY */}
                <path
                  id="heroArcLine2"
                  d="M 70 230 Q 600 135 1130 230"
                  fill="none"
                />
              </defs>
              
              {/* Line 1: WE ARE A 360° */}
              <text 
                fontSize="62" 
                fontWeight="900" 
                letterSpacing="3"
                className="uppercase font-display"
              >
                <textPath 
                  href="#heroArcLine1" 
                  startOffset="50%" 
                  textAnchor="middle" 
                  fill="url(#heroArcGradient)"
                >
                  WE ARE A 360°
                </textPath>
              </text>

              {/* Line 2: DIGITAL MARKETING AGENCY */}
              <text 
                fontSize="56" 
                fontWeight="900" 
                letterSpacing="2"
                className="uppercase font-display"
              >
                <textPath 
                  href="#heroArcLine2" 
                  startOffset="50%" 
                  textAnchor="middle" 
                  fill="url(#heroArcGradient)"
                >
                  DIGITAL MARKETING AGENCY
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-8"
          >
            {['Real Estate', 'Hospitality', 'MSME', 'Healthcare'].map((niche, i) => (
              <div key={niche} className="flex items-center gap-4 md:gap-6">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-nexus-cyan/80">
                  {niche}
                </span>
                {i !== 3 && <div className="w-1 h-1 rounded-full bg-white/20" />}
              </div>
            ))}
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Your Vision + Our Digital Expertise = Unending Growth. 
            Transforming businesses into brands since 2020.
          </motion.p>
        </div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#instagram-showcase"
            className="group px-8 py-4 bg-white/5 border border-white/15 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            Explore Instagram Accounts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/919929855285"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            WhatsApp Inquiry
          </a>
        </motion.div>

        {/* Floating Cards with Pixis-style hover */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {[
            { icon: Globe, label: "Satisfied Clients", value: "300+" },
            { icon: Zap, label: "Projects Delivered", value: "500+" },
            { icon: BarChart, label: "Marketing Campaigns", value: "1000+" },
            { icon: TrendingUp, label: "Meta Ads Spend", value: "Rs 10cr+" },
            { icon: Users, label: "Employees", value: "25+" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-left hover:border-nexus-accent/50 hover:bg-white/15 transition-all duration-300 group cursor-default"
            >
              <item.icon className="w-8 h-8 text-nexus-accent mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold mb-1 text-white">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
              <div className="absolute inset-0 rounded-2xl bg-nexus-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
