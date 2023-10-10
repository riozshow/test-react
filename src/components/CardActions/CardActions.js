import styles from "./CardActions.module.scss";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import DeleteButton from "../DeleteButton/DeleteButton";

function CardActions({ card }) {
  return (
    <div className={styles.cardActions}>
      <FavoriteButton isFavorite={card.isFavorite} id={card.id} />
      <DeleteButton id={card.id} />
    </div>
  );
}

export default CardActions;
