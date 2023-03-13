import "./Header.style.scss";
import { SearchBar } from "src/features/SearchBar/SearchBar";
import { Filter } from "src/features/Filter/Filter";
import { useReducer } from "react";
import { overlayReducer } from "./Header.helpers";
import { ProfileButton } from "./ProfileButton/ProfileButton";
import { Menu } from "./Menu/Menu";

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
