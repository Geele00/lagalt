import { useRef } from "react";
import "./style.scss";

interface ISearchBar {
  className: string;
}

export const SearchBar = ({ className, ...props }: ISearchBar) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const onInput = (e: any) => {
    // const input = e.target as HTMLInputElement;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    // submit logic
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchInputRef.current) return;

    switch (e.key) {
      case "Escape":
        searchInputRef.current.value = "";
        searchInputRef.current.blur();
    }
    console.log(e.key);
  };

  // const onBlur = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (!searchInputRef.current) return;
  //
  //   searchInputRef.current.value = "";
  // };

  return (
    <form
      className={`${className} search-bar`}
      role="search"
      onInput={onInput}
      onSubmit={onSubmit}
    >
      <img
        src="/images/magnifying-glass.png"
        onPointerDown={(e) => {
          e.preventDefault();
          searchInputRef.current?.focus();
        }}
      />
      <input
        onKeyDown={onKeyDown}
        className="search-bar__input .input"
        type="text"
        ref={searchInputRef}
      />
    </form>
  );
};
