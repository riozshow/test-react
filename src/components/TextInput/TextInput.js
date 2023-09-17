import styles from "./TextInput.module.scss";

const TextInput = ({ placeholder }) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholder} />
  );
};

export default TextInput;
