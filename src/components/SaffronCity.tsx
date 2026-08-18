import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SaffronCity() {
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
                Saffron City Gated Township —<br />
                <span className="text-[#d4af37]">₹5.5 Crore Sales in Just 6 Months</span>
              </h1>
              
              <p className="text-[#f5e9c0]/70 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                How Digital Amnik built awareness from scratch and drove high-quality plot sales through Audience Fusion, Meta Ads & Influencer Marketing
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">₹5.5 Cr</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Revenue Generated</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">6 Months</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Campaign Duration</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">18 Units</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Plots Sold</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">₹50</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Avg. Lead Cost</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">1200+</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Total Leads</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">120+</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Site Visits</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-[#e0d8c8]">
            <img 
              src="https://i.ibb.co/ks0x7D8P/Whats-App-Image-2025-12-22-at-10-41-35-PM.jpg" 
              alt="Saffron City Project Map" 
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
                  { label: 'Project', value: 'Saffron City Gated Township' },
                  { label: 'Location', value: 'Kota, Rajasthan' },
                  { label: 'Segment', value: 'Mid-Range Residential Plots' },
                  { label: 'Total Plots', value: '58 Residential Plots' },
                  { label: 'Units Sold', value: '18 Plots in 6 Months' },
                  { label: 'Marketing Agency', value: 'Digital Amnik' },
                  { label: 'Channels Used', value: 'Meta Ads + Influencer Marketing' },
                  { label: 'Lead Quality Ratio', value: 'Good : Bad = 6 : 4' },
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
                  <h4 className="text-base font-bold mb-2">Zero Brand Awareness — A Brand New Launch</h4>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    Saffron City was a completely new project when Digital Amnik took over its marketing. There was no existing brand recall, no audience base, and no digital presence to build on. The biggest challenge was not just lead generation — it was first making the market aware that this project even existed, and then building enough trust for buyers to consider investing in it.
                  </p>
                </div>
                <div className="bg-[#f7f5f0] border-l-4 border-[#d4af37] rounded-r-xl p-6">
                  <h4 className="text-base font-bold mb-2">No Defined Meta Audience for Mid-Range Plot Buyers</h4>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    Unlike ultra-luxury projects where HNI audiences are relatively well-defined on Meta, mid-range residential plot buyers don't have a clear, pre-built audience segment. The interest layers, income signals, and behavioural patterns for this buyer profile are scattered and overlapping — making standard targeting approaches ineffective and wasteful. This demanded a completely different strategy to identify and reach the right buyers at the right cost.
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
                    title: 'Audience Fusion — Our Core Innovation',
                    desc: 'Since mid-range plot buyers have no pre-defined Meta audience, we developed an "Audience Fusion" approach — blending multiple interest clusters, behavioural signals, and income proxies to construct a custom composite audience. This allowed us to reach the right buyer profile at scale while continuously refining based on engagement and lead quality data, achieving a strong 6:4 good-to-bad lead ratio.'
                  },
                  {
                    num: '2',
                    title: 'Awareness-First Meta Campaign',
                    desc: 'Before pushing for leads, we ran a targeted awareness phase on Facebook & Instagram to establish Saffron City\'s presence in the market. This brand-building foundation ensured that when lead generation ads launched, the audience already had familiarity and trust with the project — dramatically improving conversion rates.'
                  },
                  {
                    num: '3',
                    title: 'Influencer Marketing for Local Credibility',
                    desc: 'We partnered with relevant local and regional influencers to build organic buzz and social proof around Saffron City. Authentic influencer content showcasing the township\'s location, layout, and investment potential created trust among fence-sitters and drove a significant volume of high-intent inquiries.'
                  },
                  {
                    num: '4',
                    title: 'Lead Quality Optimisation',
                    desc: 'Rather than chasing volume alone, every campaign iteration was optimised for lead quality. Achieved an exceptional average CPL of just ₹50, with continuous A/B testing of creatives, landing pages, and audience segments — ensuring the sales team worked only the most promising 780 qualified leads from the 1200+ total pipeline.'
                  },
                  {
                    num: '5',
                    title: 'Sales Funnel Acceleration',
                    desc: 'A structured follow-up system was deployed to nurture all 1200+ leads — segmenting them by intent and moving qualified prospects from inquiry to site visit to booking. WhatsApp sequences, personalised communication, and regular sales pipeline reviews kept conversion velocity high across the 6-month campaign window.'
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
              </div>
            </section>

            {/* Results */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                Results Achieved
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { val: '₹5.5 Cr', lbl: 'Revenue in 6 months', gold: true },
                  { val: '1200+', lbl: 'Total leads generated' },
                  { val: '780', lbl: 'Qualified leads' },
                  { val: '120+', lbl: 'Site visits generated' },
                  { val: '18', lbl: 'Residential plots sold' },
                  { val: '₹50', lbl: 'Avg. cost per lead' },
                  { val: '6:4', lbl: 'Good to bad lead ratio' },
                  { val: '58', lbl: 'Total plots in project' },
                ].map((item, i) => (
                  <div key={i} className={`p-5 rounded-xl text-center border ${item.gold ? 'bg-[#d4af37]/10 border-[#d4af37]/40' : 'bg-[#f7f5f0] border-[#e0d8c8]'}`}>
                    <span className={`block text-xl md:text-2xl font-bold text-[#d4af37] mb-1`}>{item.val}</span>
                    <span className="text-[10px] text-[#6b6560] leading-tight block">{item.lbl}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Meta Ads', 'Influencer Marketing', 'Audience Fusion', 'Kota, Rajasthan', 'Residential Plots', 'Gated Township'].map(tag => (
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
                  '<strong>Brand built from zero</strong> — Digital Amnik took Saffron City from a completely unknown launch to a recognised township brand in Kota within 6 months, establishing strong market presence and buyer trust.',
                  '<strong>18 plots sold at an exceptional CPL of ₹50</strong> — for a mid-range project with no pre-existing audience definition on Meta, achieving ₹5.5 Crore in sales at this cost efficiency is a benchmark result.',
                  '<strong>Audience Fusion proved as a replicable model</strong> — the custom audience-building methodology developed for Saffron City solved a core problem for mid-range real estate marketing on Meta, and has since become a standard part of Digital Amnik\'s playbook.',
                  '<strong>120+ genuine site visits generated</strong> — every visit was a high-intent buyer, directly contributing to the 18 confirmed closings.'
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
                Starting from zero brand awareness and with no pre-defined Meta audience for mid-range plot buyers, <strong>Digital Amnik's Audience Fusion strategy, Meta Ads, and Influencer Marketing</strong> built Saffron City Gated Township into a recognised project — generating <strong>1200+ leads, 780 qualified prospects, 120+ site visits, and closing 18 plots worth ₹5.5 Crore in just 6 months.</strong> This case study proves that even a fresh launch in a crowded mid-range market can achieve extraordinary results with the right digital architecture.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
