import "./Searchbar.style.scss";
import { Dispatch, useRef } from "react";
import { createPortal } from "react-dom";
import { OverlayOptions } from "../Header/types";

interface ISearchBar {
  className: string;
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}

export const SearchBar = ({
  className,
  activeOverlay,
  toggleOverlay,
}: ISearchBar) => {
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
    <>
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
          className="search-bar__input"
          type="text"
          ref={searchInputRef}
          onFocus={() => toggleOverlay({ overlay: "search", action: "open" })}
        />
      </form>
      <div
        aria-expanded={activeOverlay === "search"}
        className="search-results"
      >
        <button
          onPointerUp={() =>
            toggleOverlay({ overlay: "search", action: "close" })
          }
        >
          Steng
        </button>
      </div>
    </>
  );
};
