import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addColumn } from "../../redux/store";
import { useParams } from "react-router-dom";

function ColumnForm() {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const { listId } = useParams();

  const dispatch = useDispatch();

  const handleAddColumn = (e) => {
    e.preventDefault();
    dispatch(addColumn({ id: shortid(), listId, title, icon, cards: [] }));
    setTitle("");
    setIcon("");
  };

  return (
    <form onSubmit={handleAddColumn} className={styles.columnForm}>
      <TextInput onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title..." />
      <TextInput onChange={(e) => setIcon(e.target.value)} value={icon} placeholder="Icon.." />
      <Button>Add column</Button>
    </form>
  );
}

export default ColumnForm;
