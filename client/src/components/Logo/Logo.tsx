import { Link } from "@tanstack/react-router";
import "./Logo.style.scss";
import LogoImage from "./LogoImage.png"

export const Logo = () => {
  return (
    <Link className="main-logo" to="/">
      <img src={LogoImage} alt="Logo" />
    </Link>
  );
};
