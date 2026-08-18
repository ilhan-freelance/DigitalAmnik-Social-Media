import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Search, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface InstagramAccount {
  id: string;
  name: string;
  handle: string;
  category: string;
  instagramUrl: string;
  avatarUrl: string;
  description: string;
  isVerified?: boolean;
}

const instagramAccounts: InstagramAccount[] = [
  {
    id: 'aventara-jewels',
    name: 'Aventara Jewels',
    handle: '@aventara_jewels',
    category: 'Retail & Fashion',
    instagramUrl: 'https://www.instagram.com/aventara_jewels?igsh=MWJoYzgzNzkyZzEwOQ==',
    avatarUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Fine luxury jewelry & bespoke bridal ornament collections.'
  },
  {
    id: 'just4utravels',
    name: 'Just 4 U Travels',
    handle: '@just4utravels',
    category: 'Hospitality & Lifestyle',
    instagramUrl: 'https://www.instagram.com/just4utravels?igsh=MWhwY24zcnowZ3plaA==',
    avatarUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Custom travel itineraries, luxury tours & vacation packages.'
  },
  {
    id: 'kgvinfra',
    name: 'Gold Bellagio By KGV Infra',
    handle: '@kgvinfra',
    category: 'Real Estate',
    instagramUrl: 'https://www.instagram.com/kgvinfra?igsh=NW43dzlqbWd2MWpp',
    avatarUrl: 'https://i.ibb.co/v4hkzmPw/13-1.jpg',
    isVerified: true,
    description: 'Luxury township & plot showcase campaigns driving qualified buyer inquiries.'
  },
  {
    id: 'drishtieyecarehospital',
    name: 'Drishti Eye Care Hospital',
    handle: '@drishtieyecarehospital_',
    category: 'Healthcare',
    instagramUrl: 'https://www.instagram.com/drishtieyecarehospital_?igsh=NnZycHpldHMyYmZp',
    avatarUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Advanced ophthalmic treatments & comprehensive eye health awareness.'
  },
  {
    id: 'draditmgarg',
    name: 'Dr. Aditm Garg',
    handle: '@dr.aditmgarg',
    category: 'Healthcare',
    instagramUrl: 'https://www.instagram.com/dr.aditmgarg?igsh=d3RqemZhYXVnanFv&igsi=d3RqemZhYXVnanFv',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Specialist medical consultation, patient wellness & healthcare leadership.'
  },
  {
    id: 'kotaeye',
    name: 'Kota Eye Hospital',
    handle: '@kotaeye',
    category: 'Healthcare',
    instagramUrl: 'https://www.instagram.com/kotaeye?igsh=aGVuZWtmazdscWQx',
    avatarUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Leading super-specialty eye care & surgical excellence.'
  },
  {
    id: 'sumangalamgroupkota',
    name: 'Sumangalam Group',
    handle: '@sumangalamgroupkota',
    category: 'Real Estate',
    instagramUrl: 'https://www.instagram.com/sumangalamgroupkota?igsh=NXpiOGg0NmgyYzU2',
    avatarUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Prime real estate developments & modern infrastructure.'
  },
  {
    id: 'shubharise',
    name: 'Shubh Arise',
    handle: '@shubh_arise',
    category: 'Real Estate',
    instagramUrl: 'https://www.instagram.com/shubh_arise?igsh=dXAzMW5tMGhwd2Fn',
    avatarUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Modern residential living spaces & luxury apartments.'
  },
  {
    id: 'plywoodwale',
    name: 'Plywoodwale',
    handle: '@plywoodwale_com',
    category: 'Education & Tech',
    instagramUrl: 'https://www.instagram.com/plywoodwale_com?igsh=NXkxa21vZG1hcms3',
    avatarUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
    isVerified: false,
    description: 'Quality interior plywood, laminates & architectural hardware.'
  },
  {
    id: 'bharatlandmarkrealty',
    name: 'Bharat Landmark Realty',
    handle: '@bharatlandmarkrealty',
    category: 'Real Estate',
    instagramUrl: 'https://www.instagram.com/bharatlandmarkrealty?igsh=MWpzcWRraTA5bG45Yw==',
    avatarUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Trusted real estate advisory & commercial property showcase.'
  },
  {
    id: 'shubhambrosia',
    name: 'Shubh Ambrosia',
    handle: '@shubhambrosia',
    category: 'Real Estate',
    instagramUrl: 'https://www.instagram.com/shubhambrosia?igsh=cm43OWxuYno2N2h6',
    avatarUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Premium luxury homes & gated residential community.'
  },
  {
    id: 'lalreadymadekota',
    name: 'Lal Readymade Kota',
    handle: '@lalreadymade_kota',
    category: 'Retail & Fashion',
    instagramUrl: 'https://www.instagram.com/lalreadymade_kota?igsh=ejVpaXNscWg0ZnRu',
    avatarUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
    isVerified: false,
    description: 'Exclusive apparel, festive wear & ready-to-wear clothing.'
  },
  {
    id: 'saffroncitykota',
    name: 'Saffron City Kota',
    handle: '@saffroncitykota',
    category: 'Real Estate',
    instagramUrl: 'https://www.instagram.com/saffroncitykota?igsh=MWJwYm5sbWozMWRldw==',
    avatarUrl: 'https://i.ibb.co/h17TszPr/43-r9rkpf44kjzkyxfx4uinokkvthpvihy91u54yj6j5c.webp',
    isVerified: true,
    description: 'Kota\'s premier gated residential township & plotting.'
  },
  {
    id: 'kavaglobal',
    name: 'Kava Global',
    handle: '@kavaglobal',
    category: 'Education & Tech',
    instagramUrl: 'https://www.instagram.com/kavaglobal?igsh=MW10YWx5aGEyajhjaQ==',
    avatarUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Global trade, export-import & enterprise business solutions.'
  },
  {
    id: 'morganskota',
    name: 'Morgans Kota',
    handle: '@morganskota',
    category: 'Hospitality & Lifestyle',
    instagramUrl: 'https://www.instagram.com/morganskota?igsh=MW1pdnc4aXh2cXlkOA==',
    avatarUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Fine dining lounge, cafe experience & luxury culinary events.'
  },
  {
    id: 'teddybeardubai',
    name: 'Teddy Bear Dubai',
    handle: '@teddybear.dubai',
    category: 'Retail & Fashion',
    instagramUrl: 'https://www.instagram.com/teddybear.dubai?igsh=MTk5NTc4cGhsZjF4cw==',
    avatarUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'High-end plush toys & luxury gift delivery service in Dubai.'
  },
  {
    id: 'naghmakhanofficial',
    name: 'Naghma Khan Official',
    handle: '@naghmakhanofficial',
    category: 'Hospitality & Lifestyle',
    instagramUrl: 'https://www.instagram.com/naghmakhanofficial?igsh=Z2Nwd3J6a2ozOGFn',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Digital brand creator, lifestyle campaigns & media presence.'
  },
  {
    id: 'goodhealthcare',
    name: 'Good Health Care',
    handle: '@goodhealthcare__',
    category: 'Healthcare',
    instagramUrl: 'https://www.instagram.com/goodhealthcare__?igsh=eGl6a29vYjc1MnRx',
    avatarUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
    isVerified: false,
    description: 'Comprehensive healthcare advice, diagnostics & wellness.'
  },
  {
    id: 'pasandladiessuits',
    name: 'Pasand Ladies Suits',
    handle: '@pasand_ladiessuits',
    category: 'Retail & Fashion',
    instagramUrl: 'https://www.instagram.com/pasand_ladiessuits?igsh=MTgxaHl4M2Uzc3QzYw==',
    avatarUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
    isVerified: false,
    description: 'Designer ladies ethnic suits, dress materials & boutique wear.'
  },
  {
    id: 'm2iaskota',
    name: 'M2 IAS Kota',
    handle: '@m2ias_kota',
    category: 'Education & Tech',
    instagramUrl: 'https://www.instagram.com/m2ias_kota?igsh=MWI2NG5zZGl4OWl4Nw==',
    avatarUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Premier civil services & competitive exam guidance institute.'
  },
  {
    id: 'rsmittalcommerce',
    name: 'RS Mittal Commerce Classes',
    handle: '@rsmittal_commerce_classes_kota',
    category: 'Education & Tech',
    instagramUrl: 'https://www.instagram.com/rsmittal_commerce_classes_kota?igsh=MXQ5eHV6NDlvdmMwNQ==',
    avatarUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Leading commerce coaching, CA/CS foundation & academic mentorship.'
  },
  {
    id: 'marsstudiokota',
    name: 'Mars Studio Kota',
    handle: '@marsstudiokota',
    category: 'Hospitality & Lifestyle',
    instagramUrl: 'https://www.instagram.com/marsstudiokota?igsh=MXh1dHM4dnRjMzdpMA==',
    avatarUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Creative photography, cinematic reels & wedding media studio.'
  },
  {
    id: 'grammykota',
    name: 'Grammy Kota',
    handle: '@grammy_kota',
    category: 'Hospitality & Lifestyle',
    instagramUrl: 'https://www.instagram.com/grammy_kota?igsh=MWhlcHFtMHZ5djZzeQ==',
    avatarUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Modern cafe, rooftop lounge & gourmet food experience.'
  },
  {
    id: 'shaazmediaentertainment',
    name: 'Shaaz Media Entertainment',
    handle: '@shaazmediaentertainment',
    category: 'Hospitality & Lifestyle',
    instagramUrl: 'https://www.instagram.com/shaazmediaentertainment?igsh=MWpqdWRpdjdpY250bA==',
    avatarUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Media production, entertainment events & talent management.'
  },
  {
    id: 'siplshaazintpremierleague',
    name: 'Shaaz International Premier League',
    handle: '@sipl_shaazintpremierleague',
    category: 'Hospitality & Lifestyle',
    instagramUrl: 'https://www.instagram.com/sipl_shaazintpremierleague?igsh=OGdnbHQ3a3ptNDU5',
    avatarUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    description: 'Premier sports league, cricket tournaments & athletic events.'
  }
];

const categories = [
  'All Accounts',
  'Real Estate',
  'Healthcare',
  'Hospitality & Lifestyle',
  'Education & Tech',
  'Retail & Fashion'
];

export default function InstagramShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Accounts');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredAccounts = useMemo(() => {
    return instagramAccounts.filter((account) => {
      const matchesCategory =
        selectedCategory === 'All Accounts' || account.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        account.name.toLowerCase().includes(q) ||
        account.handle.toLowerCase().includes(q) ||
        account.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="instagram-showcase" className="relative py-24 bg-transparent overflow-hidden">
      {/* Home-Matching Fluid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
          className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-nexus-accent/15 rounded-full blur-[80px] md:blur-[120px]" 
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
          className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-fuchsia-500/10 rounded-full blur-[100px] md:blur-[140px]" 
        />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4"
          >
            CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400">INSTAGRAM ACCOUNTS</span> WE MANAGE
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Explore client Instagram brand profiles managed and grown by Digital Amnik.
          </motion.p>
        </div>

        {/* Filter and Search Bar: Single Line Category Tabs & Centered Search */}
        <div className="flex flex-col items-center gap-6 mb-12">
          
          {/* Category Tabs: Clean wrap on mobile, single line on desktop */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-3 w-full py-2 px-2 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 md:px-5 py-2 md:py-2.5 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH HANDLE OR BRAND..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white placeholder-gray-500 focus:outline-none focus:border-nexus-accent/50 backdrop-blur-md uppercase tracking-wider text-center md:text-left"
            />
          </div>
        </div>

        {/* Minimalist Instagram Account Cards Grid matching Hero style */}
        {filteredAccounts.length === 0 ? (
          <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center max-w-xl mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 border border-white/10">
              <Instagram className="w-8 h-8 text-nexus-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ready for Your New Instagram Accounts</h3>
            <p className="text-sm text-gray-400">
              Send your new Instagram account links or details here, and I will instantly populate the cards for you!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAccounts.map((account, index) => (
              <motion.div
                key={account.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:border-nexus-accent/50 hover:bg-white/15 transition-all duration-300 group flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Avatar & Header Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={account.avatarUrl}
                      alt={account.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/20 group-hover:border-nexus-accent transition-colors shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <h3 className="text-lg font-bold text-white truncate group-hover:text-nexus-cyan transition-colors">
                          {account.name}
                        </h3>
                        {account.isVerified && (
                          <CheckCircle2 className="w-4 h-4 text-nexus-cyan fill-nexus-cyan/20 shrink-0" />
                        )}
                      </div>

                      <div className="text-xs font-bold uppercase tracking-widest text-nexus-cyan/80">
                        {account.handle}
                      </div>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {account.description}
                  </p>
                </div>

                {/* Home-Matching Action Button */}
                <a
                  href={account.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-between hover:bg-white hover:text-black transition-all duration-300 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    Visit Instagram
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        )}

      </div>
    </section>
  );
}
