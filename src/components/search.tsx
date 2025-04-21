import "../styles/search.css";

const Search = () => {
  return (
    <>
      <label htmlFor="search-field" className="hide"></label>
      <input
        type="text"
        className="search-bar"
        id="search-field"
        placeholder="Search..."
      />
    </>
  );
};

export default Search;
