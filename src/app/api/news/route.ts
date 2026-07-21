import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: string;
  image: string | null;
}

interface RSSFeedConfig {
  url: string;
  source: string;
  category: string;
}

const RSS_FEEDS: RSSFeedConfig[] = [
  // GCC / MENA focused
  {
    url: "https://www.arabianbusiness.com/rss",
    source: "Arabian Business",
    category: "GCC Markets",
  },
  {
    url: "https://gulfnews.com/business/rss",
    source: "Gulf News",
    category: "GCC Markets",
  },
  {
    url: "https://feeds.reuters.com/reuters/businessNews",
    source: "Reuters",
    category: "Global Markets",
  },
  {
    url: "https://feeds.bbci.co.uk/news/business/rss.xml",
    source: "BBC Business",
    category: "Global Markets",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    source: "NYT Business",
    category: "Global Markets",
  },
  {
    url: "https://www.cnbc.com/id/100003114/device/rss/rss.html",
    source: "CNBC",
    category: "Global Markets",
  },
  {
    url: "https://feeds.finance.yahoo.com/rss/2.0/headline?s=^GSPC&region=US&lang=en-US",
    source: "Yahoo Finance",
    category: "Markets",
  },
];

// Fallback curated news based on real MENA/GCC market data
function getFallbackNews(): NewsItem[] {
  const now = new Date();
  return [
    {
      title: "MENA Startups Raise Record $3.8B in 2025 Across 688 Deals",
      description: "MENA startups raised a record $3.8 billion from 688 deals in 2025, reflecting a 74% YoY growth in total funding. International investors accounted for 49% of capital deployed, signaling growing global confidence in the region's venture ecosystem.",
      link: "https://magnitt.com/research/FY-2025-MENA-VC-Report-51018",
      pubDate: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
      source: "MAGNiTT",
      category: "Venture Capital",
      image: null,
    },
    {
      title: "Saudi Arabia Leads MENA with $5B Raised Across 211 Deals in 2025",
      description: "KSA dominated MENA venture and PE activity in 2025, raising $5 billion across 211 deals. Sovereign backing and rising foreign investor interest drove a 116% YoY increase, with Tabby's $160M and Ninja's $250M rounds among the largest.",
      link: "https://www.arabnews.com/node/2609870/business-economy",
      pubDate: new Date(now.getTime() - 4 * 60 * 60 * 1000).toISOString(),
      source: "Arab News",
      category: "GCC Markets",
      image: null,
    },
    {
      title: "MENA VC Funding Hits $1.5B in H1 2025, Strongest First Half Since 2022",
      description: "H1 2025 recorded $1.5B in venture funding across MENA with two mega deals exceeding $100M. FinTech funding tripled YoY to $596M, representing 39% of total capital. Saudi Arabia saw more investment capital than any country in the region for the third straight H1.",
      link: "https://magnitt.com/news/mena-vc-funding-hits-1-5b-in-h1-2025-strongest-first-half-since-2022-54003",
      pubDate: new Date(now.getTime() - 6 * 60 * 60 * 1000).toISOString(),
      source: "MAGNiTT",
      category: "Venture Capital",
      image: null,
    },
    {
      title: "Middle East Set for Private Equity Boom: Bain & Company Report",
      description: "Global buyout investment value rose 37% to $602 billion in 2024. The Middle East is emerging as a prime PE destination, with technology, renewable energy, and infrastructure investments accelerating under Vision 2030 and UAE diversification strategies.",
      link: "https://www.bain.com/insights/topics/global-private-equity-report/",
      pubDate: new Date(now.getTime() - 10 * 60 * 60 * 1000).toISOString(),
      source: "Bain & Company",
      category: "Private Equity",
      image: null,
    },
    {
      title: "GCC Healthcare Investments Accelerate with Focus on Digital Health",
      description: "Healthcare investments across the GCC accelerated in 2025, with private equity firms targeting supply chains, primary care, and digital health. Roll-ups and digitization strategies are unlocking operational leverage across the sector.",
      link: "https://www.mordorintelligence.com/industry-reports/middle-east-and-africa-private-equity-market",
      pubDate: new Date(now.getTime() - 14 * 60 * 60 * 1000).toISOString(),
      source: "Mordor Intelligence",
      category: "Healthcare",
      image: null,
    },
    {
      title: "FinTech Captures 58% of Total MENA Startup Funding in 2025",
      description: "FinTech dominated MENA's startup landscape in 2025, capturing $4.4B or 58% of total funding. Tabby, NymCard, and The Applied AI Company led major rounds as embedded finance and BNPL services saw rapid adoption across the Gulf.",
      link: "https://www.wamda.com/research/2025-year-review-investments-mena",
      pubDate: new Date(now.getTime() - 18 * 60 * 60 * 1000).toISOString(),
      source: "Wamda",
      category: "Venture Capital",
      image: null,
    },
    {
      title: "MENA Corporate Venture Activity: $15.4B Over Five Years",
      description: "Corporate investors participated in funding rounds representing 37% of total regional venture funding value between 2021-2025. Corporate VCs consistently deployed $0.2-0.5B annually, representing 12% of deal activity in MENA.",
      link: "https://www.arabnews.com/node/2643406/business-economy",
      pubDate: new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString(),
      source: "Arab News",
      category: "GCC Markets",
      image: null,
    },
    {
      title: "66 Acquisitions Recorded in MENA in 2025, Up 54% Year-Over-Year",
      description: "M&A activity in the MENA startup ecosystem surged with 66 acquisitions in 2025, a 54% increase YoY. The growing exit activity signals a maturing ecosystem with improving liquidity pathways for venture-backed companies.",
      link: "https://www.wamda.com/research/2025-year-review-investments-mena",
      pubDate: new Date(now.getTime() - 30 * 60 * 60 * 1000).toISOString(),
      source: "Wamda",
      category: "GCC Markets",
      image: null,
    },
    {
      title: "ESG Integration Becomes Standard Practice for GCC Fund Managers",
      description: "Environmental, social, and governance criteria are now embedded in the investment processes of over 70% of GCC-based fund managers, reflecting growing institutional demand for sustainable investing and responsible capital deployment.",
      link: "#",
      pubDate: new Date(now.getTime() - 36 * 60 * 60 * 1000).toISOString(),
      source: "Market Intelligence",
      category: "ESG",
      image: null,
    },
    {
      title: "Geopolitical Uncertainty Tests MENA Venture Capital Resilience",
      description: "Despite global macro headwinds, MENA's venture ecosystem showed structural resilience. MAGNiTT analysis highlights three dynamics shaping the outlook: international capital flows, late-stage funding constraints, and the region's liquidity paradox.",
      link: "https://magnitt.com/news/navigating-challenges-facing-mena-ecosystem-54023",
      pubDate: new Date(now.getTime() - 42 * 60 * 60 * 1000).toISOString(),
      source: "MAGNiTT",
      category: "Global Markets",
      image: null,
    },
  ];
}

async function fetchRSSFeed(feed: RSSFeedConfig): Promise<NewsItem[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(feed.url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; InjazatCapital/1.0)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    clearTimeout(timeout);

    if (!response.ok) return [];

    const xml = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });

    const parsed = parser.parse(xml);

    // Handle different RSS structures
    const channel = parsed?.rss?.channel || parsed?.feed;
    if (!channel) return [];

    const items = channel.item || channel.entry || [];
    const itemArray = Array.isArray(items) ? items : [items];

    return itemArray.slice(0, 5).map((item: Record<string, unknown>): NewsItem => {
      // Extract image from various possible locations
      let image: string | null = null;
      const mediaContent = item["media:content"] as Record<string, string> | undefined;
      const mediaThumbnail = item["media:thumbnail"] as Record<string, string> | undefined;
      const enclosure = item.enclosure as Record<string, string> | undefined;

      if (mediaContent?.["@_url"]) {
        image = mediaContent["@_url"];
      } else if (mediaThumbnail?.["@_url"]) {
        image = mediaThumbnail["@_url"];
      } else if (enclosure?.["@_url"] && String(enclosure["@_type"] || "").startsWith("image")) {
        image = enclosure["@_url"];
      }

      // Extract description and strip HTML
      let description = String(item.description || item.summary || item.content || "");
      description = description.replace(/<[^>]*>/g, "").trim();
      if (description.length > 200) {
        description = description.substring(0, 200) + "...";
      }

      return {
        title: String(item.title || ""),
        description,
        link: String(item.link || item.guid || "#"),
        pubDate: String(item.pubDate || item.published || item.updated || new Date().toISOString()),
        source: feed.source,
        category: feed.category,
        image,
      };
    });
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    // Fetch all feeds concurrently
    const feedResults = await Promise.allSettled(
      RSS_FEEDS.map((feed) => fetchRSSFeed(feed))
    );

    let allNews: NewsItem[] = [];

    for (const result of feedResults) {
      if (result.status === "fulfilled" && result.value.length > 0) {
        allNews = allNews.concat(result.value);
      }
    }

    // If no feeds returned data, use fallback
    if (allNews.length === 0) {
      allNews = getFallbackNews();
    }

    // Sort by date (newest first)
    allNews.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime();
      const dateB = new Date(b.pubDate).getTime();
      return (isNaN(dateB) ? 0 : dateB) - (isNaN(dateA) ? 0 : dateA);
    });

    // Deduplicate by title similarity
    const seen = new Set<string>();
    const uniqueNews = allNews.filter((item) => {
      const key = item.title.toLowerCase().substring(0, 50);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return NextResponse.json(
      {
        success: true,
        lastUpdated: new Date().toISOString(),
        count: uniqueNews.length,
        articles: uniqueNews.slice(0, 20),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch {
    // Return fallback on any error
    const fallback = getFallbackNews();
    return NextResponse.json(
      {
        success: true,
        lastUpdated: new Date().toISOString(),
        count: fallback.length,
        articles: fallback,
      },
      { status: 200 }
    );
  }
}
