import { useRef } from "react";
import { LoginButton } from "../../Components/LoginButton";
import { Menu } from "../../Features/Menu";
import { SearchBar } from "../../Features/SearchBar";
import { FeedFilter } from "../../Features/SearchBar/FeedFilter";
import { Logo } from "../Logo";
import "./Header.scss";

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
      <LoginButton username="blah" className="test" />
    </header>
  );
};
