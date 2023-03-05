import "./style.scss";
import { useReducer } from "react";
import { ProfileButton } from "src/features/ProfileButton/ProfileButton";
import { SearchBar } from "src/features/SearchBar/SearchBar";
import { Menu } from "src/features/Menu/Menu";
import { Filter } from "src/features/Filter/Filter";
import { OverlayOptions } from "./types";

const reducer = (activeOverlay: OverlayOptions, toggled: OverlayOptions) => {
  return toggled === activeOverlay ? null : toggled;
};

export const Header = () => {
  const [activeOverlay, dispatch] = useReducer(reducer, null);

  return (
    <header className="main-header">
      <Menu activeOverlay={activeOverlay} overlayDispatch={dispatch} />

      {window.location.pathname === "/" && (
        <Filter activeOverlay={activeOverlay} overlayDispatch={dispatch} />
      )}

      <SearchBar className="main-header__search-bar" />

      <ProfileButton />
    </header>
  );
};
