import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function ColumnForm({ action }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, icon, cards: [] });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <TextInput
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Title..."
      />
      <TextInput
        onChange={(e) => setIcon(e.target.value)}
        value={icon}
        placeholder="Icon.."
      />
      <Button>Add column</Button>
    </form>
  );
}

export default ColumnForm;
