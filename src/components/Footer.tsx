import styles from "./Footer.module.css";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <footer className={`${className ?? ""} ${styles.footer}`}>
      <p>
        Built with CSS Grid template areas, media queries, container queries,
        and <code>clamp()</code>/<code>minmax()</code> — no layout library.
      </p>
    </footer>
  );
}
