import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSearchPhrase } from "../../redux/searchPhraseRedux";

const SearchForm = () => {
  const searchPhrase = useSelector((state) => state.searchPhrase);
  const [search, setSearch] = useState(searchPhrase);
  const dispatch = useDispatch();

  const applySearch = (e) => {
    e.preventDefault();
    dispatch(setSearchPhrase(search));
  };

  return (
    <form className={styles.searchForm} onSubmit={applySearch}>
      <TextInput onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search..." />
      <Button onClick={() => applySearch()}>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
