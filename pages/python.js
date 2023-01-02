/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Python.module.css";

const Python = () => {
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
            <h2>PYTHON</h2>
            <p>
              Python is a popular programming language for data science and
              machine learning because it is easy to use, has a large and active
              community, and has a wealth of libraries and frameworks that can
              be leveraged for these tasks.
            </p>
            <p>
              In data science, Python is often used for tasks such as data
              wrangling, exploration, and analysis. It has a number of libraries
              for working with data, including NumPy for numerical computing,
              pandas for data manipulation and analysis, and Matplotlib for data
              visualization.
            </p>
            <p>
              In machine learning, Python has a number of powerful libraries
              that can be used to build and train models. Some of the most
              popular include scikit-learn, which provides a wide range of
              algorithms for classification, regression, and clustering, and
              TensorFlow, which is a powerful library for deep learning.
            </p>
            <p>
              Overall, Python is a versatile language that is well-suited to a
              wide range of data science and machine learning tasks, making it a
              popular choice among practitioners in these fields.
            </p>
          </div>
          <Link href="/">
            <button className={styles.goHomeBtn}>Go back to home</button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Python;
