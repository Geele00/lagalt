import "./SearchOverlay.style.scss";
import { ExploreSkills } from "src/components/ExploreSkills/ExploreSkills";
import { useOverlay } from "src/features/Overlay/Overlay.Provider";
import { IProjectPageData } from "../Search.types";
import { useSearchResults } from "./useSearchResults";

interface ISearchOverlay extends IProjectPageData {
  searchQuery: string;
}

export const SearchOverlay = ({ data, searchQuery }: ISearchOverlay) => {
  const { activeOverlay } = useOverlay();
  const searchResults = useSearchResults(data);
  console.log(data);

  return (
    <div aria-expanded={activeOverlay === "search"} className="search-overlay">
      <h2 className="search-overlay__title">Utforsk</h2>
      {searchQuery.length ? searchResults : <ExploreSkills />}
    </div>
  );
};
