import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function UrbanaTechnoPark() {
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
                Industrial Real Estate Case Study
              </div>
              
              <h1 className="text-3xl md:text-5xl font-medium text-[#f5e9c0] leading-tight mb-4">
                Urbana Techno Park by Bharat Landmark Realty —<br />
                <span className="text-[#d4af37]">₹8.5 Crore Revenue in Just 5 Months</span>
              </h1>
              
              <p className="text-[#f5e9c0]/70 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                How Digital Amnik cracked the invisible industrial buyer — selling high-ticket industrial plots in a completely cold market through content-first strategy, geo-precision targeting & influencer marketing
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">₹8.5 Cr</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Revenue Generated</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">5 Months</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Campaign Duration</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">7 Units</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Plots Sold</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">₹650</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Avg. Lead Cost</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">500+</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Quality Leads</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-[#d4af37]/20"></div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-medium text-[#d4af37]">50+</span>
                  <span className="text-[10px] md:text-xs text-[#f5e9c0]/50 uppercase tracking-wider">Site Visits</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Case Study Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-[#e0d8c8]"
            >
              <img 
                src="https://i.ibb.co/6cgxgmnD/IMG-6905.jpg" 
                alt="Urbana Techno Park Project Overview" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Overview */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                Project Overview
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: 'Project', value: 'Urbana Techno Park' },
                  { label: 'Developer', value: 'Bharat Landmark Realty' },
                  { label: 'Segment', value: 'Industrial Plotting' },
                  { label: 'Avg. Ticket Price', value: '₹2 Crore per Plot' },
                  { label: 'Campaign Duration', value: '5 Months' },
                  { label: 'Marketing Agency', value: 'Digital Amnik' },
                  { label: 'Target Buyer Profile', value: 'Business Owners, Manufacturers & Entrepreneurs' },
                  { label: 'Channels Used', value: 'Social Media + Meta Ads + Influencer Marketing' },
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
                  <h4 className="text-base font-bold mb-2">The Buyer is Invisible on Meta</h4>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    Urbana Techno Park's ideal buyers — business owners looking to expand, factory operators needing more space, manufacturing unit heads, and first-generation entrepreneurs starting new ventures — <strong>simply do not exist as a defined audience on Meta.</strong> Unlike residential buyers who can be reached through lifestyle targeting, industrial plot buyers have no clear interest layer, no behavioral signal, and no income proxy that Meta can map to. Reaching them required building a targeting methodology from scratch.
                  </p>
                </div>
                <div className="bg-[#f7f5f0] border-l-4 border-[#d4af37] rounded-r-xl p-6">
                  <h4 className="text-base font-bold mb-2">Zero Project Awareness in a Cold Market</h4>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    When Digital Amnik took on this project, Urbana Techno Park had <strong>no digital presence, no brand recall, and zero market awareness.</strong> Industrial buyers make high-stakes ₹2 Crore+ decisions — they research extensively, compare options, and almost never respond to cold ads from unknown projects. Trying to sell before building trust would have been an expensive mistake. The market had to be educated before it could be converted.
                  </p>
                </div>
                <div className="bg-[#f7f5f0] border-l-4 border-[#d4af37] rounded-r-xl p-6">
                  <h4 className="text-base font-bold mb-2">Geo-Targeting in a Wide Catchment Area</h4>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    Industrial projects attract buyers from a much wider geography than residential projects. With a large potential target area, the challenge was to <strong>identify the exact pockets and micro-locations</strong> from where genuinely qualified industrial buyers could be reached — without wasting budget on areas with low business density or low intent. Precision geo-targeting was not optional — it was critical to keeping CPL sustainable and lead quality high.
                  </p>
                </div>
                <div className="bg-[#f7f5f0] border-l-4 border-[#d4af37] rounded-r-xl p-6">
                  <h4 className="text-base font-bold mb-2">High Ticket Size = Long Decision Cycle</h4>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    At ₹2 Crore per plot, no buyer makes an impulse decision. The sales cycle for industrial real estate is significantly longer than residential — involving site visits, feasibility assessments, partner consultations, and financial planning. The campaign needed to <strong>nurture prospects across an extended journey</strong> rather than expect quick conversions from a single ad touchpoint.
                  </p>
                </div>
              </div>
            </section>

            {/* Strategy */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                Strategy by Digital Amnik
              </div>
              
              {/* Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#f7f5f0] border border-[#e0d8c8] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-2">Phase 1 — Month 1</div>
                  <h4 className="text-base font-bold mb-2">Awareness Before Ads</h4>
                  <p className="text-xs text-[#6b6560] leading-relaxed">Before spending a single rupee on lead generation, we invested in building brand presence and educating the market. Social media presence building, organic content, and influencer marketing laid the trust foundation that made our subsequent ads dramatically more effective.</p>
                </div>
                <div className="bg-[#f7f5f0] border border-[#e0d8c8] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-2">Phase 2 — Month 2 to 5</div>
                  <h4 className="text-base font-bold mb-2">Precision Lead Generation</h4>
                  <p className="text-xs text-[#6b6560] leading-relaxed">With awareness established, we launched hyper-targeted Meta lead generation campaigns with custom geo-targeting, industry-specific creatives, and a structured funnel to convert interested prospects into site visits and eventually confirmed sales.</p>
                </div>
              </div>

              {/* Journey Strip */}
              <div className="grid grid-cols-1 md:grid-cols-4 border border-[#e0d8c8] rounded-2xl overflow-hidden mb-8">
                {[
                  { month: 'Month 1', title: 'Social Presence Build', desc: 'Content foundation, brand identity & influencer onboarding' },
                  { month: 'Month 2', title: 'Ads Launch', desc: 'Meta lead gen with geo-precision & industry targeting', active: true },
                  { month: 'Month 3', title: 'Scale & Optimise', desc: 'Winning audiences scaled, lead quality refined' },
                  { month: 'Month 4-5', title: 'Convert & Close', desc: 'Site visits driven, pipeline closed — 7 units, ₹8.5 Cr', active: true },
                ].map((step, i) => (
                  <div key={i} className={`p-4 text-center border-r border-[#e0d8c8] last:border-r-0 ${step.active ? 'bg-[#d4af37]/5' : 'bg-[#f7f5f0]'}`}>
                    <div className="text-[9px] font-bold tracking-wider uppercase text-[#d4af37] mb-1">{step.month}</div>
                    <div className="text-xs font-bold mb-1">{step.title}</div>
                    <div className="text-[10px] text-[#6b6560] leading-tight">{step.desc}</div>
                  </div>
                ))}
              </div>

              {/* Strategy Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    num: '1',
                    title: 'Content-First: Problem–Solution Approach',
                    desc: 'Instead of launching with sales content, we built the brand through problem-solution storytelling. We created content that spoke directly to the real pain points of business owners — space constraints, leasing headaches, expansion challenges — and positioned owning an industrial plot as the strategic solution. This established credibility before we ever asked for a lead.'
                  },
                  {
                    num: '2',
                    title: 'Industry-Specific Content Targeting',
                    desc: 'We created content tailored to individual industry verticals — separate focused content for factory setups, warehouse operators, manufacturing units, and new entrepreneurs. Each piece spoke the language of that specific business owner, making the content feel personally relevant rather than generic — dramatically improving engagement and organic reach among the right audience.'
                  },
                  {
                    num: '3',
                    title: 'Influencer Marketing for Industrial Credibility',
                    desc: 'We partnered with credible business-focused and local industry influencers to position Urbana Techno Park as the go-to industrial investment in the region. Authentic influencer content — showcasing the project\'s infrastructure, connectivity, and business advantages — built trust and brand recall among decision-makers who are otherwise hard to reach through conventional ads.'
                  },
                  {
                    num: '4',
                    title: 'Geo-Precision Targeting — Finding the Right Pockets',
                    desc: 'With a wide potential target area, we ran a data-led geo-analysis to identify the exact industrial clusters, MSME belts, and business hubs where our ideal buyers were concentrated. Rather than blanketing the entire region, we targeted specific micro-locations with high business density — keeping lead quality high and CPL at an efficient ₹650, exceptional for a ₹2 Crore ticket size product.'
                  },
                  {
                    num: '5',
                    title: 'Custom Audience Engineering for Invisible Buyers',
                    desc: 'Since industrial plot buyers have no pre-built Meta audience definition, we engineered a custom audience framework — combining business ownership signals, MSME-related behavior patterns, local commercial activity indicators, and lookalike modeling from early responders. This custom audience stack became the engine that delivered 500+ quality leads at a viable cost from a buyer profile that was otherwise impossible to reach.'
                  },
                  {
                    num: '6',
                    title: 'Long-Cycle Nurturing & Sales Funnel Management',
                    desc: 'Understanding that ₹2 Crore industrial decisions take time, we deployed a structured multi-touch nurturing system — WhatsApp follow-up sequences, personalised outreach, project highlight decks, and consistent retargeting across the funnel. This kept Urbana Techno Park top-of-mind through a buyer\'s extended decision journey and directly contributed to converting 50+ site visits into 7 confirmed closings.'
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

            {/* Industry Content Section */}
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-4 pb-2 border-b border-[#d4af37]/20">
                Industry-Specific Content We Built
              </div>
              <p className="text-sm text-[#6b6560] leading-relaxed mb-6">
                One of our most effective moves was creating content focused on <strong className="text-[#1a1a1a]">individual industry setups</strong> — each piece speaking directly to a specific type of buyer rather than a generic audience. This vertical content approach made every business owner feel like the project was built exactly for them.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: '🏭', label: 'Factory Setup' },
                  { icon: '📦', label: 'Warehouse & Logistics' },
                  { icon: '⚙️', label: 'Manufacturing Unit' },
                  { icon: '🚀', label: 'New Entrepreneur' },
                  { icon: '🔧', label: 'Business Expansion' },
                  { icon: '🏗️', label: 'Workshop & Fabrication' },
                  { icon: '📊', label: 'MSME & SME Units' },
                  { icon: '🌐', label: 'Export-Oriented Units' },
                ].map((pill, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg px-4 py-2 text-xs font-medium">
                    <span>{pill.icon}</span>
                    <span>{pill.label}</span>
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
                  { val: '₹8.5 Cr', lbl: 'Revenue in 5 months', gold: true },
                  { val: '7', lbl: 'Industrial plots sold' },
                  { val: '500+', lbl: 'Quality leads generated' },
                  { val: '50+', lbl: 'Site visits driven' },
                  { val: '₹650', lbl: 'Avg. cost per lead' },
                  { val: '₹2 Cr', lbl: 'Avg. ticket price per unit' },
                  { val: '1 Month', lbl: 'Awareness before first ad' },
                  { val: '5 Mo.', lbl: 'Total campaign duration' },
                ].map((item, i) => (
                  <div key={i} className={`p-5 rounded-xl text-center border ${item.gold ? 'bg-[#d4af37]/10 border-[#d4af37]/40' : 'bg-[#f7f5f0] border-[#e0d8c8]'}`}>
                    <span className={`block text-xl md:text-2xl font-bold text-[#d4af37] mb-1`}>{item.val}</span>
                    <span className="text-[10px] text-[#6b6560] leading-tight block">{item.lbl}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Meta Ads', 'Influencer Marketing', 'Industrial Plotting', 'Content-First Strategy', 'Geo-Precision Targeting', 'Bharat Landmark Realty'].map(tag => (
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
                  '<strong>Cracked the hardest buyer profile in real estate</strong> — industrial plot buyers are among the most difficult to reach on digital platforms. Digital Amnik built a targeting framework from scratch and delivered 500+ quality leads from a profile that had no Meta audience definition.',
                  '<strong>₹8.5 Crore in sales at ₹650 CPL</strong> — for a ₹2 Crore ticket product, an average lead cost of ₹650 represents exceptional efficiency. Every rupee spent on marketing delivered extraordinary ROI in the context of high-value industrial real estate.',
                  '<strong>Content-first strategy proved its ROI</strong> — the deliberate choice to build awareness for a full month before running ads meant that when campaigns launched, the audience already knew and trusted the brand. This reduced resistance and dramatically improved lead-to-visit conversion rates.',
                  '<strong>Bharat Landmark Realty established as a credible industrial developer</strong> — through consistent content, influencer partnerships, and a visible digital presence, the brand earned a reputation in the industrial real estate space that extends well beyond this single campaign.',
                  '<strong>A replicable playbook for industrial real estate marketing</strong> — the audience engineering, content verticalization, and geo-precision methodology developed for Urbana Techno Park now serves as Digital Amnik\'s blueprint for all future industrial and commercial real estate campaigns.'
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
                Industrial plot buyers are invisible on Meta. There is no pre-built audience, no clear interest layer, and no standard targeting playbook. Despite these odds, <strong>Digital Amnik's content-first approach, custom audience engineering, industry-specific content strategy, and geo-precision targeting</strong> delivered <strong>500+ quality leads, 50+ site visits, and ₹8.5 Crore in sales across 7 units — all within 5 months.</strong> Urbana Techno Park is proof that with the right strategy, even the most unconventional buyer can be found, nurtured, and converted at scale.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
