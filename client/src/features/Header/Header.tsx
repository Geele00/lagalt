import "./style.scss";
import { PopFilter } from "src/features/FeedFilter/PopFilter";
import { SkillsFilter } from "src/features/FeedFilter/SkillsFilter";
import { ProfileButton } from "src/features/ProfileButton/ProfileButton";
import { SearchBar } from "src/features/SearchBar/SearchBar";
import { Menu } from "src/features/Menu/Menu";
import { Logo } from "src/components/Logo/Logo";

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
