import {Navbar, Footer} from "../Layout";
import SiteImage from "../../site_image.png";
import styles from "./Layout.module.css";
import {ShortenUrl} from "../ShortUrl";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.jumbotron}>
          <section className={styles["jumbotron-title"]}>
            <h2>More than just shorter Links</h2>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
          </section>
          <section className={styles["jumbotron-image"]}>
            <img src={SiteImage} alt="site background image" />
          </section>
        </section>
        <section className={styles["main-content"]}>
          <ShortenUrl />
        </section>
      </main>
      <Footer />
    </>
  );
};

export {Layout};
