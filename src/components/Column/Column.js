import styles from "./Column.module.scss";

function Column({ title, icon }) {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`fa fa-${icon} ${styles.icon}`}></span>
        {title}
      </h2>
    </article>
  );
}

export default Column;
