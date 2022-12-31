/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Statistics = () => {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleScroll = useCallback(
    (event) => {
      if (window.scrollY > 10) {
        router.push("/linear-algebra");
      }
    },
    [router]
  );

  return (
    <>
      <div
        style={{
          height: "102vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4D8FAC",
          color: "white",
        }}
      >
        <motion.div
          initial={{ x: "100%", rotateY: 90 }}
          animate={{ x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>STATISTICS</h2>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              Data scientists use statistics to analyze and interpret data, make
              predictions and inferences, and test hypotheses.
            </p>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              Some common statistical techniques that data scientists use
              include:
            </p>
            <ol>
              <li style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                Descriptive statistics: used to summarize and describe a
                dataset, such as calculating the mean, median, and standard
                deviation.
              </li>
              <li style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                Inferential statistics: used to make predictions or inferences
                about a population based on a sample of data.
              </li>
              <li style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                Regression analysis: used to identify the relationships between
                different variables and predict how one variable will change
                based on changes in another.
              </li>
              <li style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                Hypothesis testing: used to test a specific hypothesis or
                assumption about a population based on a sample of data.
              </li>
            </ol>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
              Overall, data scientists use statistics to gain insights and make
              informed decisions based on data.
            </p>
          </div>
          <Link href="/linear-algebra">
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
              Linear Algebra
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Statistics;
