import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Search, 
  Globe, 
  Sparkles, 
  Check, 
  Copy, 
  ArrowUpRight,
  Filter,
  Monitor,
  LayoutGrid
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const img1 = new URL('../assets/images/regenerated_image_1786173424501.png', import.meta.url).href;
const img2 = new URL('../assets/images/regenerated_image_1786173429058.png', import.meta.url).href;
const img3 = new URL('../assets/images/regenerated_image_1786173434602.png', import.meta.url).href;
const img4 = new URL('../assets/images/regenerated_image_1786173440856.png', import.meta.url).href;
const img5 = new URL('../assets/images/regenerated_image_1786173443889.png', import.meta.url).href;
const img6 = new URL('../assets/images/regenerated_image_1786174324237.png', import.meta.url).href;
const img7 = new URL('../assets/images/regenerated_image_1786174329761.png', import.meta.url).href;
const img8 = new URL('../assets/images/regenerated_image_1786174334545.png', import.meta.url).href;
const img9 = new URL('../assets/images/regenerated_image_1786174348693.png', import.meta.url).href;
const img10 = new URL('../assets/images/regenerated_image_1786174352325.png', import.meta.url).href;
const img11 = new URL('../assets/images/regenerated_image_1786174348693.png', import.meta.url).href;
const img12 = new URL('../assets/images/regenerated_image_1786174352325.png', import.meta.url).href;
const img13 = new URL('../assets/images/regenerated_image_1786174356173.png', import.meta.url).href;

interface PortfolioItem {
  id: string;
  title: string;
  url: string;
  domain: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  featured?: boolean;
}

const portfolioProjects: PortfolioItem[] = [
  {
    id: 'teddy-bear-dubai',
    title: 'Teddy Bear Dubai',
    url: 'https://teddybeardubai.com/',
    domain: 'teddybeardubai.com',
    category: 'E-Commerce & Retail',
    tags: ['E-Commerce', 'Dubai Retail', 'Luxury Gifts'],
    description: 'High-end e-commerce store built for plush toys, custom gifts, and luxury delivery in Dubai.',
    image: img1,
    featured: true
  },
  {
    id: 'aventara',
    title: 'Aventara',
    url: 'https://aventara.co/',
    domain: 'aventara.co',
    category: 'Agency & Tech',
    tags: ['Agency', 'Corporate', 'Digital Solutions'],
    description: 'Modern corporate digital agency portal with sleek interactive UI and ultra-fast performance.',
    image: img2,
    featured: true
  },
  {
    id: 'alamana-international',
    title: 'Al Amana International',
    url: 'https://alamanainternational.com/',
    domain: 'alamanainternational.com',
    category: 'Corporate & Logistics',
    tags: ['International Trade', 'Logistics', 'Enterprise'],
    description: 'Global trading & international enterprise website highlighting corporate logistics and services.',
    image: img3,
  },
  {
    id: 'altriva-studio',
    title: 'Altriva Studio',
    url: 'https://altrivastudio.com/',
    domain: 'altrivastudio.com',
    category: 'Architecture & Interiors',
    tags: ['Interior Design', 'Architecture', 'Creative Studio'],
    description: 'Luxury architectural and interior design studio showcasing high-profile residential & commercial projects.',
    image: img4,
    featured: true
  },
  {
    id: 'saffron-city',
    title: 'Saffron City',
    url: 'https://saffroncity.com/',
    domain: 'saffroncity.com',
    category: 'Real Estate & Infrastructure',
    tags: ['Real Estate', 'Luxury Living', 'Property Showcase'],
    description: 'Saffron City real estate website showcasing premium residential developments, modern amenities, and master-planned living.',
    image: img5,
    featured: true
  },
  {
    id: 'toofit-luxury',
    title: 'Toofit Luxury Design',
    url: 'https://toofitluxury.com/',
    domain: 'toofitluxury.com',
    category: 'Luxury & Fashion',
    tags: ['Fashion Design', 'Luxury Brand', 'Showcase'],
    description: 'Sophisticated luxury fashion and aesthetic design studio portal with high-impact visuals.',
    image: img6,
  },
  {
    id: 'tilak-stone-arts',
    title: 'Tilak Stone Arts',
    url: 'https://www.tilakstonearts.com/',
    domain: 'tilakstonearts.com',
    category: 'Architecture & Interiors',
    tags: ['Stone Crafting', 'Mandir Architecture', 'Artisan'],
    description: 'Official digital presence for bespoke natural stone architecture, mandirs, and artisan stone sculptures.',
    image: img7,
  },
  {
    id: 'tivagro-digital',
    title: 'Tivagro Digital',
    url: 'https://tivagrodigital.com/',
    domain: 'tivagrodigital.com',
    category: 'Agency & Tech',
    tags: ['Social Media Marketing', 'Branding', 'Digital Agency'],
    description: 'Premier Social Media Marketing and Branding company specializing in digital campaigns, brand strategy, and growth marketing.',
    image: img8,
  },
  {
    id: 'sankalp-builders',
    title: 'Sankalp Builders',
    url: 'https://sankalpbuilders.com/',
    domain: 'sankalpbuilders.com',
    category: 'Real Estate & Infrastructure',
    tags: ['Real Estate', 'Townships', 'Property Developer'],
    description: 'Premier real estate developer website highlighting residential townships, luxury apartments, and commercial hubs.',
    image: img9,
    featured: true
  },
  {
    id: 'serene-concierge',
    title: 'Serene Concierge',
    url: 'https://sereneconcierge.com/',
    domain: 'sereneconcierge.com',
    category: 'Real Estate & Infrastructure',
    tags: ['Real Estate', 'Asset Management', 'Bespoke Events'],
    description: 'Real Estate, Asset Management, and Bespoke Events Management company offering tailored property portfolios and luxury experiences.',
    image: img10,
  },
  {
    id: 'home-sarathi',
    title: 'Home Sarathi',
    url: 'https://www.homesarathi.com/',
    domain: 'homesarathi.com',
    category: 'Real Estate & Infrastructure',
    tags: ['Property Search', 'Real Estate', 'Advisory'],
    description: 'Comprehensive property advisory and home buying platform connecting buyers with vetted real estate projects.',
    image: img11,
  },
  {
    id: 'moneytree-realty',
    title: 'Moneytree Realty',
    url: 'https://moneytreerealty.com/',
    domain: 'moneytreerealty.com',
    category: 'Real Estate & Infrastructure',
    tags: ['Commercial Real Estate', 'Luxury Residential', 'Advisory'],
    description: 'Leading real estate advisory enterprise portal for commercial hubs and luxury residential properties.',
    image: img12,
    featured: true
  },
  {
    id: 'sun-interiors-pune',
    title: 'Sun Interiors Pune',
    url: 'https://www.suninteriorspune.com/',
    domain: 'suninteriorspune.com',
    category: 'Architecture & Interiors',
    tags: ['Interior Decor', 'Turnkey Interiors', 'Pune'],
    description: 'Luxury interior design studio website exhibiting residential turnkey interiors and modern workspace transformations.',
    image: img13,
  },
  {
    id: 'vidhya-architects',
    title: 'Vidhya Architects',
    url: 'https://www.vidhyaarchitects.com/',
    domain: 'vidhyaarchitects.com',
    category: 'Architecture & Interiors',
    tags: ['Architectural Design', 'Urban Planning', 'Engineering'],
    description: 'Architectural design & urban planning firm showcasing sustainable structures, masterplans, and building engineering.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  }
];

const categories = [
  'All Projects',
  'Real Estate & Infrastructure',
  'Architecture & Interiors',
  'Agency & Tech',
  'E-Commerce & Retail',
  'Luxury & Fashion',
  'Web Apps & Creative'
];

export default function WebsitePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All Projects' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.domain.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-nexus-black text-white font-sans selection:bg-nexus-cyan selection:text-black">
      <Navbar />

      <main className="pt-28 pb-24 relative overflow-hidden">
        {/* Background Subtle Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-nexus-cyan/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-nexus-cyan transition-colors mb-10 group text-sm font-semibold tracking-wide"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-nexus-cyan text-xs font-bold uppercase tracking-[0.25em] mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Website Design Showcase
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Crafted For Impact. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-cyan via-blue-400 to-purple-400">
                Built For Conversion.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Explore our curated portfolio of live websites, custom web apps, and enterprise platforms designed and engineered by Digital Amnik.
            </p>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">150+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Websites Delivered</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-nexus-cyan">99.8%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Uptime & Speed</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">14+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Industries Served</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-purple-400">4.9/5</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Controls: Search + Filter Tabs */}
          <div className="space-y-6 mb-12">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by brand, domain, or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-nexus-cyan transition-colors backdrop-blur-md"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white bg-white/10 px-2 py-0.5 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400 self-end md:self-auto">
                <LayoutGrid className="w-4 h-4 text-nexus-cyan" />
                Showing <span className="text-white font-bold">{filteredProjects.length}</span> of {portfolioProjects.length} projects
              </div>
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <Filter className="w-4 h-4 text-gray-500 flex-shrink-0 mr-1" />
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-nexus-cyan text-black shadow-lg shadow-nexus-cyan/20'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Portfolio Grid */}
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/[0.02] rounded-3xl border border-white/5"
            >
              <Globe className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-400 text-sm mb-6">
                No matching website projects found for "{searchQuery}". Try clearing your search filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Projects');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-nexus-cyan transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="group relative bg-white/[0.03] rounded-3xl border border-white/10 hover:border-nexus-cyan/40 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-nexus-cyan/10 backdrop-blur-md transform-gpu"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nexus-black via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                        {/* Top Overlay Badge */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="px-2.5 py-0.5 rounded-full bg-nexus-cyan text-black text-[10px] font-bold uppercase tracking-wider shadow-md">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Domain bar mock browser pill */}
                        <div className="absolute bottom-3 left-4 right-4 bg-black/80 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <Monitor className="w-3.5 h-3.5 text-nexus-cyan flex-shrink-0" />
                            <span className="text-xs font-mono text-gray-300 truncate">
                              {project.domain}
                            </span>
                          </div>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-lg bg-white/10 hover:bg-nexus-cyan hover:text-black text-white transition-colors flex-shrink-0"
                            title="Open live website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-nexus-cyan transition-colors flex items-center justify-between">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action bar */}
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
                      <button
                        onClick={() => handleCopyLink(project.url, project.id)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold transition-colors border border-white/5"
                        title="Copy link"
                      >
                        {copiedId === project.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-nexus-cyan" />
                            <span className="text-nexus-cyan">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy URL</span>
                          </>
                        )}
                      </button>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-nexus-cyan text-black font-bold text-xs rounded-xl transition-all duration-300 group/btn"
                      >
                        Visit Website
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* CTA Banner Section at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 relative rounded-3xl p-8 md:p-14 bg-gradient-to-r from-nexus-cyan/10 via-purple-500/10 to-blue-500/10 border border-white/10 overflow-hidden backdrop-blur-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-nexus-cyan text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                Ready to elevate your digital presence?
              </span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Want a stunning website like these for your business?
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We design custom, high-converting websites tailored to your brand identity, optimized for speed, mobile responsiveness, and high search visibility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <a
                href="/#contact"
                className="px-8 py-4 bg-nexus-cyan text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-nexus-cyan/20 text-xs uppercase tracking-widest flex items-center gap-2"
              >
                Get Free Quote
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
