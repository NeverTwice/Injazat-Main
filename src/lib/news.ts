import Parser from 'rss-parser';

export type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  source: string;
  category: string;
};

const parser = new Parser();

const SOURCES = [
  {
    name: 'BBC Business',
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml',
    category: 'Global Finance',
  },
  {
    name: 'The National - Business',
    url: 'https://www.thenationalnews.com/arc/outboundfeeds/rss/category/business/?outputType=xml',
    category: 'GCC / Regional',
  },
  {
    name: 'Gulf Business',
    url: 'https://gulfbusiness.com/feed/',
    category: 'Regional Insights',
  }
];

export async function fetchFinancialNews(): Promise<NewsItem[]> {
  // Set default headers for fetching
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml, text/xml, */*'
  };

  const allNews: NewsItem[] = [];

  for (const source of SOURCES) {
    try {
      // Use fetch with headers first to avoid blocks, then parse the response text
      const response = await fetch(source.url, { headers, next: { revalidate: 3600 } });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const xml = await response.text();
      const feed = await parser.parseString(xml);
      
      const items = feed.items.slice(0, 5).map((item) => ({
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        contentSnippet: (item.contentSnippet || (item as any).summary || '').split('\n')[0].substring(0, 160) + '...',
        source: source.name,
        category: source.category,
      }));
      allNews.push(...items);
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }

  // Sort by date (descending)
  return allNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}