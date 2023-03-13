import "./Header.style.scss";
import { ProfileButton } from "src/features/ProfileButton/ProfileButton";
import { SearchBar } from "src/features/SearchBar/SearchBar";
import { Menu } from "src/features/Menu/Menu";
import { Filter } from "src/features/Filter/Filter";
import { useEffect, useReducer } from "react";
import { overlayReducer } from "./Header.helpers";

export const Header = () => {
  const [activeOverlay, toggleOverlay] = useReducer(overlayReducer, null);

  // useEffect(() => {
  // toggleOverlay({ type: "close", overlay: null });
  // }, [routeChanged]);

  return (
    <header className="main-header" data-overlay={activeOverlay}>
      <Menu activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />

      {window.location.pathname === "/" && (
        <Filter activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />
      )}

      <SearchBar
        className="main-header__search-bar"
        activeOverlay={activeOverlay}
        toggleOverlay={toggleOverlay}
      />

      <ProfileButton />
    </header>
  );
};
