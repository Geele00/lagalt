import "./Header.style.scss";
import { SearchBar } from "src/features/SearchBar/SearchBar";
import { Filter } from "src/features/Filter/Filter";
import { useReducer } from "react";
import { overlayReducer } from "./Header.helpers";
import { ProfileButton } from "./ProfileButton/ProfileButton";
import { Menu } from "./Menu/Menu";
import { CloseButton } from "./CloseButton/CloseButton";
import { PointerEvent } from "react";

export const Header = () => {
  const [activeOverlay, toggleOverlay] = useReducer(overlayReducer, null);

  const closeOverlay = (e: PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();

    toggleOverlay({ overlay: null, type: "close" });
  };

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

      {activeOverlay === null ? (
        <ProfileButton data-overlay={activeOverlay !== null} />
      ) : (
        <CloseButton onPointerUp={closeOverlay} />
      )}
    </header>
  );
};
