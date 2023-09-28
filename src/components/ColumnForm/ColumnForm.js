import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import shortid from "shortid";
import { useDispatch } from "react-redux";

function ColumnForm() {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();

  const addColumn = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_COLUMN",
      payload: { id: shortid(), title, icon, cards: [] },
    });
    setTitle("");
    setIcon("");
  };

  return (
    <form onSubmit={addColumn} className={styles.columnForm}>
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
