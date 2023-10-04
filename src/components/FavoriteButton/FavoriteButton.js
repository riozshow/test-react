import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/store";
import styles from "./FavoriteButton.module.scss";

function FavoriteButton({ isFavorite, id }) {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <i
      onClick={handleToggleFavorite}
      className={`${styles.favoriteButton} ${isFavorite ? "fa-solid fa-star" : "fa-regular fa-star"}`}
    ></i>
  );
}

export default FavoriteButton;
