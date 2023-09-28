import { useState } from "react";
import shortid from "shortid";
import Column from "../Column/Column";
import styles from "./List.module.scss";
import ColumnForm from "../ColumnForm/ColumnForm";
import { useSelector } from "react-redux";

function List() {
  const columns = useSelector((state) => state.columns);

  const setColumns = () => {};

  const addColumn = (newColumn) => {
    setColumns([...columns, { id: shortid(), ...newColumn }]);
  };

  const addCard = (columnId, newCard) => {
    setColumns((state) => {
      const columnUpdated = state.find((column) => column.id === columnId);
      columnUpdated.cards = [...columnUpdated.cards, newCard];
      return [...state];
    });
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Things to do<span>soon!</span>
        </h1>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <ColumnForm action={addColumn} />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            {...column}
            addCard={(newCard) => addCard(column.id, newCard)}
          />
        ))}
      </section>
    </div>
  );
}

export default List;
