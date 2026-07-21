import { NextResponse } from 'next/server';
import { fetchFinancialNews } from '@/lib/news';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const news = await fetchFinancialNews();
    return NextResponse.json(news);
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}