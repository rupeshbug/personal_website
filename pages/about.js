/* eslint-disable @next/next/no-img-element */

import styles from "../styles/About.module.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#16A085",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "rgb(228, 173, 24)",
            },
            links: {
              color: "#9e9a93",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 5 },
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
      ></Particles>
      <motion.div
        className={styles.container}
        initial={{ x: "100%", rotateY: 90 }}
        animate={{ x: 0, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className={styles.content}>
          <h2 className={styles.intro}>
            Hey I am Rupesh Chaulagain & I am a Data Scientist and Machine
            Learning Engineer.
          </h2>
          <p className={styles.introPara}>
            I am currenly diving deep into statistics, linear algebra, calculus
            and python.
          </p>
          <div className={styles.buttons}>
            <Link href="/statistics">
              <button className={styles.toolkitBtn}>
                Look Into My Data Science Toolkit
              </button>
            </Link>
            <button className={styles.cvBtn}>Download My CV</button>
          </div>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.profileImg}
            src="/profile-pic.png"
            alt="photo"
          />
        </div>
      </motion.div>
    </>
  );
};

export default About;
