import "./NavLink.scss";
import { ReactNode } from "react";
import { Link, ToPathOption } from "@tanstack/react-router";

interface INavLink {
  to: ToPathOption;
  children: ReactNode;
  linkProps?: any;
  className: string;
}

export const NavLink = ({ to, children, linkProps, className }: INavLink) => {
  return (
    <li className={`${className} nav-link`} role="menuitem">
      <Link to={to} {...linkProps}>
        {children}
      </Link>
    </li>
  );
};
