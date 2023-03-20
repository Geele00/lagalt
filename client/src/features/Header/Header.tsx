import "./Header.style.scss";
import { Filter } from "src/features/Filter/Filter";
import { ProfileButton } from "./ProfileButton/ProfileButton";
import { Menu } from "./Menu/Menu";
import { CloseButton } from "./CloseButton/CloseButton";
import { SearchBar } from "src/features/Search/Search";
import { OverlayProvider } from "src/features/Overlay/Overlay.Provider";
import { useTheme } from "src/features/Theme/Theme.Provider";

export const Header = () => {
  const { mode } = useTheme();

  return (
    <OverlayProvider>
      <header className={`main-header ${mode}`}>
        <Menu />
        <Filter />
        <SearchBar className="main-header__search-bar" />

        <div
          className="main-header__buttons "
          // onPointerUp={() => toggleMode({ type: "toggle" })}
        >
          <ProfileButton />
          <CloseButton />
        </div>
      </header>
    </OverlayProvider>
  );
};
