import styles from "./navbar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles["nav-brand"]}>
        To-do
      </a>
    </nav>
  );
};

export {NavBar};
