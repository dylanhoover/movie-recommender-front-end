import { getRecommendations } from "@/app/lib/recommendations";
// Define the expected structure of the JSON response
// interface Recommendation {
//   id: number;
//   title: string;
//   year: number;
//   posterUrl: string;
// }

function useRecommendation(query: string) {
  // implement normal fetch request
  const response = getRecommendations(query);
  return response;
}

export default useRecommendation;
