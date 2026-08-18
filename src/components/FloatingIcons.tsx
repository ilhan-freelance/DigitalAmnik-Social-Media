import { motion } from 'motion/react';
import { 
  BarChart3, 
  Megaphone, 
  Globe, 
  Search, 
  Mail, 
  Share2, 
  MousePointer2, 
  Target,
  TrendingUp,
  MessageSquare,
  Smartphone,
  Zap,
  Facebook,
  Instagram,
  Youtube,
  Camera,
  Video,
  Hash,
  MessageCircle,
  Send
} from 'lucide-react';
import React, { useMemo } from 'react';

const ICONS = [
  BarChart3, Megaphone, Globe, Search, Mail, Share2, 
  MousePointer2, Target, TrendingUp, MessageSquare, Smartphone, Zap,
  Facebook, Instagram, Youtube, Camera, Video, Hash, MessageCircle, Send
];

const NEON_BLUE = '#00f3ff';

export default function FloatingIcons() {
  // Generate random positions and animations for icons
  const floatingIcons = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const Icon = ICONS[i % ICONS.length];
      const size = Math.random() * 20 + 20; // 20px to 40px
      const left = Math.random() * 100; // 0% to 100%
      const top = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 20 + 20; // 20s to 40s
      const delay = Math.random() * -20; // Negative delay to start mid-animation
      
      return {
        id: i,
        Icon,
        size,
        left: `${left}%`,
        top: `${top}%`,
        duration,
        delay,
        color: NEON_BLUE,
        opacity: Math.random() * 0.15 + 0.05, // Subtle: 0.05 to 0.20
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {floatingIcons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute transform-gpu will-change-transform"
          style={{
            left: item.left,
            top: item.top,
            opacity: item.opacity,
            color: item.color,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay,
          }}
        >
          <item.Icon size={item.size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
