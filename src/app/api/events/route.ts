import { NextResponse } from 'next/server';
import { fetchInvestmentEvents } from '@/lib/events';

export const revalidate = 86400; // Cache for 24 hours

export async function GET() {
  try {
    const events = await fetchInvestmentEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}