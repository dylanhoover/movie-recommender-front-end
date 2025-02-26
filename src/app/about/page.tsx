import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <div className={styles.header}>
            <h1 className={styles.title}>About Movie Recommender</h1>
          </div>

          <p className={styles.description}>
            This movie recommender is a web application designed to help you
            find similar movies based on an input movie. The recommender uses a
            combination of content based filtering and collaborative filtering
            to generate recommendations. The idea for this project comes from a
            project I did in a data retrieval course at Santa Clara University.
          </p>

          <p className={styles.description}>
            Built with modern web technologies including:
          </p>

          <ul className={styles.techList}>
            <li className={styles.techItem}>Next.js</li>
            <li className={styles.techItem}>React</li>
            <li className={styles.techItem}>TypeScript</li>
          </ul>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
