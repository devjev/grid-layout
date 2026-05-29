import styles from "./Sidebar.module.css";
import Card from "./Card";

type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <aside className={`${className ?? ""} ${styles.sidebar}`}>
      <nav className={styles.nav}>
        <h2 className={styles.heading}>Techniques</h2>
        <ul className={styles.list}>
          <li>
            <a href="#fluid">clamp() &amp; minmax()</a>
          </li>
          <li>
            <a href="#shell">Media queries</a>
          </li>
          <li>
            <a href="#container">Container queries</a>
          </li>
        </ul>
      </nav>

      {/*
        The SAME Card component as in <Main>, but dropped into this narrow
        slot. Because the card responds to its container's width (not the
        window), it lays itself out stacked here while the identical cards in
        main render side-by-side — at the very same viewport width.
      */}
      <div className={styles.cardSlot}>
        <p className={styles.note}>Same card, narrow slot:</p>
        <Card
          eyebrow="In the sidebar"
          title="Adapts to its slot"
          body="This card stacks because its container is narrow — not because the window is."
        />
      </div>
    </aside>
  );
}
