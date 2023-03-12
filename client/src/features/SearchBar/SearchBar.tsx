import "./Searchbar.style.scss";
import { Dispatch, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ISearchBar } from "./SearchBar.types";

export const SearchBar = ({
  className,
  activeOverlay,
  toggleOverlay,
}: ISearchBar) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const overlayRef = useRef<Element | null>(null);

  useEffect(() => {
    if (overlayRef.current === null) {
      const overlayEl = document.querySelector("#overlay");

      overlayRef.current = overlayEl;
    }
  }, []);

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
        aria-haspopup="listbox"
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
          onFocus={() => toggleOverlay({ overlay: "search", type: "open" })}
        />
      </form>
      {overlayRef.current &&
        createPortal(
          <div
            aria-expanded={activeOverlay === "search"}
            className="search-results"
          >
            <button
              onPointerUp={() =>
                toggleOverlay({ overlay: "search", type: "close" })
              }
            >
              Steng
            </button>
          </div>,
          overlayRef.current
        )}
    </>
  );
};
