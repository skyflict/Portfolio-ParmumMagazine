import React from "react";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img
        className={styles.icon}
        src="https://www.freeiconspng.com/uploads/search-icon-png-21.png"
        alt="поиск"
      />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск духов ..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
          alt="закрыть"
        />
      )}
    </div>
  );
};

export default Search;
