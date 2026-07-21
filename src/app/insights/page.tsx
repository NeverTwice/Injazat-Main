'use client';

import { useState, useEffect } from 'react';
import { Search, ArrowRight, Download, Mail, Play, FileText, Newspaper, TrendingUp, Globe, Users } from 'lucide-react';
import { NewsItem } from '@/lib/news';

const categories = ['LATEST INSIGHTS', 'ARTICLES', 'REPORTS', 'MARKET NEWS', 'PODCASTS', 'VIDEOS'];

const articles = [
  {
    category: 'VENTURE CAPITAL',
    date: 'July 10, 2025',
    title: 'The GCC Tech Renaissance: Why Global Founders are Moving East',
    excerpt: 'Analyzing the structural shifts in Abu Dhabi and Riyadh that are attracting the world\'s most ambitious tech entrepreneurs.',
    featured: true,
  },
  {
    category: 'MARKET PERSPECTIVES',
    date: 'June 22, 2025',
    title: 'Post-Oil Prosperity: The Rise of the Regional Digital Economy',
    excerpt: 'How sovereign-led diversification is creating unprecedented opportunities in deep-tech and AI.',
    featured: false,
  },
  {
    category: 'PRIVATE EQUITY',
    date: 'May 15, 2025',
    title: 'Value Creation Beyond Capital: The Operating Edge',
    excerpt: 'How operational excellence and active ownership unlock long-term value in regional mid-market firms.',
    featured: false,
  },
  {
    category: 'SUSTAINABILITY',
    date: 'April 8, 2025',
    title: 'Sustainable Investing in the Arid World',
    excerpt: 'Our approach to water-tech and ag-tech as the foundation for regional ESG portfolios.',
    featured: false,
  },
];

const reports = [
  { 
    title: 'Saudi Arabia H1 2025 Venture Capital Report', 
    desc: 'Analyzing the SR 4.2B+ investment surge in the Kingdom.', 
    type: 'PDF',
    date: 'June 2025'
  },
  { 
    title: 'UAE Tech Ecosystem & AI Strategy 2026', 
    desc: 'The roadmap for Dubai and Abu Dhabi as global AI hubs.', 
    type: 'PDF',
    date: 'May 2025'
  },
  { 
    title: 'MENA Fintech & Digital Payments Outlook', 
    desc: 'Trends in open banking and cross-border settlement.', 
    type: 'PDF',
    date: 'April 2025'
  },
  { 
    title: 'GCC ESG & Sustainable Finance Guide', 
    desc: 'Aligning sovereign wealth with global sustainability goals.', 
    type: 'PDF',
    date: 'March 2025'
  },
];

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState('LATEST INSIGHTS');
  const [liveNews, setLiveNews] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        if (Array.isArray(data)) {
          setLiveNews(data);
        }
      } catch (err) {
        console.error('Error loading live news:', err);
      } finally {
        setLoadingNews(false);
      }
    }
    loadNews();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/insights-bg.jpg" 
            alt="Insights" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/10 to-brand-dark" />
        </div>
        <div className="container-custom relative z-10">
          <h4 className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">Insights</h4>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 max-w-4xl">Ideas. Perspectives.<br /><span className="text-brand-gold italic">Driving Growth.</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Stay informed with our latest thinking on venture capital, private equity, emerging markets and the trends shaping the future of business.
          </p>
        </div>
      </section>

      {/* Navigation & Search */}
      <section className="bg-brand-dark border-y border-brand-border sticky top-20 z-30 backdrop-blur-md">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 py-6">
          <div className="flex flex-wrap gap-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] font-bold tracking-widest transition-colors ${activeTab === cat ? 'text-brand-gold' : 'text-gray-500 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search insights..." 
              className="w-full bg-brand-dark-light border border-brand-border px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
            />
            <Search size={14} className="absolute right-3 top-2.5 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-brand-dark">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          {/* Articles Grid */}
          <div className="lg:col-span-2 space-y-12">
            {activeTab === 'MARKET NEWS' || activeTab === 'LATEST INSIGHTS' ? (
              <div className="space-y-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-grow bg-brand-border" />
                  <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold">Vital Financial Updates</h2>
                  <div className="h-px flex-grow bg-brand-border" />
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                  {loadingNews ? (
                    <div className="animate-pulse space-y-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-32 bg-brand-dark-light border border-brand-border" />
                      ))}
                    </div>
                  ) : liveNews.length > 0 ? (
                    liveNews.map((item, i) => (
                      <div key={i} className="p-8 border border-brand-border bg-brand-dark-light group hover:border-brand-gold transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">{item.category}</span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest">{new Date(item.pubDate).toLocaleDateString()}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-brand-gold transition-colors">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
                          {item.contentSnippet}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Source: {item.source}</span>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                            READ FULL ARTICLE <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500 italic">No recent financial news found.</div>
                  )}
                </div>

                <div className="flex items-center gap-4 my-16">
                  <div className="h-px flex-grow bg-brand-border" />
                  <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold">Injazat Perspectives</h2>
                  <div className="h-px flex-grow bg-brand-border" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {articles.map((article, i) => (
                    <div key={i} className={`group ${article.featured ? 'md:col-span-2' : ''}`}>
                      <div className={`relative overflow-hidden mb-6 ${article.featured ? 'aspect-[21/9]' : 'aspect-video'} bg-gray-800`}>
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-brand-gold text-brand-dark text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                            {article.featured ? 'FEATURED' : article.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-brand-dark-light/40 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                          <span className={article.featured ? 'text-brand-gold' : ''}>{article.category}</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className={`${article.featured ? 'text-3xl' : 'text-xl'} font-bold leading-tight group-hover:text-brand-gold transition-colors`}>
                          {article.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                          {article.excerpt}
                        </p>
                        <button className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                          READ MORE <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeTab === 'REPORTS' ? (
              <div className="space-y-12">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-grow bg-brand-border" />
                  <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold">Vital MENA/GCC Research</h2>
                  <div className="h-px flex-grow bg-brand-border" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {reports.map((report, i) => (
                    <div key={i} className="p-10 border border-brand-border bg-brand-dark-light group hover:border-brand-gold transition-all relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                        <FileText size={80} />
                      </div>
                      <div className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] mb-4">{report.date}</div>
                      <h3 className="text-2xl font-serif text-brand-ivory mb-4 group-hover:text-brand-gold transition-colors">{report.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-8">{report.desc}</p>
                      <div className="flex justify-between items-center pt-6 border-t border-brand-border">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Size: 4.2 MB</span>
                        <button className="luxury-button py-2 px-6 flex items-center gap-2">
                          DOWNLOAD <Download size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-40 border border-brand-border bg-brand-dark-light text-gray-500 uppercase tracking-widest text-xs">
                {activeTab} Content coming soon.
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Popular Topics */}
            <div className="p-8 border border-brand-border bg-brand-dark-light">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6">Popular Topics</h4>
              <div className="flex flex-wrap gap-2">
                {['Venture Capital', 'Private Equity', 'Emerging Markets', 'Healthcare', 'FinTech', 'Technology', 'ESG'].map((topic) => (
                  <button key={topic} className="px-3 py-1.5 border border-brand-border text-[10px] hover:border-brand-gold hover:text-brand-gold transition-colors">
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Reports */}
            <div className="p-8 border border-brand-border bg-brand-dark-light">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6">Recent Reports</h4>
              <div className="space-y-6">
                {reports.map((report, i) => (
                  <div key={i} className="group flex gap-4 items-start border-b border-brand-border pb-6 last:border-0 last:pb-0">
                    <div className="w-12 h-16 bg-brand-navy flex-shrink-0 border border-brand-gold/10 flex items-center justify-center text-brand-gold/20">
                      <FileText size={24} />
                    </div>
                    <div>
                      <div className="text-[8px] text-brand-gold font-bold uppercase tracking-widest mb-1">{report.date}</div>
                      <h5 className="text-xs font-bold leading-tight group-hover:text-brand-gold transition-colors mb-1">{report.title}</h5>
                      <p className="text-[10px] text-gray-500 mb-3 leading-tight">{report.desc}</p>
                      <button className="flex items-center gap-2 text-[10px] font-bold text-brand-gold hover:underline">
                        DOWNLOAD PDF <Download size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setActiveTab('REPORTS')}
                className="w-full mt-8 py-3 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all"
              >
                VIEW ALL REPORTS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-brand-dark border-t border-brand-border">
        <div className="container-custom">
          <div className="p-12 border border-brand-border bg-brand-dark-light flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">STAY AHEAD WITH INJAZAT CAPITAL INSIGHTS</h3>
                <p className="text-gray-400 text-sm">Subscribe to receive our latest insights, reports and updates.</p>
              </div>
            </div>
            <div className="flex w-full lg:w-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow lg:w-80 bg-brand-dark border border-brand-border px-6 py-4 text-sm focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Icons */}
      <section className="py-20 bg-brand-dark">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-4">
            <div className="text-brand-gold flex justify-center"><TrendingUp size={32} /></div>
            <h4 className="text-xs font-bold uppercase tracking-widest">Expert Analysis</h4>
            <p className="text-[10px] text-gray-500">Deep insights from our investment team.</p>
          </div>
          <div className="space-y-4">
            <div className="text-brand-gold flex justify-center"><Globe size={32} /></div>
            <h4 className="text-xs font-bold uppercase tracking-widest">Market Intelligence</h4>
            <p className="text-[10px] text-gray-500">Actionable perspectives on markets and sectors.</p>
          </div>
          <div className="space-y-4">
            <div className="text-brand-gold flex justify-center"><Users size={32} /></div>
            <h4 className="text-xs font-bold uppercase tracking-widest">Thought Leadership</h4>
            <p className="text-[10px] text-gray-500">Original research and forward-looking views.</p>
          </div>
          <div className="space-y-4">
            <div className="text-brand-gold flex justify-center"><FileText size={32} /></div>
            <h4 className="text-xs font-bold uppercase tracking-widest">Timely Updates</h4>
            <p className="text-[10px] text-gray-500">Stay informed on the latest deals and developments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
