/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Calculus = () => {
  const router = useRouter();

  const handleScroll = useCallback(
    (event) => {
      if (window.scrollY > 5) {
        router.push("/python");
      }
    },
    [router]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div
        style={{
          height: "102vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E68364",
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
            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>CALCULUS</h2>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              Calculus is a branch of mathematics that deals with the study of
              rates of change and optimization. It is widely used in data
              science and machine learning to:
            </p>
            <ol>
              <li style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                Optimize machine learning models: Many machine learning
                algorithms involve optimization, which involves finding the
                values of parameters that minimize or maximize some objective
                function. Calculus is used to find the optimal values of these
                parameters by taking the derivative of the objective function
                and setting it to zero.
              </li>
              <li style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                Analyze data: Calculus is used to analyze data by finding the
                rate of change of a function at any given point. This can be
                useful for understanding trends in data and making predictions
                about future values.
              </li>
              <li style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                Model complex systems: Calculus is used to model complex systems
                by studying how different variables change over time and how
                they are related to one another. This is useful for
                understanding and predicting the behavior of systems in fields
                such as finance, biology, and engineering.
              </li>
              <li style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                Understand machine learning algorithms: Many machine learning
                algorithms, such as gradient descent and backpropagation, rely
                on calculus to optimize model performance. Understanding
                calculus can therefore help data scientists and machine learning
                engineers understand how these algorithms work and how to
                effectively use them.
              </li>
            </ol>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              Overall, calculus is an important tool for data scientists and
              machine learning engineers because it allows them to optimize
              machine learning models, analyze data, model complex systems, and
              understand machine learning algorithms. It is a key component of
              the mathematical foundation of data science and machine learning.
            </p>
          </div>
          <Link href="/python">
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
              Python
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Calculus;
