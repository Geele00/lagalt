import { Link, ToPathOption } from "@tanstack/react-router";
import { ReactNode } from "react";

interface INavLink {
  to: ToPathOption;
  children: ReactNode;
  linkProps?: any;
  closeMenu?: () => void;
}

export const NavLink = ({ to, children, linkProps, closeMenu }: INavLink) => {
  return (
    <li role="menuitem">
      <Link to={to} onClick={closeMenu} {...linkProps}>
        {children}
      </Link>
    </li>
  );
};
