export async function getPosterImages(movies: Movie[]) {
    const apiEndpoints = movies.map(movie => `/api/posterImages?movieId=${movie.id}`);
    const responses = await Promise.all(apiEndpoints.map(endpoint => fetch(endpoint)));
    const data = await Promise.all(responses.map(response => response.json()));

    const posterImage = data.map((movie, index) => ({
        movieId: movies[index].id,
        posterUrl: "https://image.tmdb.org/t/p/w500" + movie.posters[0].file_path
    }));

    return posterImage;
}


interface Movie {
    id: number;
    title: string;
    posterUrl: string;
    release_date: string;
  }