"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AnimatedSection, { ScaleIn } from "@/components/AnimatedSection";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NewsArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: string;
  image: string | null;
}

const categoryFilters = ["All", "GCC Markets", "Global Markets", "Venture Capital", "Private Equity", "Healthcare", "ESG", "Markets"];

const topics = ["Venture Capital", "Private Equity", "Emerging Markets", "Healthcare", "FinTech", "Technology", "ESG"];

const reports = [
  {
    title: "2025 Year in Review: Investments in MENA",
    sub: "$7.5B raised by MENA startups · KSA led with $5B across 211 deals · FinTech captured 58% of total",
    source: "Wamda Research Lab",
    date: "Jan 2026",
    url: "https://www.wamda.com/research/2025-year-review-investments-mena",
    tag: "Annual Report",
  },
  {
    title: "FY 2025 State of Venture Capital in MENA",
    sub: "MENA's strongest funding recovery in history · Scale-stage momentum · Sovereign-backed capital analysis",
    source: "MAGNiTT",
    date: "2026",
    url: "https://magnitt.com/research/FY-2025-MENA-VC-Report-51018",
    tag: "VC Report",
  },
  {
    title: "Q1 2025 MENA Venture Investment Report",
    sub: "Regional deal activity, sector breakdown, and country-by-country analysis for Q1 2025",
    source: "MAGNiTT",
    date: "Jun 2025",
    url: "https://magnitt.com/research/q1-2025-mena-venture-investment-report-50988",
    tag: "Quarterly",
  },
  {
    title: "FY 2025 State of AI Venture Capital in MENA",
    sub: "How AI reshaped venture investment · Funding & deal activity · AI-native platform dominance",
    source: "MAGNiTT",
    date: "Feb 2026",
    url: "https://magnitt.com/research/FY-2025-State-of-Venture-Capital-of-AI-in-MENA-51029",
    tag: "AI Report",
  },
  {
    title: "Bain Global Private Equity Report 2025",
    sub: "37% rise in global buyout value · Middle East PE boom · Technology & sustainability focus",
    source: "Bain & Company",
    date: "Mar 2025",
    url: "https://www.bain.com/insights/topics/global-private-equity-report/",
    tag: "PE Report",
  },
  {
    title: "2024 Year in Review: Investments in MENA",
    sub: "$2.3B raised · 610 deals (+3.5% YoY) · UAE top-funded country · FinTech captured 30%",
    source: "Wamda Research Lab",
    date: "Jan 2025",
    url: "https://www.wamda.com/research/2024-year-review-investments-mena",
    tag: "Annual Report",
  },
  {
    title: "GCC Private Equity & Venture Capital Report",
    sub: "UAE-based firms lead PE transactions · Growing private credit market · FinTech & e-commerce sectors",
    source: "Marmore MENA Intelligence",
    date: "2024",
    url: "https://www.marmoremena.com/en/reports/gcc-private-equity-and-venture-capital/",
    tag: "PE/VC Report",
  },
  {
    title: "GCC FinTech Investment Market Report",
    sub: "Digital adoption drivers · Neobanks rise · Blockchain applications · InsurTech growth",
    source: "Research & Markets",
    date: "2024",
    url: "https://www.researchandmarkets.com/reports/6205423/gcc-fintech-investment-market",
    tag: "FinTech",
  },
];

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";

  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function InsightsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/news");
      const data = await res.json();
      if (data.success && data.articles) {
        setArticles(data.articles);
        setLastUpdated(data.lastUpdated);
      }
    } catch (err) {
      console.error("Failed to fetch news:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchNews]);

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection
          badge="Insights"
          titleLine1="Ideas. Perspectives."
          titleLine2Gold="Driving Growth."
          description="Stay informed with the latest developments in venture capital, private equity, emerging markets and the trends shaping the future of business across the GCC and globally."
          compact
        >
          {/* Live indicator */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400/70 text-[10px] tracking-[0.15em] font-medium uppercase">Live Feed</span>
            </div>
            {lastUpdated && (
              <span className="text-white/20 text-[10px]">
                Updated {timeAgo(lastUpdated)}
              </span>
            )}
          </div>
        </HeroSection>

        {/* Filters + Search */}
        <section className="py-5 border-b border-white/5 sticky top-16 lg:top-20 z-30 bg-navy-950/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-5 items-center">
                {categoryFilters.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[11px] tracking-wide font-medium pb-1 border-b transition-all duration-300 whitespace-nowrap ${
                      activeCategory === cat
                        ? "text-gold-500 border-gold-500"
                        : "text-white/25 border-transparent hover:text-white/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-navy-900/50 border border-white/8 text-white/60 pl-9 pr-4 py-2 text-xs w-48 focus:border-gold-500/30 focus:outline-none placeholder:text-white/15 transition-colors duration-300"
                  aria-label="Search insights"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24">
                <div className="w-8 h-8 border border-gold-500/30 border-t-gold-500 rounded-full animate-spin mb-4" />
                <p className="text-white/20 text-xs tracking-wider">Loading latest insights...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main Content */}
                <div className="lg:col-span-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory + searchQuery}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Featured Article */}
                      {featuredArticle && (
                        <a
                          href={featuredArticle.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mb-8 group"
                        >
                          <div className="border border-white/5 overflow-hidden hover:border-gold-500/15 transition-all duration-500">
                            <div className="relative h-64 bg-gradient-to-br from-navy-800 to-navy-700 overflow-hidden">
                              {featuredArticle.image ? (
                                <img
                                  src={featuredArticle.image}
                                  alt={featuredArticle.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className="w-16 h-16 border border-gold-500/10 rounded-full flex items-center justify-center">
                                    <div className="w-4 h-4 border border-gold-500/20 rounded-full" />
                                  </div>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                              <div className="absolute top-4 left-4 flex items-center gap-3">
                                <span className="bg-gold-500/90 text-navy-950 text-[9px] px-2.5 py-1 font-semibold tracking-[0.15em]">FEATURED</span>
                                <span className="bg-navy-950/60 backdrop-blur-sm text-white/60 text-[9px] px-2.5 py-1 tracking-wider">{featuredArticle.source}</span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <span className="text-gold-500/80 text-[10px] tracking-[0.15em] font-medium uppercase">{featuredArticle.category}</span>
                                  <span className="text-white/20 text-[10px]">·</span>
                                  <span className="text-white/25 text-[10px]">{timeAgo(featuredArticle.pubDate)}</span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-medium leading-snug text-white/90 group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                                  {featuredArticle.title}
                                </h2>
                              </div>
                            </div>
                            <div className="p-6">
                              <p className="text-white/35 text-sm font-light leading-relaxed mb-4">{featuredArticle.description}</p>
                              <span className="text-gold-500/60 text-[10px] tracking-[0.15em] font-medium group-hover:text-gold-500 transition-colors duration-300">
                                Read Full Article →
                              </span>
                            </div>
                          </div>
                        </a>
                      )}

                      {/* Article Grid */}
                      {remainingArticles.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                          {remainingArticles.map((article, i) => (
                            <motion.a
                              key={article.title + i}
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="bg-navy-950 p-6 group hover:bg-navy-900/40 transition-all duration-500 block"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-gold-500/60 text-[9px] tracking-[0.15em] font-medium uppercase">{article.category}</span>
                                  <span className="text-white/10">·</span>
                                  <span className="text-white/15 text-[9px]">{article.source}</span>
                                </div>
                                <span className="text-white/15 text-[9px]">{timeAgo(article.pubDate)}</span>
                              </div>
                              <h3 className="text-white/60 text-sm font-medium leading-snug mb-3 group-hover:text-white/80 transition-colors duration-300">
                                {article.title}
                              </h3>
                              <p className="text-white/25 text-xs font-light leading-relaxed mb-4 line-clamp-3">
                                {article.description}
                              </p>
                              <span className="text-gold-500/40 text-[10px] tracking-[0.1em] font-medium group-hover:text-gold-500/80 transition-colors duration-300">
                                Read More →
                              </span>
                            </motion.a>
                          ))}
                        </div>
                      )}

                      {filteredArticles.length === 0 && !loading && (
                        <div className="text-center py-20 border border-white/5">
                          <div className="w-12 h-12 mx-auto mb-4 border border-white/10 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <p className="text-white/25 text-sm font-light">No articles found for this filter.</p>
                          <button
                            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                            className="text-gold-500/60 text-xs mt-3 hover:text-gold-500 transition-colors"
                          >
                            Clear filters
                          </button>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                  {/* Market Pulse */}
                  <AnimatedSection>
                    <div className="border border-white/5 p-6">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="text-white/50 text-xs font-medium tracking-wider uppercase">Market Pulse</h3>
                        <div className="flex items-center gap-1.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                          </span>
                          <span className="text-emerald-400/50 text-[9px]">Live</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {[
                          { label: "Brent Crude", value: "$81.24", change: "+0.45%", positive: true },
                          { label: "Gold", value: "$2,412", change: "+0.18%", positive: true },
                          { label: "DFM Index", value: "4,285", change: "+1.2%", positive: true },
                          { label: "Tadawul", value: "12,150", change: "-0.3%", positive: false },
                          { label: "S&P 500", value: "5,842", change: "+0.6%", positive: true },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center justify-between">
                            <span className="text-white/30 text-xs font-light">{item.label}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-white/50 text-xs font-medium">{item.value}</span>
                              <span className={`text-[10px] font-medium ${item.positive ? "text-emerald-400/70" : "text-red-400/70"}`}>
                                {item.change}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5">
                        <p className="text-white/10 text-[9px]">Indicative data · Not real-time</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Popular Topics */}
                  <AnimatedSection delay={0.1}>
                    <div className="border border-white/5 p-6">
                      <h3 className="text-white/50 text-xs font-medium tracking-wider mb-5 uppercase">Popular Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((topic) => (
                          <button
                            key={topic}
                            onClick={() => setSearchQuery(topic)}
                            className={`border text-[10px] px-3 py-1.5 tracking-wide transition-all duration-300 cursor-pointer ${
                              searchQuery === topic
                                ? "border-gold-500/40 text-gold-500/80 bg-gold-500/5"
                                : "border-white/8 text-white/25 hover:border-gold-500/20 hover:text-gold-500/50"
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Recent Reports & PDFs */}
                  <AnimatedSection delay={0.2}>
                    <div className="border border-white/5 p-6">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="text-white/50 text-xs font-medium tracking-wider uppercase">MENA / GCC Reports</h3>
                        <span className="text-gold-500/40 text-[9px] tracking-wider">{reports.length} Reports</span>
                      </div>
                      <div className="space-y-4">
                        {reports.map((report) => (
                          <a
                            key={report.title}
                            href={report.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-3.5 items-start group cursor-pointer block"
                          >
                            <div className="w-11 h-14 bg-navy-800 border border-white/5 flex flex-col items-center justify-center shrink-0 group-hover:border-gold-500/20 transition-colors duration-300 relative">
                              <svg className="w-4 h-4 text-gold-500/30 group-hover:text-gold-500/60 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-[7px] text-white/15 mt-0.5 uppercase tracking-wider">PDF</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[8px] tracking-wider text-gold-500/50 border border-gold-500/15 px-1.5 py-0.5 uppercase font-medium shrink-0">{report.tag}</span>
                                <span className="text-white/15 text-[9px] shrink-0">{report.date}</span>
                              </div>
                              <h4 className="text-white/50 text-[11px] font-medium mb-1 group-hover:text-white/75 transition-colors duration-300 leading-snug">{report.title}</h4>
                              <p className="text-white/20 text-[10px] leading-relaxed line-clamp-2">{report.sub}</p>
                              <div className="flex items-center gap-2 mt-1.5">
                                <span className="text-white/15 text-[9px]">{report.source}</span>
                                <span className="text-white/8">·</span>
                                <span className="text-gold-500/40 text-[9px] font-medium group-hover:text-gold-500/80 transition-colors duration-300 flex items-center gap-1">
                                  Download
                                  <svg className="w-2.5 h-2.5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-white/5">
                        <a
                          href="https://magnitt.com/research"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center gap-2 text-gold-500/40 text-[10px] tracking-[0.15em] font-medium hover:text-gold-500/80 transition-colors duration-300"
                        >
                          VIEW ALL REPORTS
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Refresh */}
                  <AnimatedSection delay={0.3}>
                    <button
                      onClick={fetchNews}
                      className="w-full border border-white/5 p-4 flex items-center justify-center gap-3 text-white/20 text-[10px] tracking-wider hover:border-gold-500/15 hover:text-gold-500/50 transition-all duration-500 group"
                    >
                      <svg className="w-3 h-3 group-hover:rotate-180 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      REFRESH FEED
                    </button>
                  </AnimatedSection>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="border border-white/5 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-white/60 text-sm font-medium tracking-wider mb-1">Stay Ahead with Injazat Capital</h3>
                  <p className="text-white/25 text-xs font-light">Subscribe to receive our latest insights, reports and market updates.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-navy-900/50 border border-white/8 text-white/60 px-5 py-2.5 text-sm flex-1 md:w-64 focus:border-gold-500/30 focus:outline-none placeholder:text-white/15 transition-colors duration-300"
                    aria-label="Email for newsletter"
                  />
                  <button className="bg-gold-500 text-navy-950 px-6 py-2.5 text-[11px] tracking-[0.15em] font-semibold hover:bg-gold-400 transition-all duration-500 shrink-0">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features */}
        <section className="py-14 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Expert Analysis", desc: "Deep insights from our investment team." },
                { title: "Market Intelligence", desc: "Actionable perspectives on markets and sectors." },
                { title: "Thought Leadership", desc: "Original research and forward-looking views." },
                { title: "Timely Updates", desc: "Real-time news from the GCC and global markets." },
              ].map((f, i) => (
                <ScaleIn key={f.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 border border-gold-500/15 flex items-center justify-center shrink-0 group-hover:border-gold-500/30 transition-colors duration-500">
                      <div className="w-1 h-1 bg-gold-500/40 group-hover:bg-gold-500/70 transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-gold-500/80 text-[10px] tracking-[0.15em] font-medium uppercase mb-1">{f.title}</h4>
                      <p className="text-white/25 text-xs font-light">{f.desc}</p>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
