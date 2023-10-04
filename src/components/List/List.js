import Column from "../Column/Column";
import styles from "./List.module.scss";
import ColumnForm from "../ColumnForm/ColumnForm";
import SearchForm from "../SearchForm/SearchForm";
import { useSelector } from "react-redux";
import { getListById, getColumnsByList } from "../../redux/store";
import { Navigate, useParams } from "react-router-dom";

function List() {
  const { listId } = useParams();
  const listData = useSelector((state) => getListById(state, listId));
  const columns = useSelector((state) => getColumnsByList(state, listId));

  if (!listData) {
    return <Navigate to="/" />;
  }

  const { description, title } = listData;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>
      <p className={styles.description}>{description}</p>
      <SearchForm />
      <ColumnForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
    </div>
  );
}

export default List;
