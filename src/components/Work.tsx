import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Gold Bellagio By KGV Infra',
    category: 'Lead Gen Case Study',
    link: '/case-study/gold-bellagio',
    image: 'https://i.ibb.co/v4hkzmPw/13-1.jpg',
  },
  {
    title: 'Saffron City Township',
    category: 'Lead Gen Case Study',
    link: '/case-study/saffron-city',
    image: 'https://i.ibb.co/h17TszPr/43-r9rkpf44kjzkyxfx4uinokkvthpvihy91u54yj6j5c.webp',
  },
  {
    title: 'Urbana Techno Park',
    category: 'Lead Gen Case Study',
    link: '/case-study/urbana-techno-park',
    image: 'https://i.ibb.co/6cgxgmnD/IMG-6905.jpg',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Real Estate Lead Gen Case Studies Section */}
        <div id="case-studies">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Real Estate Lead Gen Case Studies
              </h2>
              <p className="text-gray-400 max-w-xl text-lg">
                Detailed breakdowns of our most successful lead generation campaigns in the real estate sector.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                to={study.link}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-nexus-accent/50 transition-all duration-500 backdrop-blur-md z-10"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-nexus-accent font-medium mb-2 block">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-nexus-accent transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white font-semibold group/btn">
                      View Case Study
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
