import Head from "next/head";
import BlogCard from "../components/blog/BlogCard";
import HeroSection from "../components/home/HeroSection";
import Container from "../components/ui/Container";
import styles from "../styles/Home.module.css";
import { ImBlog } from "react-icons/im";
import { useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([1, 2, 3]);

  return (
    <div>
      <Head>
        <title>Data Science - Rupesh Chaulagain</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/RC.svg" />
      </Head>

      <HeroSection />
      <Container style={{ marginTop: "2rem" }}>
        <div className={styles.recentBlogs_title}>
          <ImBlog size={25} />
          <p className={styles.heading}>My Recent Blogs</p>
        </div>
        {blogs.map((blog, index) => {
          return (
            <div className={styles.blogItems} key={index}>
              <div className={styles.blogNumber}>{index + 1}</div>
              <BlogCard />
            </div>
          );
        })}
      </Container>
    </div>
  );
}