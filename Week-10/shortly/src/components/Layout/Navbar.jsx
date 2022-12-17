import styles from "./Layout.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles["navbar-brand"]}>
        Shortly
      </a>
      <section className={styles["navbar-group"]}>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </section>
      <section className={styles["navbar-group"]}>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </section>
    </nav>
  );
};

export {Navbar};
