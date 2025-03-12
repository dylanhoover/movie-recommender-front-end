"use client";
import { useState } from "react";
import Image from 'next/image';
import styles from "../recommender/recommender.module.css";
import StyledButton from "../StyledButton";
import Modal from "../Modal";
import { getRecommendations } from "../../utils/getRecommendations";
import NewSearch from "../NewSearch";
import { getPosterImages } from "../../utils/getPosterImages";
type Movie = {
  id: number;
  title: string;
  posterUrl: string;
  release_date: string;
};

export default function Recommender() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchMovie = async (query: string) => {
    if (query) {
        try {
            const recommendations = await getRecommendations(query);
            const posterImages = await getPosterImages(recommendations);
            const moviesWithPosterImages = recommendations.map((movie, index) => ({
              ...movie,
              posterUrl: posterImages[index].posterUrl
            }));
            setMovies(moviesWithPosterImages);
        } catch (error: any) {
            console.error(`Error fetching recommendations: ${error.message}`);
        }
    }
  };

  const handleGetNewRecommendations = async () => {
    if (searchQuery) {
      const recommendations = await getRecommendations(searchQuery);
      const posterImages = await getPosterImages(recommendations);
      const moviesWithPosterImages = recommendations.map((movie, index) => ({
        ...movie,
        posterUrl: posterImages[index].posterUrl
      }));
      setMovies(moviesWithPosterImages);
    
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <h1 className={styles.title}>Movie Recommendations</h1>

          {movies.length === 0 ? (
            <>
              <div className={styles.searchContainer}>
                <input
                  className={styles.searchInput}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className={styles.buttonContainer}>
                <StyledButton
                  variant="primary"
                  onClick={() => {
                    handleGetNewRecommendations();
                  }}
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
                    (
                      <div key={movie.id} className={styles.movieCard}>
                        <Image
                      src={movie.posterUrl}
                      alt={`${movie.title} poster`}
                      width={200}
                      height={300}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                      />
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
