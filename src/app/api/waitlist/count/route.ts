import { NextResponse } from 'next/server';
import { WAITLIST_BASELINE } from '@/lib/constants';

export const revalidate = 60; // Revalidate every 60 seconds

export async function GET() {
  try {
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_TABLE_ID;
    const apiToken = process.env.AIRTABLE_API_TOKEN;

    if (!baseId || !tableId || !apiToken) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Airtable pages at 100 records — follow the offset cursor to count them all
    let count = 0;
    let pageOffset: string | undefined;

    do {
      const url = new URL(`https://api.airtable.com/v0/${baseId}/${tableId}`);
      url.searchParams.set('pageSize', '100');
      if (pageOffset) url.searchParams.set('offset', pageOffset);

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });

      if (!response.ok) {
        console.error('Airtable error:', response.status);
        return NextResponse.json(
          { error: 'Failed to fetch count' },
          { status: 500 }
        );
      }

      const data = await response.json();
      count += data.records.length;
      pageOffset = data.offset;
    } while (pageOffset);

    return NextResponse.json({ count: count + WAITLIST_BASELINE }, { status: 200 });
  } catch (error) {
    console.error('Waitlist count API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
