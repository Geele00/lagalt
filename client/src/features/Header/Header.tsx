import "./Header.style.scss";
import { Filter } from "src/features/Filter/Filter";
import { ProfileButton } from "./ProfileButton/ProfileButton";
import { Menu } from "./Menu/Menu";
import { CloseButton } from "./CloseButton/CloseButton";
import { SearchBar } from "../Search/Search";
import { OverlayProvider } from "../OverlayContext/OverlayProvider";

export const Header = () => {
  return (
    <OverlayProvider>
      <header className="main-header">
        <Menu />
        <Filter />
        <SearchBar className="main-header__search-bar" />

        <div className="main-header__buttons">
          <ProfileButton />
          <CloseButton />
        </div>
      </header>
    </OverlayProvider>
  );
};
