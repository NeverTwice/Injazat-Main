import { NextResponse } from "next/server";

interface Event {
  date: string;
  dateISO: string;
  title: string;
  location: string;
  category: string;
  url: string;
  description: string;
}

// Curated list of real GCC/MENA investment events — update periodically
// These are sourced from official event websites and industry calendars
const ALL_EVENTS: Event[] = [
  {
    date: "Aug 31 – Sep 3, 2026",
    dateISO: "2026-08-31",
    title: "LEAP 2026",
    location: "Riyadh Front Exhibition Centre, Saudi Arabia",
    category: "Technology",
    url: "https://www.onegiantleap.com/",
    description: "Global tech event bringing together founders, investors, policymakers and industry leaders across AI, cloud, cybersecurity, fintech and digital commerce.",
  },
  {
    date: "Sep 7–9, 2026",
    dateISO: "2026-09-07",
    title: "AIM Congress 2026",
    location: "Dubai World Trade Centre, Dubai",
    category: "Investment",
    url: "https://www.aimcongress.com/",
    description: "World's leading investment platform focused on sustainable investment, digital economy, green finance, and public-private partnerships.",
  },
  {
    date: "Sep 14–16, 2026",
    dateISO: "2026-09-14",
    title: "Money20/20 Middle East",
    location: "Riyadh, Saudi Arabia",
    category: "FinTech",
    url: "https://middleeast.money2020.com/",
    description: "Premier fintech and financial services innovation event connecting payments, banking, and technology leaders across the MENA region.",
  },
  {
    date: "Sep 22–24, 2026",
    dateISO: "2026-09-22",
    title: "Seamless Fintech Middle East",
    location: "Dubai World Trade Centre, Dubai",
    category: "FinTech",
    url: "https://www.terrapinn.com/exhibition/seamless-middle-east/",
    description: "Connecting banks, financial institutions, governments, startups and investors. Covers digital commerce, payments, open finance and logistics.",
  },
  {
    date: "Oct 5–7, 2026",
    dateISO: "2026-10-05",
    title: "AI Everything Abu Dhabi 2026",
    location: "ADNEC Centre, Abu Dhabi",
    category: "Technology",
    url: "https://www.ai-everything.com/",
    description: "850+ AI enterprises and startups from 150+ countries. Highlights the UAE's ambitions as a global AI leader.",
  },
  {
    date: "Oct 12–13, 2026",
    dateISO: "2026-10-12",
    title: "AIM Summit Dubai 2026",
    location: "Dubai, UAE",
    category: "Investment",
    url: "https://aimsummit.com/",
    description: "Leading global forum for alternative investments. Institutional investors, family offices, sovereign wealth funds, and asset managers discuss trends shaping global capital markets.",
  },
  {
    date: "Oct 13–15, 2026",
    dateISO: "2026-10-13",
    title: "SuperReturn Middle East",
    location: "The Ritz-Carlton, DIFC, Dubai",
    category: "Private Equity",
    url: "https://informaconnect.com/superreturn-me/",
    description: "Premier private equity and venture capital event. 600+ senior attendees, 220+ LPs and 230+ GPs from MENA and beyond. Features summits on private credit, infrastructure, tech & VC.",
  },
  {
    date: "Nov 10–11, 2026",
    dateISO: "2026-11-10",
    title: "Education Investment MENA",
    location: "Dubai World Trade Centre, Dubai",
    category: "Investment",
    url: "https://informaconnect.com/education-investment-mena/",
    description: "Conference focused on education sector investment opportunities across the Middle East and North Africa region.",
  },
  {
    date: "Q1 2027",
    dateISO: "2027-01-15",
    title: "SuperReturn Saudi Arabia 2027",
    location: "Riyadh, Saudi Arabia",
    category: "Private Equity",
    url: "https://informaconnect.com/superreturn/",
    description: "GCC's flagship private capital conference in strategic partnership with Jada Fund of Funds. Institutional LP event with PIF, Mubadala, and 300+ institutional LPs.",
  },
  {
    date: "Q1 2027",
    dateISO: "2027-02-01",
    title: "Dubai FinTech Summit 2027",
    location: "Madinat Jumeirah, Dubai",
    category: "FinTech",
    url: "https://www.dubaifintechsummit.com/",
    description: "Global fintech leaders, regulators, and investors convene to explore the future of financial innovation in the GCC and beyond.",
  },
];

export async function GET() {
  const now = new Date();

  // Filter to only upcoming events (events that haven't ended yet — allow 3 days buffer)
  const upcomingEvents = ALL_EVENTS.filter((evt) => {
    const eventDate = new Date(evt.dateISO);
    const bufferDate = new Date(eventDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    return bufferDate >= now;
  }).sort((a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime());

  return NextResponse.json(
    {
      success: true,
      lastUpdated: now.toISOString(),
      count: upcomingEvents.length,
      events: upcomingEvents,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    }
  );
}
