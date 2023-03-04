import "./style.scss";
import { Logo } from "src/components";
import { PopFilter } from "./PopFilter";
import { SkillsFilter } from "./SkillsFilter";
import { Menu, SearchBar, ProfileButton } from "src/features";

export const Header = () => {
  return (
    <header className="main-header">
      <ProfileButton />

      <SearchBar className="main-header__search-bar" />

      {window.location.pathname === "/" && (
        <section className="main-header__filters">
          <PopFilter />
          <SkillsFilter />
        </section>
      )}

      <section className="main-header__burger-and-logo">
        <Menu />
        <Logo />
      </section>
    </header>
  );
};
