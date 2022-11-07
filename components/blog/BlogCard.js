import styles from "./BlogCard.module.css";

const BlogCard = () => {
  return (
    <div className={styles.blogCard}>
      <p className={styles.category}>Statistics and Data Science</p>
      <div>
        <h3 className={styles.title}>Hypothesis Testing </h3>
        <p className={styles.description}>
          Hypothesis testing is a form of statistical inference that uses data
          from a sample to draw conclusions about a population parameter or a
          population probability distribution
        </p>
        <div className={styles.blogInfo}>
          <p>Oct 20 - 2022</p>
          <div className={styles.tags}>
            <p className={styles.tag}>Statistics</p>
            <p className={styles.tag}>Data Science</p>
            <p className={styles.tag}>Hypothesis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
