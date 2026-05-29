import styles from "./App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

/*
 * The app shell.
 *
 * Note that the markup here carries NO layout ordering logic — each region just
 * declares which grid area it belongs to (via its own class in App.module.css).
 * Rearranging the whole shell at a breakpoint is done purely by redrawing the
 * grid-template-areas map in CSS; this component never changes.
 */
export default function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Main className={styles.main} />
      <Footer className={styles.footer} />
    </div>
  );
}
