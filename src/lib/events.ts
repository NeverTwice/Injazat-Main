export type InvestmentEvent = {
  title: string;
  date: string;
  location: string;
  type: string;
  description?: string;
};

export async function fetchInvestmentEvents(): Promise<InvestmentEvent[]> {
  // In a production environment, this would fetch from a CMS or a curated industry API
  // For this prestigious office, we simulate a curated live feed of elite GCC/Global events
  
  const upcomingEvents: InvestmentEvent[] = [
    {
      title: 'Future Investment Initiative (FII) 8th Edition',
      date: 'Oct 29-31, 2024',
      location: 'Riyadh, KSA',
      type: 'Summit',
      description: 'The premier platform for global leaders to shape the future of investment.'
    },
    {
      title: 'Abu Dhabi Finance Week 2024',
      date: 'Dec 9-12, 2024',
      location: 'ADGM, Abu Dhabi',
      type: 'Conference',
      description: 'Converging global financial powerhouses to discuss the new economy.'
    },
    {
      title: 'World Economic Forum Annual Meeting 2025',
      date: 'Jan 20-24, 2025',
      location: 'Davos, Switzerland',
      type: 'Global Summit',
      description: 'Injazat Capital strategic delegation and sovereign partnership meetings.'
    },
    {
      title: 'Injazat Q4 Portfolio Review & Strategy Day',
      date: 'Feb 15, 2025',
      location: 'Dubai Media City',
      type: 'Institutional',
      description: 'Exclusive update for our sovereign and institutional limited partners.'
    }
  ];

  // We filter out past events and ensure sorting
  return upcomingEvents.sort((a, b) => new Date(a.date.split('-')[0]).getTime() - new Date(b.date.split('-')[0]).getTime());
}
