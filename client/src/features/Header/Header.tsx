import "./Header.style.scss";
import { Filter } from "src/features/Filter/Filter";
import { useReducer } from "react";
import { overlayReducer } from "./Header.helpers";
import { ProfileButton } from "./ProfileButton/ProfileButton";
import { Menu } from "./Menu/Menu";
import { CloseButton } from "./CloseButton/CloseButton";
import { PointerEvent } from "react";
import { SearchBar } from "../Search/Search";

export const Header = () => {
  const [activeOverlay, toggleOverlay] = useReducer(overlayReducer, null);

  return (
    <header className="main-header" data-overlay={activeOverlay}>
      <Menu activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />

      {
        //window.location.pathname === "/" && (
        <Filter activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />
        //)
      }

      <SearchBar
        className="main-header__search-bar"
        activeOverlay={activeOverlay}
        toggleOverlay={toggleOverlay}
      />

      <div className="main-header__buttons">
        <ProfileButton activeOverlay={activeOverlay} />
        <CloseButton
          toggleOverlay={toggleOverlay}
          activeOverlay={activeOverlay}
        />
      </div>
    </header>
  );
};
