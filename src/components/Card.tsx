import styles from "./Card.module.css";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

/*
 * A reusable card.
 *
 * TECHNIQUE 3 of 3 — container queries.
 * The OUTER .cardArea establishes a query container (container-type:
 * inline-size). The INNER .card switches its own layout based on the width of
 * that container — see Card.module.css. The component carries no knowledge of
 * the viewport, so the same Card adapts purely to wherever it's placed.
 */
export default function Card({ eyebrow, title, body }: Props) {
  return (
    <div className={styles.cardArea}>
      <article className={styles.card}>
        <div className={styles.media} aria-hidden="true" />
        <div className={styles.content}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.body}>{body}</p>
        </div>
      </article>
    </div>
  );
}
