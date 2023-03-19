import { Link } from "@tanstack/react-router";
import "./Logo.style.scss";

export const Logo = () => {
  return (
    <Link className="main-logo" to="/">
      <span>LAG</span>
      <span>ALT</span>
    </Link>
  );
};
