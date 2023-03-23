import "./Header.style.scss";
import { Filter } from "src/features/Filter/Filter";
import { ProfileMenu } from "./ProfileMenu/ProfileMenu";
import { CloseButton } from "./CloseButton/CloseButton";
import { Nav } from "./Nav/Nav";
import { Search } from "../Search/Search";
import { useRouter } from "@tanstack/react-router";

export const Header = () => {
  const { state } = useRouter();

  return (
    <header className={`main-header`}>
      <Nav />
      {state.currentLocation.pathname === "/" && (
        <>
          <Filter />
          <Search className="main-header__search-bar" />
        </>
      )}

      <div
        className="main-header__buttons "
        // onPointerUp={() => toggleMode({ type: "toggle" })}
      >
        <ProfileMenu />
        <CloseButton />
      </div>
    </header>
  );
};
