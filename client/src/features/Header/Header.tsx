import { RefObject, useRef } from "react";
import { Logo } from "src/components";
import { Menu, SearchBar, FeedFilter } from "src/features";
import "./style.scss";

// For computers, not mobile. Remember to test.
const uncheckCheckbox = (ref: RefObject<any>) => ref.current.unCheck();

export const Header = () => {
  const menuToggleRef = useRef<HTMLInputElement>(null);

  return (
    <header className="main-header">
      <section
        className="main-header__left"
        onMouseLeave={() => uncheckCheckbox(menuToggleRef)}
      >
        <Menu ref={menuToggleRef} />
        <Logo />
      </section>

      <FeedFilter filterName="Pop" />
      <FeedFilter filterName="Type" />

      <SearchBar />
      <button className="profile-button">
        <div className="profile-button__logo">
          <div className="profile-button__logo_top"></div>
          <div className="profile-button__logo_bottom"></div>
        </div>
      </button>
    </header>
  );
};
