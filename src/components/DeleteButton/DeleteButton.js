import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/cardsRedux";
import styles from "./DeleteButton.module.scss";

function DeleteButton({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(id));
  };

  return <i onClick={handleDelete} className={`${styles.deleteButton} fa-solid fa-trash`}></i>;
}

export default DeleteButton;
