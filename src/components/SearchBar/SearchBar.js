import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <input type="search" className={styles.textInput} placeholder="Buscar" />
      <AiOutlineSearch size={30} className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
