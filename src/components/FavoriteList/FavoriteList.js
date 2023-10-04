import styles from "./FavoriteList.module.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { getFavoriteCards } from "../../redux/store";

function FavoriteList() {
  const cards = useSelector((state) => getFavoriteCards(state));

  return (
    <article className={styles.column}>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id}>
            {card.title}
            <FavoriteButton isFavorite={card.isFavorite} id={card.id} />
          </Card>
        ))}
        {cards.length === 0 ? <p className={styles.emptyInfo}>Empty</p> : null}
      </ul>
    </article>
  );
}

export default FavoriteList;
