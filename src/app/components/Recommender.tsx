"use client";
import { useState } from "react";
// import Image from "next/image";
import styles from "../recommender/recommender.module.css";
import StyledButton from "./StyledButton";
import Modal from "./Modal";
import { getRecommendations } from "../lib/recommendations";
import NewSearch from "./NewSearch";
type Movie = {
  id: number;
  title: string;
  // posterUrl: string;
  release_date: string;
};

export default function Recommender() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchMovie = async (query: string) => {
    // This will now trigger the hook to fetch recommendations based on searchQuery
    if (query) {
      const recommendations = await getRecommendations(query);
      setMovies(recommendations); // Ensure recommendations is an array
    }
  };

  const handleGetNewRecommendations = async () => {
    if (searchQuery) {
      const recommendations = await getRecommendations(searchQuery);
      setMovies(recommendations);
    }
    // Mock data - replace with real API call later
    // setMovies([
    //   {
    //     id: 1,
    //     title: "The Shawshank Redemption",
    //     posterUrl:
    //       "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    //     year: 1994,
    //   },
    //   {
    //     id: 2,
    //     title: "The Godfather",
    //     posterUrl:
    //       "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    //     year: 1972,
    //   },
    //   {
    //     id: 3,
    //     title: "The Dark Knight",
    //     posterUrl:
    //       "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    //     year: 2008,
    //   },
    // ]);
  };

  console.log(movies);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <h1 className={styles.title}>Movie Recommendations</h1>

          {movies.length === 0 ? (
            <>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className={styles.buttonContainer}>
                <StyledButton
                  variant="primary"
                  onClick={handleGetNewRecommendations}
                >
                  Find Movies
                </StyledButton>
              </div>
            </>
          ) : (
            <>
              <div className={styles.movieGrid}>
                {movies.map(
                  (movie) => (
                    console.log(movie),
                    (
                      <div key={movie.id} className={styles.movieCard}>
                        {/* <Image
                      src={movie.posterUrl}
                      alt={`${movie.title} poster`}
                      width={200}
                      height={300}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    /> */}
                        <h3 className={styles.movieTitle}>{movie.title}</h3>
                        <span className={styles.movieYear}>
                          {movie.release_date}
                        </span>
                      </div>
                    )
                  )
                )}
              </div>
              <div className={styles.buttonContainer}>
                <StyledButton
                  variant="secondary"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get New Recommendations
                </StyledButton>
              </div>
            </>
          )}
        </div>
      </main>
      <footer className={styles.footer}></footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewSearch
          handleSearchMovie={handleSearchMovie}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </div>
  );
}
