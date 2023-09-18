import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import shortid from "shortid";

function CardForm({ action }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ id: shortid(), title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
