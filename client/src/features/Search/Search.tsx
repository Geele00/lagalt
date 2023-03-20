import "./Search.style.scss";
import { FormEvent, useEffect, useRef, useState } from "react";
import { SearchResult } from "./SearchResult/SearchResult";
import { HrDivider } from "src/components/HrDivider/HrDivider";
import { ISearchBar } from "./Search.types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAuth } from "src/auth/Auth.Provider";
import { useOverlay } from "src/features/Overlay/Overlay.Provider";

export const SearchBar = ({ className }: ISearchBar) => {
  const { authState } = useAuth();
  const { activeOverlay, toggleOverlay } = useOverlay();

  const [searchString, setSearchString] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  const filters = {
    size: 20,
    sort: "createdAt",
    query: searchString,
  };

  console.log(searchString);

  const queryKey = ["/search", { filters, token: authState.token }];

  const { data } = useInfiniteQuery({
    queryKey,
    enabled: !!authState.token && !!searchString.length,
  });

  console.log(data && data);

  const overlayRef = useRef<Element | null>(null);

  useEffect(() => {
    if (overlayRef.current === null) {
      const overlayEl = document.querySelector("#overlay");

      overlayRef.current = overlayEl;
    }
  }, []);

  const onInput = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setSearchString(input.value);
    console.log(input.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchInputRef.current) return;

    switch (e.key) {
      case "Escape":
        searchInputRef.current.value = "";
        searchInputRef.current.blur();
    }
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
          type="text"
          ref={searchInputRef}
          onFocus={() => toggleOverlay({ overlay: "search", type: "open" })}
        />
      </form>
    </>
  );
};
