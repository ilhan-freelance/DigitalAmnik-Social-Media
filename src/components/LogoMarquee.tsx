import { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Repeat } from 'lucide-react';

const logos = [
  "https://i.ibb.co/7xVbp7L7/1.png",
  "https://i.ibb.co/Rkv9MHqr/2.png",
  "https://i.ibb.co/KcTRwHFy/3.png",
  "https://i.ibb.co/FbBGcYHF/4.png",
  "https://i.ibb.co/RTDDKkwL/5.png",
  "https://i.ibb.co/KxtKkqys/6.png",
  "https://i.ibb.co/qL8xDWTt/7.png",
  "https://i.ibb.co/xqwBdgWv/8.png",
  "https://i.ibb.co/9kYCFYYt/9.png",
  "https://i.ibb.co/dw12pC6F/10.png",
  "https://i.ibb.co/R4ghDV45/11.png",
  "https://i.ibb.co/qM0Hx0kt/12.png",
  "https://i.ibb.co/mrpPdkQG/13.png",
  "https://i.ibb.co/6RjJSPsb/14.png",
  "https://i.ibb.co/Zt1pykH/15.png",
  "https://i.ibb.co/DHBnZLbQ/16.png",
  "https://i.ibb.co/ym9QYLHT/17.png",
  "https://i.ibb.co/FkM0fmDG/18.png",
  "https://i.ibb.co/S4hpw0Fd/19.png"
];

export default function LogoMarquee() {
  const [viewMode, setViewMode] = useState<'grid' | 'marquee'>('marquee');

  return (
    <section className="bg-white text-gray-900 py-16 md:py-24 relative overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Trusted by 300+ Industry Leaders
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Our Valued Clients & Partners
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
          We pride ourselves on driving measurable results for leading brands across Real Estate, Hospitality, Healthcare, and local businesses.
        </p>

        {/* View mode toggle */}
        <div className="inline-flex items-center p-1 bg-gray-100 rounded-xl border border-gray-200 gap-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            All Clients
          </button>
          <button
            onClick={() => setViewMode('marquee')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'marquee'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Repeat className="w-4 h-4" />
            Ticker View
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        /* Full Grid Section showing ALL logos */
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.02 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-white hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group min-h-[100px] transform-gpu"
              >
                <img
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="max-h-12 md:max-h-16 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        /* Continuous Marquee Ticker Section on Full White Background */
        <div className="relative py-6 bg-gray-50 border-y border-gray-100">
          <div className="flex relative overflow-hidden mb-6">
            <motion.div
              className="flex items-center gap-12 md:gap-20 flex-nowrap will-change-transform transform-gpu"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center min-w-[140px] md:min-w-[180px] h-20 transform-gpu"
                >
                  <img
                    src={logo}
                    alt={`Partner Logo ${index % logos.length}`}
                    className="max-h-12 md:max-h-14 w-auto max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex relative overflow-hidden">
            <motion.div
              className="flex items-center gap-12 md:gap-20 flex-nowrap will-change-transform transform-gpu"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].reverse().map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-w-[140px] md:min-w-[180px] h-20"
                >
                  <img
                    src={logo}
                    alt={`Partner Logo ${index % logos.length}`}
                    className="max-h-12 md:max-h-14 w-auto max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        </div>
      )}
    </section>
  );
}

