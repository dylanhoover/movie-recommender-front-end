import styles from "./page.module.css";
import Link from "next/link";
import StyledButton from "../components/StyledButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Discover Your Next Favorite Movie</h1>
          <p className={styles.subtitle}>
            Get personalized movie recommendations based on your taste.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/recommender">
              <StyledButton variant="primary">Get Started</StyledButton>
            </Link>
            <Link href="/about">
              <StyledButton variant="secondary">Learn More</StyledButton>
            </Link>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3>Smart Recommendations</h3>
            <p>Advanced algorithms to match your movie preferences</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Extensive Library</h3>
            <p>Access to thousands of movies across different genres</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Easy to Use</h3>
            <p>Simple interface to quickly find your next watch</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Movie Recommender. All rights reserved.</p>
      </footer>
    </div>
  );
}
