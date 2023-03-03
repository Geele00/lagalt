import "./style.scss";

interface ISearchBar {
  className: string;
}

export const SearchBar = ({ className, ...props }: ISearchBar) => {
  const onInput = (e: any) => {
    // preview logic
  };

  const onSubmit = (e: any) => {
    // submit logic
  };

  return (
    <form
      className={`${className} search-bar`}
      role="search"
      onInput={onInput}
      onSubmit={onSubmit}
    >
      <img src="/images/magnifying-glass.png" />
      <input className="search-bar__input .input" type="text" />
    </form>
  );
};
