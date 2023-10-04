import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { useSelector } from "react-redux";
import { getFilteredCards } from "../../redux/store";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

function Column({ id, title, icon }) {
  const cards = useSelector((state) => getFilteredCards(state, id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`fa fa-${icon} ${styles.icon}`}></span>
        {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id}>
            {card.title}
            <FavoriteButton isFavorite={card.isFavorite} id={card.id} />
          </Card>
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
}

export default Column;
