import Link from "next/link";
import Button from "../../ui/Button";
import styles from "./HeroSection.module.css";

/* eslint-disable @next/next/no-img-element */

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSection_content}>
        <p className={styles.mainText}>I Stay Curious</p>
        <p className={styles.secondaryText}>
          And learn new things related to data science and machine learning.
        </p>
        <div className={styles.buttons}>
          <Link href="/blogs">
            <a className={styles.writingBtn}>
              <Button text="See My Writings" />
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.aboutBtn}>
              <Button text="About Me" />
            </a>
          </Link>
        </div>
      </div>
      <img className={styles.image} src="/29.svg" alt="data science" />
    </div>
  );
};

export default HeroSection;
