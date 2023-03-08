import { Link } from "@tanstack/react-router";
import "./style.scss";

export const Logo = () => {
  return (
    <Link className="main-logo" to="/">
      <span>LAG</span>
      <span>ALT</span>
    </Link>
  );
};
