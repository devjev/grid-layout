import styles from "./Header.module.css";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <header className={`${className ?? ""} ${styles.header}`}>
      <h1 className={styles.title}>Grid App Shell</h1>
      <p className={styles.tagline}>
        Native responsive layout: <code>clamp()</code> /{" "}
        <code>minmax()</code> for fluid sizing, media queries to rearrange the
        shell, container queries for components.
      </p>
    </header>
  );
}
