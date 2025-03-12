export const getRecommendations = async (query: string): Promise<Movie[]> => {
    const response = await fetch(`api/movieRecommendations?query=${query}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.recommendations;
};

interface Movie {
    id: number;
    title: string;
    posterUrl: string;
    release_date: string;
}


