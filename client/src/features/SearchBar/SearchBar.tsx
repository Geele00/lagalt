import "./style.scss";

export const SearchBar = () => {
  const onInput = (e: any) => {
    // preview logic
  };

  const onSubmit = (e: any) => {
    // submit logic
  };

  return (
    <form
      className="search"
      role="search"
      onInput={onInput}
      onSubmit={onSubmit}
    >
      <img src="/images/magnifying-glass.png" />
      <input className="search_input" type="text" />
    </form>
  );
};
