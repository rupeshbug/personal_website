/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../ui/Button";
import styles from "./Navbar.module.css";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Navbar = () => {
  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(false);
    } else {
      setColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        color ? styles.navbarWithBg : styles.navbarWithoutBg
      }`}
    >
      <div className={styles.logo}>
        <img
          className={styles.rc}
          style={{ marginRight: "8px", marginTop: "-4px" }}
          src="/RC.svg"
          alt="data insights"
        />
        <img
          className={styles.dataInsights}
          src="/data_insights.svg"
          alt="data insights"
        />
      </div>
      <div className={styles.navItems}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>My Story</a>
        </Link>
      </div>
      <div className={styles.navButton}>
        <Link href="/blogs">
          <a>
            <Button text="Blogs" />
          </a>
        </Link>
      </div>
      <div className={styles.socialIcons}>
        <Link href="/">
          <a className={styles.icon}>
            <AiOutlineLinkedin size={30} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.icon}>
            <AiOutlineInstagram size={30} />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
