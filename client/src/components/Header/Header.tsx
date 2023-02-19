import { useRef } from "react";
import { ProfileButton, Logo } from "src/components";
import { Menu, SearchBar, FeedFilter } from "src/features";

export const Header = () => {
  const menuToggleRef = useRef<HTMLInputElement>(null);

  // For computers, not mobile
  const onMouseLeave = () => {
    (menuToggleRef.current as HTMLInputElement).checked = false;
  };

  return (
    <header className="main-header">
      <section className="main-header__left" onMouseLeave={onMouseLeave}>
        <Menu menuToggleRef={menuToggleRef} />
        <Logo />
      </section>

      <FeedFilter filterName="Pop" />
      <FeedFilter filterName="Industry" />

      <SearchBar />
      <ProfileButton username="blah" className="test" />
    </header>
  );
};
