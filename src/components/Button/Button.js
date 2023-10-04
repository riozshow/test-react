import styles from "./Button.module.scss";

function Button({ children, disabled }) {
  return (
    <button disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
