import styles from "./Main.module.css";
import Card from "./Card";

type Props = {
  className?: string;
};

const cards = [
  {
    eyebrow: "Fluid sizing",
    title: "clamp() & minmax()",
    body: "Type scales with clamp(); the sidebar track flexes with minmax() — resizing without a single breakpoint.",
  },
  {
    eyebrow: "Shell layout",
    title: "Media queries",
    body: "Redraw grid-template-areas at a breakpoint and every region follows its area. The markup never changes.",
  },
  {
    eyebrow: "Component layout",
    title: "Container queries",
    body: "A component lays itself out from its own container's width, so it adapts to where it's dropped.",
  },
  {
    eyebrow: "No library",
    title: "All native CSS",
    body: "clamp/minmax for fluid sizing, media queries for the shell, container queries for the pieces inside it.",
  },
];

export default function Main({ className }: Props) {
  return (
    <main className={`${className ?? ""} ${styles.main}`}>
      <section id="container" className={styles.intro}>
        <h2>Components adapt to their slot</h2>
        <p className={styles.lead}>
          Every card below is the <em>same</em> component as the one in the
          sidebar. In this wide area they render side-by-side; in the narrow
          sidebar the identical card stacks. That's a container query at work —
          the component responds to its container, not the window.
        </p>
      </section>

      {/*
        Wide slot: these cards sit in a roomy grid, so each card's container is
        wide enough to render side-by-side (image beside text).
      */}
      <div className={styles.grid}>
        {cards.map((c) => (
          <Card
            key={c.title}
            eyebrow={c.eyebrow}
            title={c.title}
            body={c.body}
          />
        ))}
      </div>
    </main>
  );
}
