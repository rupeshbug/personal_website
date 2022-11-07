import styles from "./Container.module.css";

const Container = (props) => {
  return (
    <div {...props} className={styles.container}>
      {props.children}
    </div>
  );
};

export default Container;
