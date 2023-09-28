import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import shortid from "shortid";
import { useDispatch } from "react-redux";

function CardForm({ columnId }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addCard = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CARD", payload: { id: shortid(), title, columnId } });
    setTitle("");
  };

  return (
    <form onSubmit={addCard}>
      <TextInput
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Title..."
      />
      <Button>Add card</Button>
    </form>
  );
}

export default CardForm;
