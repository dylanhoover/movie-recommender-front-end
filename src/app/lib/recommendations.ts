export const getRecommendations = async (query: string): Promise<Movie[]> => {
  const response = await fetch(`/api/recommend/${query}/10`);
  console.log(response);
  const data = await response.json();
  return data.recommendations;
};

interface Movie {
  id: number;
  title: string;
  //   posterUrl: string;
  release_date: string;
}
