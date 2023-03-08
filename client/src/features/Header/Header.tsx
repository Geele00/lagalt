import "./style.scss";
import { useEffect, useReducer } from "react";
import { ProfileButton } from "src/features/ProfileButton/ProfileButton";
import { SearchBar } from "src/features/SearchBar/SearchBar";
import { Menu } from "src/features/Menu/Menu";
import { Filter } from "src/features/Filter/Filter";
import { OverlayOptions } from "./types";

const reducer = (activeOverlay: OverlayOptions, toggle: OverlayOptions) => {
  if (toggle === "close") return null;
  if (toggle === activeOverlay) return null;
  return toggle;
};

interface IHeader {
  routeChanged: {};
}

export const Header = ({ routeChanged }: IHeader) => {
  const [activeOverlay, toggleOverlay] = useReducer(reducer, null);

  useEffect(() => {
    toggleOverlay("close");
  }, [routeChanged]);

  return (
    <header className="main-header">
      <Menu activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />

      {window.location.pathname === "/" && (
        <Filter activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />
      )}

      <SearchBar className="main-header__search-bar" />

      <ProfileButton />
    </header>
  );
};
