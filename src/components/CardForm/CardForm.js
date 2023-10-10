import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/cardsRedux";

function CardForm({ columnId }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddCard = (e) => {
    e.preventDefault();
    dispatch(addCard({ id: shortid(), title, columnId, isFavorite: false }));
    setTitle("");
  };

  return (
    <form onSubmit={handleAddCard}>
      <TextInput onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title..." />
      <Button>Add card</Button>
    </form>
  );
}

export default CardForm;
