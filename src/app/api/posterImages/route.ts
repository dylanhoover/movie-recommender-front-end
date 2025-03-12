import { type NextRequest, NextResponse } from "next/server";


  export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const movieId = searchParams.get("movieId");

    const fetchPosterImages = async (movieId: number) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/images?include_language=en`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
              accept: "application/json",
            },
          }
        );
      
        if (!response.ok) {
          throw new Error(`Error fetching poster images: ${response.statusText}`);
        }
      
        const data = await response.json();
        return data;
      };

    const posterImages = await fetchPosterImages(Number(movieId));
    return NextResponse.json(posterImages);
  }
  
