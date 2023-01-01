/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";

const Python = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#875F9A",
          color: "white",
          padding: "0 10rem",
        }}
      >
        <motion.div
          initial={{ x: "100%", rotateY: 90 }}
          animate={{ x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>PYTHON</h2>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              Python is a popular programming language for data science and
              machine learning because it is easy to use, has a large and active
              community, and has a wealth of libraries and frameworks that can
              be leveraged for these tasks.
            </p>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              In data science, Python is often used for tasks such as data
              wrangling, exploration, and analysis. It has a number of libraries
              for working with data, including NumPy for numerical computing,
              pandas for data manipulation and analysis, and Matplotlib for data
              visualization.
            </p>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              In machine learning, Python has a number of powerful libraries
              that can be used to build and train models. Some of the most
              popular include scikit-learn, which provides a wide range of
              algorithms for classification, regression, and clustering, and
              TensorFlow, which is a powerful library for deep learning.
            </p>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              Overall, Python is a versatile language that is well-suited to a
              wide range of data science and machine learning tasks, making it a
              popular choice among practitioners in these fields.
            </p>
          </div>
          <Link href="/">
            <button
              style={{
                marginTop: "1rem",
                padding: "10px 15px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "rgb(228, 173, 24)",
                color: "white",
                fontSize: "1.1rem",
              }}
            >
              Go back to home
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Python;
