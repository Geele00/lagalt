import "./SearchBar.scss";

export const SearchBar = () => {
  return (
    <form className="search" role="search">
      <img src="images/magnifying-glass.png" />
      <input className="search_input" type="text" />
    </form>
  );
};
