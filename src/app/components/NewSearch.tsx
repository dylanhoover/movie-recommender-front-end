import { useState } from "react";
import styles from "./components.module.css";
import StyledButton from "./StyledButton";
type NewSearchProps = {
  handleSearchMovie: (query: string) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export default function NewSearch({
  handleSearchMovie,
  setIsModalOpen,
}: NewSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnClick = () => {
    if (searchQuery.length > 0) {
      handleSearchMovie(searchQuery);
      setIsModalOpen(false);
    }
  };

  return (
    <div className={styles.newSearch}>
      <h1 className={styles.modalTitle}>Search for a movie</h1>
      <input
        type="text"
        className={styles.inputField}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className={styles.buttonContainer}>
        <StyledButton
          className={styles.buttonPrimary}
          variant="primary"
          onClick={handleOnClick}
        >
          Search
        </StyledButton>
        <StyledButton
          className={styles.buttonSecondary}
          variant="secondary"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </StyledButton>
      </div>
    </div>
  );
}
