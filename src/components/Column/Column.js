import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";

function Column({ title, icon, cards, addCard }) {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`fa fa-${icon} ${styles.icon}`}></span>
        {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id}>{card.title}</Card>
        ))}
      </ul>
      <CardForm action={addCard} />
    </article>
  );
}

export default Column;
