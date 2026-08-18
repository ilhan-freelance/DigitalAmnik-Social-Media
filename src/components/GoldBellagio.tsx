import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function GoldBellagio() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#d4af37] selection:text-white">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="max-w-[900px] mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl mb-10 text-center py-16 px-8"
            style={{ background: 'linear-gradient(135deg, #1a1200 0%, #3d2c00 50%, #1a1200 100%)' }}
          >
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 20px)' }}></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-[#d4af37]/20 text-[#d4af37] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-[#d4af37]/30 mb-6">
                Real Estate Case Study
              </div>
              
              <h1 className="text-3xl md:text-5xl font-medium text-[#f5e9c0] leading-tight mb-4">
                Gold Bellagio by KGV Infra —<br />
                <span className="text-[#d4af37]">₹6.5 Crore Sales in Just 3 Months</span>
              </h1>
              
              <p className="text-[#f5e9c0]/70 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                How Digital Amnik revived a stalled ultra-luxury project in Kota with precision Meta Ads and Influencer Marketing
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">₹6.5 Cr</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Revenue Generated</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">3 Months</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Campaign Duration</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">6 Units</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Inventory Sold</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">₹500</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Cost Per Lead</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">450+</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Total Leads</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">48</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Site Visits</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-[#e0d8c8]">
            <img 
              src="https://i.ibb.co/v4hkzmPw/13-1.jpg" 
              alt="Gold Bellagio Project" 
              className="w-full h-auto max-h-[480px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Overview */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                Project Overview
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: 'Project', value: 'Gold Bellagio' },
                  { label: 'Developer', value: 'KGV Infra' },
                  { label: 'Location', value: 'Kota, Rajasthan' },
                  { label: 'Segment', value: 'Ultra Luxury Apartments' },
                  { label: '3BHK Starting Price', value: '₹75 Lakh onwards' },
                  { label: '4BHK Starting Price', value: '₹1.20 Crore onwards' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f7f5f0] border border-[#e0d8c8] rounded-xl p-4">
                    <div className="text-[10px] text-[#6b6560] uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-base font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenge */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                The Challenge
              </div>
              <div className="space-y-4">
                <div className="bg-[#f7f5f0] border-l-4 border-[#d4af37] rounded-r-xl p-6">
                  <h4 className="text-base font-bold mb-2">Slow Sales & Stuck Inventory</h4>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    Gold Bellagio is Kota's most premium residential offering — but the ultra-luxury segment in a Tier-2 city comes with a unique challenge. Despite a superior product, the project was struggling to convert interest into visits. The real problem ran deeper: with their previous digital marketing team, bulk leads were coming in — but the quality was so poor that <strong>not a single site visit had been generated.</strong> High ticket size, a completely unqualified lead pool, and zero footfall had created a critical bottleneck in the sales pipeline.
                  </p>
                </div>
                <div className="bg-[#f7f5f0] border-l-4 border-[#d4af37] rounded-r-xl p-6">
                  <h4 className="text-base font-bold mb-2">Narrow Target Audience in a Tier-2 Market</h4>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    Luxury buyers in Kota — HNIs, senior professionals, and NRIs — are a small, hard-to-reach segment. Traditional marketing wasn't cutting through. The brand needed a credibility boost and hyper-targeted digital reach to unlock this buyer pool.
                  </p>
                </div>
              </div>
            </section>

            {/* Strategy */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                Strategy by Digital Amnik
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    num: '1',
                    title: 'Hyper-Targeted Meta Ads',
                    desc: 'Precision audience targeting on Facebook & Instagram focused on HNIs, businessmen, senior govt. professionals, and Kota diaspora. Custom creatives showcasing luxury amenities and lifestyle positioning to attract serious buyers.'
                  },
                  {
                    num: '2',
                    title: 'Influencer Marketing',
                    desc: 'Partnered with relevant local and regional influencers to build social proof and aspirational desire around the Gold Bellagio brand. Authentic content created trust among high-intent luxury buyers who were sitting on the fence.'
                  },
                  {
                    num: '3',
                    title: 'Lead Quality Optimisation',
                    desc: 'Campaigns were continuously refined to maximise lead quality, not just volume. Achieved an industry-beating CPL of just ₹500, ensuring the sales team spent time only on genuinely interested, qualified prospects.'
                  },
                  {
                    num: '4',
                    title: 'Sales Funnel Acceleration',
                    desc: 'A structured follow-up system was deployed to nurture all 450+ leads — from initial inquiry to site visit to booking. WhatsApp sequences, personalised communication, and regular sales pipeline reviews kept conversion velocity high.'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-[#f7f5f0] border border-[#e0d8c8] rounded-2xl p-6">
                    <div className="w-8 h-8 bg-[#d4af37]/15 text-[#d4af37] rounded-full flex items-center justify-center text-xs font-bold mb-4">
                      {item.num}
                    </div>
                    <h4 className="text-base font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-[#6b6560] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                <div className="md:col-span-2 bg-[#d4af37]/5 border border-[#d4af37]/30 rounded-2xl p-6">
                  <div className="w-8 h-8 bg-[#d4af37]/25 text-[#d4af37] rounded-full flex items-center justify-center text-xs font-bold mb-4">
                    5
                  </div>
                  <h4 className="text-base font-bold mb-2">Navratri Festive Offer — Creating Hype at the Right Moment</h4>
                  <p className="text-xs text-[#6b6560] leading-relaxed">
                    We strategically leveraged the Navratri festive season by launching exclusive limited-time offers tied to the occasion. This was amplified through influencer marketing — creators promoted the festive deal with high-energy content that generated urgency and aspirational desire simultaneously. The combination of a compelling offer, cultural timing, and influencer reach created a powerful hype cycle that drove a surge in high-intent inquiries and site visits during the campaign's peak window.
                  </p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                Results Achieved
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { val: '₹6.5 Cr', lbl: 'Inventory sold in 3 months', gold: true },
                  { val: '450+', lbl: 'Qualified leads generated' },
                  { val: '6', lbl: 'Ultra-luxury units booked' },
                  { val: '₹500', lbl: 'Cost per lead achieved' },
                ].map((item, i) => (
                  <div key={i} className={`p-5 rounded-xl text-center border ${item.gold ? 'bg-[#d4af37]/10 border-[#d4af37]/40' : 'bg-[#f7f5f0] border-[#e0d8c8]'}`}>
                    <span className={`block text-xl md:text-2xl font-bold text-[#d4af37] mb-1`}>{item.val}</span>
                    <span className="text-[10px] text-[#6b6560] leading-tight block">{item.lbl}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Meta Ads', 'Influencer Marketing', 'Kota, Rajasthan', 'Luxury Real Estate', '3BHK + 4BHK'].map(tag => (
                  <span key={tag} className="bg-[#f7f5f0] border border-[#e0d8c8] rounded-full px-3 py-1 text-[10px] text-[#6b6560] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Impact */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                Impact for the Developer
              </div>
              <div className="space-y-3">
                {[
                  '<strong>Inventory movement restarted</strong> — after a slow phase, Digital Amnik\'s campaign injected fresh momentum and helped KGV Infra close 6 high-value units within 90 days.',
                  '<strong>Brand positioned as Kota\'s #1 ultra-luxury address</strong> — consistent premium messaging across Meta and influencer content elevated Gold Bellagio\'s perception among the city\'s elite.',
                  '<strong>Highly cost-efficient pipeline</strong> — at ₹500 CPL, the campaign delivered exceptional ROI for a luxury real estate product, with every lead being a qualified, high-intent buyer.',
                  '<strong>New digital-first benchmark set</strong> — Gold Bellagio\'s success proved that ultra-luxury real estate in Tier-2 cities can be effectively marketed and sold through precision digital campaigns.'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 bg-[#f7f5f0] border border-[#e0d8c8] rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0"></div>
                    <p className="text-sm text-[#6b6560] leading-relaxed" dangerouslySetInnerHTML={{ __html: text }}></p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-[#f7f5f0] border border-[#e0d8c8] rounded-2xl p-8 text-center">
              <p className="text-base text-[#6b6560] leading-relaxed max-w-2xl mx-auto">
                Despite operating in a niche luxury segment in a Tier-2 market, <strong>Digital Amnik's data-driven Meta Ads and influencer strategy</strong> successfully revived Gold Bellagio's sales pipeline — generating <strong>450+ leads, closing 6 units, and achieving ₹6.5 Crore in revenue within just 3 months.</strong> This case study is proof that the right digital strategy can unlock any market.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
