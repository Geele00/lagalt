import "./Search.style.scss";
import { FormEvent, useRef, useState } from "react";
import { ISearchBar } from "./Search.types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAuth } from "src/auth/Auth.Provider";
import { useOverlay } from "src/features/Overlay/Overlay.Provider";
import { IProjectsPage } from "src/types/models/Project";
import { useDebounce } from "src/components/__hooks/useDebounce";
import { SearchOverlay } from "./SearchOverlay/SearchOverlay";
import { createPortal } from "react-dom";

export const Search = ({ className }: ISearchBar) => {
  const { authState } = useAuth();
  const { activeOverlay, toggleOverlay } = useOverlay();

  const [searchString, setSearchString] = useState("");
  const debouncedSearch = useDebounce(searchString, searchString[1] ? 1000 : 0);

  const filters = {
    size: 20,
    sort: "createdAt",
    query: debouncedSearch,
  };

  const queryKey = ["/search", { filters, token: authState.token }];

  const { data } = useInfiniteQuery<IProjectsPage>({
    queryKey,
    enabled: !!authState.token && !!debouncedSearch.length,
    keepPreviousData: true,
  });

  const onInput = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setSearchString(input.value);
  };

  const searchInputRef = useRef<HTMLInputElement>(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchInputRef.current) return;

    switch (e.key) {
      case "Escape":
        searchInputRef.current.value = "";
        setSearchString("");
        searchInputRef.current.blur();
    }
  };

  return (
    <>
      {activeOverlay === "search" &&
        createPortal(
          <SearchOverlay data={data} searchQuery={debouncedSearch} />,
          document.getElementById("overlay-container") as HTMLElement
        )}
      <div className={`${className} search-bar`}>
        <img
          src="/images/magnifying-glass.png"
          onPointerDown={(e) => {
            e.preventDefault();
            searchInputRef.current?.focus();
          }}
        />
        <input
          onKeyDown={onKeyDown}
          onInput={onInput}
          aria-haspopup="listbox"
          aria-controls="search-dropdown"
          role="search"
          type="text"
          ref={searchInputRef}
          onFocus={() => toggleOverlay({ overlay: "search", type: "open" })}
        />
      </div>
    </>
  );
};
