/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../styles/Statistics.module.css";

const Statistics = () => {
  // const router = useRouter();

  // const handleScroll = useCallback(
  //   (event) => {
  //     if (window.scrollY > 10) {
  //       router.push("/linear-algebra");
  //     }
  //   },
  //   [router]
  // );

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles.mainDiv}
          initial={{ x: "100%", rotateY: 90 }}
          animate={{ x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div className={styles.content}>
            <h2>STATISTICS</h2>
            <p>
              Data scientists use statistics to analyze and interpret data, make
              predictions and inferences, and test hypotheses.
            </p>
            <p>
              Some common statistical techniques that data scientists use
              include:
            </p>
            <ul className={styles.list}>
              <li>
                1. Descriptive statistics: used to summarize and describe a
                dataset, such as calculating the mean, median, and standard
                deviation.
              </li>
              <li>
                2. Inferential statistics: used to make predictions or
                inferences about a population based on a sample of data.
              </li>
              <li>
                3. Regression analysis: used to identify the relationships
                between different variables and predict how one variable will
                change based on changes in another.
              </li>
              <li>
                4. Hypothesis testing: used to test a specific hypothesis or
                assumption about a population based on a sample of data.
              </li>
            </ul>
            <p>
              Overall, data scientists use statistics to gain insights and make
              informed decisions based on data.
            </p>
          </div>
          <Link href="/linear-algebra">
            <button className={styles.linAlgBtn}>Linear Algebra</button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Statistics;
