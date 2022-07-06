import { useState } from "react";
import { AiFillWindows, AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBar.module.css";

function SearchBar({
  showInput = true,
  width = "40ch",
  placeholder,
  array = ["corona", "budweiser", "quilmes", "brahma", "nico"],
}) {
  const decoration = { width: width };
  const [showBar, setShowBar] = useState(showInput);
  const [searchValue, setSearchValue] = useState("");
  const [searchArray, setSearchArray] = useState(array);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setSearchArray(array);
    } else handleSearch(e.target.value);
  };
  const handleSearch = (value = searchValue) => {
    if (!showBar) {
      setShowBar(true);
    } else {
      let filtered = searchArray.filter((item) => item.includes(value));
      setSearchArray(filtered);
    }
  };
  return (
    <div className={styles.wrapper}>
      <span className={styles.box}>
        {showBar && (
          <input
            type="search"
            className={styles.textInput}
            placeholder={placeholder ?? "Buscar"}
            style={decoration}
            value={searchValue}
            onChange={handleChange}
          />
        )}
        <AiOutlineSearch
          size={30}
          className={styles.searchIcon}
          onClick={handleSearch}
        />
      </span>
      {searchValue != "" && (
        <ul className={styles.searchItems}>
          {searchArray.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
