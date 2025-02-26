import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Movie Recommender</h1>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];
