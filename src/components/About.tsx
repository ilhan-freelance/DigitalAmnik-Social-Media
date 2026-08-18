import { motion } from 'motion/react';
import { Users, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-nexus-cyan text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
              Our Story
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
              Who We <span className="text-gradient">Are</span>
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
              <p>
                Digital Amnik is a 360° digital marketing agency and your trusted partner in the ever-evolving digital landscape. Based in India since 2020.
              </p>
              <p>
                We offer comprehensive digital marketing solutions that drive results. Our journey began with a mission to help businesses transform into brands by establishing a robust online presence.
              </p>
              <p>
                Since our inception, we have assisted over 300+ brands in making their mark on digital media, guiding them through every step of their digital transformation journey.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-3xl group hover:border-nexus-cyan/50 transition-all duration-500">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white group-hover:text-nexus-cyan transition-colors">
                  <Lightbulb className="w-6 h-6 text-nexus-accent group-hover:text-nexus-cyan transition-colors" />
                  Our Philosophy
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  We believe in building strong, lasting partnerships. We work with you, ensuring every campaign is a step towards your brand's success.
                </p>
              </div>
              <div className="glass-card p-8 rounded-3xl group hover:border-nexus-cyan/50 transition-all duration-500">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white group-hover:text-nexus-cyan transition-colors">
                  <Users className="w-6 h-6 text-nexus-accent group-hover:text-nexus-cyan transition-colors" />
                  Our Hive
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  A dedicated team of 25+ experts working together like bees in a hive to handle all kinds of brands with flexibility and hard work.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-nexus-accent/10 blur-[100px] rounded-full"></div>
            <div className="relative glass-card rounded-[3rem] p-12 text-center border-white/5 group hover:border-nexus-cyan/30 transition-all duration-700">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full mb-8 overflow-hidden border-2 border-white/10 group-hover:border-nexus-cyan/50 transition-all duration-700 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="https://i.ibb.co/sJyzC9Vf/IMG-2647-1.png" 
                      alt="Amaan Khan" 
                      className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">Amaan Khan</h4>
                <p className="text-nexus-cyan text-sm font-bold uppercase tracking-widest mb-1">Founder & Director</p>
                <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Proud BNI Member</p>
                <p className="text-gray-400 text-lg italic leading-relaxed max-w-sm mx-auto">
                  "An engineer by qualification but a digital marketer by passion. His dynamic vision transforms businesses into brands."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
