import { NextRequest, NextResponse } from "next/server";    

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json([]);
    }

    try {
        // Fetch recommendations from the localhost API
        const response = await fetch(`http://localhost:8000/recommend/${query}/10`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const recommendations = await response.json();
        return NextResponse.json(recommendations);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch recommendations' }, { status: 500 });
    }
}

interface Movie {
    id: number;
    title: string;
    posterUrl: string;
    release_date: string;
}
  