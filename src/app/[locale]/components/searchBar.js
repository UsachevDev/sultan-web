import styles from './searchBar.module.css';

const SearchBar = ({ placeholderText = 'Поиск...', customStyles = {} }) => {
  return (
    <div className={styles["search-bar"]} style={customStyles}>
      <input 
        type="text" 
        className={styles["search-input"]} 
        placeholder={placeholderText} 
      />
      <button className={styles["search-button"]}>
        <div className={styles["search-icon-circle"]}>
          <svg
            className={styles["search-icon"]}
            width="18.35"
            height="18.35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.3" />
            <line x1="16" y1="16" x2="22" y2="22" stroke="white" strokeWidth="1.3" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default SearchBar;
