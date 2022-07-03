import { useState } from "react";
import { AiFillWindows, AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBar.module.css";

function SearchBar({ showInput = true, width, placeholder }) {
  const decoration = { width: width };
  const [showBar, setShowBar] = useState(showInput);
  const handleSearch = () => {
    if (!showBar) {
      setShowBar(true);
    } else {
      alert("holis");
    }
  };
  return (
    <div className={styles.wrapper}>
      {showBar && (
        <input
          type="search"
          className={styles.textInput}
          placeholder={placeholder ?? "Buscar"}
          style={decoration}
        />
      )}
      <AiOutlineSearch
        size={30}
        className={styles.searchIcon}
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
