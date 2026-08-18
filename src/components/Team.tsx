import { motion, useScroll, useTransform, MotionValue, useMotionValue, useSpring } from 'motion/react';
import React, { useRef, useMemo } from 'react';

export default function Team() {
  const imageUrl = "https://www.image2url.com/r2/default/images/1776198834420-6ecc38c7-e427-4af1-a9b4-cf6dc89d60f8.jpg";

  return (
    <section id="team" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Meet The Team
          </motion.h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto group">
          {/* Subtle background glow */}
          <div className="absolute -inset-4 bg-nexus-accent/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)] bg-nexus-black/40 backdrop-blur-sm ring-1 ring-white/10 aspect-video"
          >
            <img 
              src={imageUrl} 
              alt="Digital Amnik Team" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Subtle glass reflection overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/10 opacity-30"></div>
            
            {/* Overlay text - Desktop Only */}
            <div className="absolute inset-0 bg-gradient-to-t from-nexus-black/80 via-transparent to-transparent pointer-events-none hidden md:flex items-end p-8 md:p-12">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-nexus-accent text-sm font-display font-bold uppercase tracking-[0.2em] mb-2">
                  Our Foundation
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-display font-bold tracking-tight">
                  The Digital Amnik Family
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Mobile Text - Below Card */}
          <div className="mt-6 md:hidden text-center">
            <p className="text-nexus-accent text-xs font-display font-bold uppercase tracking-[0.2em] mb-1">
              Our Foundation
            </p>
            <h3 className="text-white text-xl font-display font-bold tracking-tight">
              The Digital Amnik Family
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
