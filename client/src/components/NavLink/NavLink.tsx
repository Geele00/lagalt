import "./NavLink.scss";
import { Link, ToPathOption } from "src/utils/tanstack";
import { ReactNode } from "react";

interface INavLink {
  to: ToPathOption;
  children: ReactNode;
  linkProps?: any;
}

export const NavLink = ({ to, children, linkProps }: INavLink) => {
  const onClick = (e: any) => {
    e.target.blur();
  };
  return (
    <li className="nav-link" role="menuitem">
      <Link to={to} {...linkProps} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};
