import { NextResponse } from 'next/server';

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

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableId}`;
    const response = await fetch(airtableUrl, {
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
    const count = data.records.length;

    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error('Waitlist count API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
