import { useRef } from "react";
import { ProfileButton, Logo } from "src/Components";
import { Menu, SearchBar, FeedFilter } from "src/Features";

export const Header = () => {
  const menuToggleRef = useRef<HTMLInputElement>(null);

  // For computers, not mobile
  const onMouseLeave = () => {
    (menuToggleRef.current as HTMLInputElement).checked = false;
  };

  return (
    <header className="main-header">
      <div className="main-header__left" onMouseLeave={onMouseLeave}>
        <Menu menuToggleRef={menuToggleRef} />
        <Logo />
      </div>

      <FeedFilter filterName="Pop" />
      <FeedFilter filterName="Industry" />

      <SearchBar />
      <ProfileButton username="blah" className="test" />
    </header>
  );
};
