import "./Searchbar.style.scss";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ISearchBar } from "./SearchBar.types";
import { SearchResult } from "./SearchResult/SearchResult";
import { HrDivider } from "src/components/HrDivider/HrDivider";

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
      <div
        aria-expanded={activeOverlay === "search"}
        className="search-results"
      >
        <ul>
          <SearchResult />
          <HrDivider />
          <SearchResult />
          <HrDivider />
          <SearchResult />
          <HrDivider />
          <SearchResult />
          <HrDivider />
          <SearchResult />
          <HrDivider />
          <SearchResult />
          <HrDivider />
          <SearchResult />
          <HrDivider />
          <SearchResult />
          <HrDivider />
          <SearchResult />
          <HrDivider />
          <SearchResult />
        </ul>
      </div>

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

      <button
        className="search__close"
        role="Exit search results"
        onPointerUp={() => toggleOverlay({ overlay: "search", type: "close" })}
        disabled={activeOverlay !== "search"}
      />
    </>
  );
};
