import { Link, ToPathOption } from "@tanstack/react-router";
import { ReactNode } from "react";
import { uncheckCheckbox } from "src/utils";

interface INavLink {
  to: ToPathOption;
  linkProps?: any;
  liProps?: any;
  children: ReactNode;
  onClick?: any;
  closeMenu?: any;
}

export const NavLink = ({
  to,
  children,
  onClick,
  linkProps,
  closeMenu,
}: INavLink) => {
  return (
    <li role="menuitem">
      <Link to={to} onClick={closeMenu} {...linkProps}>
        {children}
      </Link>
    </li>
  );
};
