'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Search, 
  X, 
  Sparkles, 
  Heart, 
  ChefHat, 
  Calendar, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  date: string;
  category: 'Dairy Education' | 'Recipes' | 'Behind the Scenes';
  readTime: string;
  image: string;
  leadParagraph: string;
  bodySummary: string;
  fullContent: {
    introduction: string;
    sections: { heading: string; content: string }[];
    tip?: string;
    recipeIngredients?: string[];
    recipeSteps?: string[];
  };
  ctaText: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: 'cream-line',
    title: 'What is a "Cream Line" and Why Does It Matter?',
    date: 'October 12, 2023',
    category: 'Dairy Education',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1200&q=80',
    leadParagraph: "If you've noticed a rich, thick layer of cream resting at the top of your Leite Do Campo milk bottle, congratulations—you are looking at real, natural milk!",
    bodySummary: 'Modern industrial dairies use a process called homogenization to break up fat molecules so they blend permanently into the liquid. While this makes milk look uniform on supermarket shelves, it also makes it harder for your body to digest. Learn why keeping our milk unhomogenized preserves its rich flavor, makes it easier on your stomach, and how you can use that delicious cream top to elevate your morning coffee.',
    fullContent: {
      introduction: "For generations, the 'cream line' was the ultimate hallmark of pure, unprocessed dairy. Today, most supermarket milk has been stripped of this natural beauty through heavy industrial processing. At Leite Do Campo, we choose to preserve it.",
      sections: [
        {
          heading: "The Science of Homogenization",
          content: "Homogenization is a high-pressure mechanical process that forces milk through extremely tiny tubes at supersonic speeds. This violently shatters the natural fat globules into microscopic fragments so they can no longer float to the top. While this gives milk an infinite, uniform shelf-life suitable for global shipping, it also alters the milk's proteins and wraps the fat in denatured proteins, which many scientists believe makes it significantly harder for the human digestive tract to process correctly."
        },
        {
          heading: "Why Unhomogenized is Better for Your Gut",
          content: "Because our milk is left in its natural state, your body recognizes it instantly. The natural fat globules carry fat-soluble vitamins (A, D, E, and K) and beneficial enzymes in their intact, native structures. Many customers who experience bloating or discomfort from standard store-bought milk report absolutely zero issues when drinking our unhomogenized cream-top milk."
        },
        {
          heading: "How to Enjoy the Cream Top",
          content: "You have two wonderful choices when you open a fresh bottle of Leite Do Campo milk. First, you can give the heavy glass bottle a gentle, traditional shake to blend the cream back into the milk for an incredibly rich, uniform drink. Second, you can spoon the luxurious cream directly off the top to float on your morning espresso, stir into oatmeal, or use as a rich culinary finishing cream."
        }
      ],
      tip: "Pro-Tip: Use a long-handled spoon to scoop the cream top into a small jar. Whisk it with a touch of honey for a world-class pancake topping!"
    },
    ctaText: 'Read Full Article',
    featured: true,
  },
  {
    id: 'farmhouse-scones',
    title: 'How to Bake Flaky Farmhouse Scones with Real Butter',
    date: 'September 28, 2023',
    category: 'Recipes',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
    leadParagraph: 'There is nothing quite like a warm, flaky scone fresh out of the oven on a quiet Sunday morning. The secret to the perfect rise and a rich, melt-in-your-mouth texture is simple: high-fat, slow-churned butter.',
    bodySummary: 'In this post, we share our grandmother’s five-ingredient farmhouse scone recipe. We explain why industrial, high-moisture butter can make your pastry heavy and flat, and how using cold, slow-churned Leite Do Campo butter creates light, airy, and beautifully layered scones every single time.',
    fullContent: {
      introduction: "Baking is an act of love, but it is also a science. When it comes to scones, the magic happens in the interaction between flour and fat. If you use standard supermarket butter, which often contains high water content, your pastry steam-bakes into a dense, heavy disc. Our slow-churned, European-style butter contains 82%+ butterfat, guaranteeing flaky perfection.",
      sections: [
        {
          heading: "The Role of Cold Butter",
          content: "The golden rule of scones is simple: keep everything cold. When tiny, solid pockets of cold butter hit the hot oven, the moisture inside them rapidly evaporates, creating small pockets of steam that lift the dough, creating those coveted, flaky, delicate layers."
        }
      ],
      recipeIngredients: [
        "350g All-Purpose Flour (plus extra for dusting)",
        "1 tbsp Baking Powder",
        "1/4 tsp Salt",
        "85g Cold Leite Do Campo Salted Butter (cubed)",
        "175ml Leite Do Campo Whole Milk (plus 1 tbsp for brushing)",
        "1 tsp Vanilla Extract",
        "Optional: 1 tbsp Raw Sugar for dusting"
      ],
      recipeSteps: [
        "Heat your oven to 220°C (425°F) and line a baking sheet with parchment paper.",
        "Combine the flour, baking powder, and salt in a large bowl. Add the cold, cubed butter.",
        "Using your fingertips, gently rub the butter into the flour until the mixture resembles rough breadcrumbs. Work quickly so the butter doesn't melt.",
        "Make a well in the center, pour in the whole milk and vanilla, and fold gently with a butter knife until a soft dough forms. Do not overmix!",
        "Turn onto a lightly floured surface, pat into a 4cm-thick round, and cut out scones using a smooth cutter.",
        "Place on the tray, brush the tops lightly with milk, sprinkle with raw sugar, and bake for 12-15 minutes until beautifully golden."
      ],
      tip: "Serving suggestion: Split them warm and slather generously with more Leite Do Campo butter and a spoonful of wild berry jam."
    },
    ctaText: 'Read Full Article',
    featured: false,
  },
  {
    id: 'cow-life',
    title: 'A Day in the Life of a Pasture-Raised Cow',
    date: 'September 14, 2023',
    category: 'Behind the Scenes',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80',
    leadParagraph: 'Have you ever wondered what our herd does all day? From early morning grazing on dew-covered clover to resting under the shade of ancient oak trees, follow our cows through their natural daily rhythms.',
    bodySummary: 'We take you on a visual tour of our pastures. Learn how we use rotational grazing to keep our soil healthy, how our cows choose their favorite grasses, and why a natural, stress-free lifestyle directly affects the quality and nutritional profile of the milk your family drinks every morning.',
    fullContent: {
      introduction: "At Leite Do Campo, we treat our herd as family. We believe that happy, low-stress cows produce milk of unparalleled quality. Here is a look behind the pasture gates at a typical day in the life of our beautiful herd.",
      sections: [
        {
          heading: "5:00 AM – The Morning Walk",
          content: "As dawn breaks over the valley, our cows wake up naturally. They slowly walk themselves up to our modern, quiet milking parlor. There are no shouting workers or loud machines; instead, soft classical music plays to keep the environment calm, which helps the cows release milk naturally and comfortably."
        },
        {
          heading: "8:00 AM – Fresh Pastures & Rotational Grazing",
          content: "Once milked, the herd is guided to a fresh section of pasture. We use intensive rotational grazing, meaning our cows get a brand-new paddock of lush, green grass every single day. This keeps the grass sweet, prevents overgrazing, and allows the soil to naturally regenerate while drawing carbon deep into the earth."
        },
        {
          heading: "1:00 PM – Midday Rumination under the Oaks",
          content: "During the warmest hours of the day, the cows gather under the deep shade of our ancient oak trees. This is where the magic happens: rumination. Our cows rest, digest, and socialize. A relaxed cow is a healthy cow, and this peaceful downtime is essential for their overall well-being."
        },
        {
          heading: "4:00 PM – The Evening Harvest",
          content: "Before sunset, the cows enjoy one last graze on clover and wild herbs, which naturally infuses our milk with subtle, sweet, and seasonally changing herbal notes that you can taste in every glass."
        }
      ],
      tip: "Why it matters: Studies show that pasture-raised milk contains up to 147% more Omega-3 fatty acids and significantly higher levels of CLA than industrial, grain-fed milk!"
    },
    ctaText: 'Read Full Article',
    featured: false,
  }
];

const CATEGORIES = ['All', 'Dairy Education', 'Recipes', 'Behind the Scenes'] as const;

export function FarmBlog() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Filtered articles based on search query and category
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.leadParagraph.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', duration: 0.5, bounce: 0.15 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  return (
    <section 
      id="farm-blog" 
      className="relative bg-[#F9F7F5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-[#3E2B1E]"
    >
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9E3DD]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#5D4432]/5 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E9E3DD] text-[#5D4432] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#5D4432]" />
            <span>Field Notes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#3E2B1E] font-sans mb-6">
            Stories &amp; Recipes from the Farm
          </h2>
          <p className="text-lg text-[#5D4432] leading-relaxed">
            Learn more about where your food comes from, how to cook with fresh dairy, and what’s happening in our pastures this season.
          </p>
        </div>

        {/* Search and Filters Controller */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-[#E9E3DD]">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5D4432]/40 ${
                  activeCategory === cat
                    ? 'bg-[#5D4432] text-[#F9F7F5] shadow-md shadow-[#5D4432]/10'
                    : 'bg-[#E9E3DD]/60 text-[#3E2B1E] hover:bg-[#E9E3DD]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#5D4432]">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#E9E3DD]/40 text-[#3E2B1E] placeholder-[#5D4432]/60 text-sm rounded-full pl-10 pr-4 py-2.5 border border-[#E9E3DD] focus:outline-none focus:ring-2 focus:ring-[#5D4432] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#5D4432] hover:text-[#3E2B1E]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Main Grid Section */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-[#E9E3DD]/20 rounded-3xl border-2 border-dashed border-[#E9E3DD]/60">
            <BookOpen className="w-12 h-12 text-[#5D4432]/40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#3E2B1E] mb-2">No field notes found</h3>
            <p className="text-[#5D4432] max-w-md mx-auto">
              We couldn't find any articles matching "{searchQuery}". Try browsing all categories instead.
            </p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-sm font-semibold text-[#5D4432] underline hover:text-[#3E2B1E]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {filteredArticles.map((article) => {
              const isLarge = article.featured;
              return (
                <motion.article
                  key={article.id}
                  variants={cardVariants}
                  className={`group relative flex flex-col justify-between bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E9E3DD]/50 ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#E9E3DD]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-[#F9F7F5] text-[#5D4432] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs flex items-center gap-1.5 font-medium">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-2 text-xs text-[#5D4432]/80 mb-3 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#3E2B1E] group-hover:text-[#5D4432] transition-colors line-clamp-2 leading-snug mb-4">
                        {article.title}
                      </h3>
                      <p className="text-[#5D4432] text-sm leading-relaxed line-clamp-3 mb-6">
                        {article.leadParagraph}
                      </p>
                    </div>
                  </div>

                  {/* Footer/CTA Section */}
                  <div className="px-6 sm:px-8 pb-8 pt-2">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center gap-2 text-[#5D4432] hover:text-[#3E2B1E] font-semibold text-sm group/btn focus:outline-none focus:ring-2 focus:ring-[#5D4432]/20 rounded"
                    >
                      <span>{article.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {/* Static In-Page CTA Banner */}
        <div className="mt-20 bg-[#5D4432] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[#E9E3DD] text-xs font-bold tracking-widest uppercase block mb-3">Newsletter Sign Up</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans mb-3 text-[#F9F7F5]">
                Get the Fresh Scoop Delivered Weekly
              </h3>
              <p className="text-[#E9E3DD] text-sm sm:text-base max-w-lg">
                Receive traditional recipes, behind-the-scenes stories, and exclusive subscriber-only milk token deals straight to your inbox.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              {newsletterSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A]" />
                  <div>
                    <p className="font-semibold text-white text-sm">You are on the list!</p>
                    <p className="text-xs text-[#E9E3DD]">Welcome to the neighborhood.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-64"
                  />
                  <button
                    type="submit"
                    className="bg-[#F9F7F5] text-[#5D4432] hover:bg-[#E9E3DD] font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg whitespace-nowrap"
                  >
                    Join the Waiting List
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* RICH ARTICLE READING MODAL (Aesthetic Overlaid Sheet) */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-[#3E2B1E]/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl bg-[#F9F7F5] rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#E9E3DD] max-h-[90vh] flex flex-col"
            >
              {/* Sticky Top Bar */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-white/80 hover:bg-white text-[#3E2B1E] p-2.5 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#5D4432]"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Pane */}
              <div className="overflow-y-auto flex-1">
                {/* Hero Image */}
                <div className="relative h-64 sm:h-96 w-full bg-[#E9E3DD]">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B1E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-[#5D4432] text-white px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 inline-block">
                      {selectedArticle.category}
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-bold font-sans text-white leading-tight">
                      {selectedArticle.title}
                    </h1>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-10 max-w-3xl mx-auto">
                  {/* Article Metadata */}
                  <div className="flex flex-wrap items-center gap-6 text-xs text-[#5D4432] mb-8 pb-4 border-b border-[#E9E3DD]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#5D4432]" />
                      <span>{selectedArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#5D4432]" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-[#DC2626]" />
                      <span>100% Organic Content</span>
                    </div>
                  </div>

                  {/* Lead Paragraph */}
                  <p className="text-lg sm:text-xl font-medium text-[#3E2B1E] leading-relaxed mb-6 italic border-l-4 border-[#5D4432] pl-4">
                    {selectedArticle.leadParagraph}
                  </p>

                  {/* Body Summary */}
                  <p className="text-[#3E2B1E] leading-relaxed mb-8">
                    {selectedArticle.bodySummary}
                  </p>

                  {/* Full Content Introduction */}
                  <p className="text-[#3E2B1E] leading-relaxed mb-8">
                    {selectedArticle.fullContent.introduction}
                  </p>

                  {/* Full Content Sections */}
                  {selectedArticle.fullContent.sections.map((sec, i) => (
                    <div key={i} className="mb-8">
                      <h3 className="text-xl font-bold text-[#3E2B1E] mb-3 font-sans">
                        {sec.heading}
                      </h3>
                      <p className="text-[#3E2B1E]/90 leading-relaxed text-sm sm:text-base">
                        {sec.content}
                      </p>
                    </div>
                  ))}

                  {/* Recipe Specific Panel */}
                  {selectedArticle.fullContent.recipeIngredients && (
                    <div className="my-10 bg-white border border-[#E9E3DD] p-6 sm:p-8 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <ChefHat className="w-5 h-5 text-[#5D4432]" />
                        <h4 className="text-lg font-bold text-[#3E2B1E]">Recipe Ingredients</h4>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#3E2B1E] mb-6">
                        {selectedArticle.fullContent.recipeIngredients.map((ing, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#16A34A] font-bold">✓</span>
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-lg font-bold text-[#3E2B1E] mb-4">Directions</h4>
                      <ol className="space-y-4 text-sm text-[#3E2B1E]">
                        {selectedArticle.fullContent.recipeSteps?.map((step, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="flex items-center justify-center bg-[#E9E3DD] text-[#5D4432] font-mono font-bold w-6 h-6 rounded-full shrink-0 text-xs">
                              {idx + 1}
                            </span>
                            <p className="leading-relaxed">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Pro Tip Callout Box */}
                  {selectedArticle.fullContent.tip && (
                    <div className="p-4 sm:p-5 bg-[#E9E3DD]/40 border-l-4 border-[#5D4432] rounded-r-xl mb-10 text-sm text-[#3E2B1E] italic">
                      {selectedArticle.fullContent.tip}
                    </div>
                  )}

                  {/* Bottom Actions inside modal */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-[#E9E3DD]">
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="inline-flex items-center gap-2 text-[#5D4432] hover:text-[#3E2B1E] font-semibold text-sm focus:outline-none"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Field Notes</span>
                    </button>

                    <a
                      href="#product-catalog"
                      onClick={() => setSelectedArticle(null)}
                      className="bg-[#5D4432] text-white hover:bg-[#3E2B1E] font-semibold text-sm px-6 py-2.5 rounded-full transition-colors shadow-md"
                    >
                      Shop Our Fresh Dairy
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}