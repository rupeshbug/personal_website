import styles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.navButton}>{text}</button>;
};

export default Button;
