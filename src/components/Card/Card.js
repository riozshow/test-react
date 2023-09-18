import styles from "./Card.module.scss";

function Card({ children }) {
  return <li className={styles.card}>{children}</li>;
}

export default Card;
