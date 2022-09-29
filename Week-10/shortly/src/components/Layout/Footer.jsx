import styles from "./Layout.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles["footer-brand"]}>Shortly</a>
      <section className={styles["footer-feature-section"]}>
        <section className={styles["footer-feature-section-column"]}>
          <h5>Features</h5>
          <a>Link Shortning</a>
          <a>Branded Links</a>
          <a>Analytics</a>
        </section>
        <section className={styles["footer-feature-section-column"]}>
          <h5>Resources</h5>
          <a>Blogs</a>
          <a>Developers</a>
          <a>Support</a>
        </section>
        <section className={styles["footer-feature-section-column"]}>
          <h5>Company</h5>
          <a>About</a>
          <a>Our Team</a>
          <a>Careers</a>
          <a>Contact</a>
        </section>
      </section>

      <section className={styles["footer-auth"]}>
        <a>Heading</a>
        <a>Sign Up</a>
      </section>
    </footer>
  );
};

export {Footer};
