import styles from "./ListForm.module.scss";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsRedux";

function ListForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleAddList = (e) => {
    e.preventDefault();
    dispatch(addList({ id: shortid(), title, description }));
    setTitle("");
    setDescription("");
  };

  const formValidate = () => (title.length === 0 || description.length === 0 ? true : false);

  return (
    <form onSubmit={handleAddList} className={styles.listForm}>
      <TextInput onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title..." />
      <TextInput onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Description.." />
      <Button disabled={formValidate()}>Add list</Button>
    </form>
  );
}

export default ListForm;
