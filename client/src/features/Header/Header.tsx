import "./Header.style.scss";
import { Filter } from "src/features/Filter/Filter";
import { ProfileMenu } from "./ProfileMenu/ProfileMenu";
import { CloseButton } from "./CloseButton/CloseButton";
import { SearchBar } from "src/features/Search/Search";
import { OverlayProvider } from "src/features/Overlay/Overlay.Provider";
import { Nav } from "./Nav/Nav";

export const Header = () => {
  return (
    <OverlayProvider>
      <header className={`main-header`}>
        <Nav />
        <Filter />
        <SearchBar className="main-header__search-bar" />

        <div
          className="main-header__buttons "
          // onPointerUp={() => toggleMode({ type: "toggle" })}
        >
          <ProfileMenu />
          <CloseButton />
        </div>
      </header>
    </OverlayProvider>
  );
};
