/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../styles/LinearAlg.module.css";

const LinearAlgebra = () => {
  // const router = useRouter();

  // const handleScroll = useCallback(
  //   (event) => {
  //     if (window.scrollY > 10) {
  //       router.push("/calculus");
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
            <h2>Linear Algebra</h2>
            <p>
              Linear algebra is an important mathematical discipline that is
              widely used in data science and machine learning. It provides the
              mathematical foundation for many algorithms and concepts that are
              essential in these fields, such as:
            </p>
            <ul className={styles.list}>
              <li>
                1. Matrix operations: Linear algebra is used to perform
                operations on matrices, such as multiplication, inversion, and
                decomposition. These operations are used in many machine
                learning algorithms, such as principal component analysis (PCA)
                and singular value decomposition (SVD).
              </li>
              <li>
                2. Vector operations: Linear algebra is also used to perform
                operations on vectors, such as dot products and projections.
                These operations are used in many machine learning algorithms,
                such as neural networks and natural language processing (NLP).
              </li>
              <li>
                3. Optimization: Many machine learning algorithms involve
                optimization, which involves finding the values of parameters
                that minimize or maximize some objective function. Linear
                algebra is used to solve systems of linear equations, which are
                often used to represent the optimization problem.
              </li>
              <li>
                4. Data visualization: Linear algebra is used to represent and
                manipulate high-dimensional data, which is often visualized
                using techniques such as PCA and t-SNE.
              </li>
            </ul>
            <p>
              In summary, linear algebra is an important tool for data
              scientists and machine learning engineers because it provides the
              mathematical foundation for many algorithms and concepts that are
              essential in these fields. It allows data scientists and machine
              learning engineers to perform complex operations on data and build
              powerful models that can learn from and make predictions about
              real-world data.
            </p>
          </div>
          <Link href="/calculus">
            <button className={styles.calculusBtn}>Calculus</button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default LinearAlgebra;
