/* eslint-disable @next/next/no-img-element */

import styles from "../styles/About.module.css";
import "animate.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#e8c8ce",
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
        loaded={particlesLoaded}
      ></Particles>
      <div
        style={{
          position: "fixed",
          zIndex: 10,
          opacity: 0.8,
          top: "0",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flexBasis: "45%" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Hey I am Rupesh Chaulagain & I am Data Scientist and Machine
            Learning Engineer
          </h2>
          <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
            I am currenly diving deep into statistics, linear algebra, calculus
            and python
          </p>
          <div style={{ display: "flex" }}>
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
                My Blogs
              </button>
            </Link>
            <button
              style={{
                marginTop: "1rem",
                padding: "10px 15px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "1.1rem",
                marginLeft: "1rem",
              }}
            >
              Download My CV
            </button>
          </div>
        </div>
        <div style={{ height: "100%", flexBasis: "45%" }}>
          <img
            src="/profile.png"
            alt="photo"
            style={{ marginTop: "2rem", height: "85%", marginTop: "5rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
