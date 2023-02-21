import { Link, ToPathOption } from "@tanstack/react-router";
import { ReactNode } from "react";

interface LinkListItem {
  to: ToPathOption;
  linkOpts?: any;
  liOpts?: any;
  children: ReactNode;
}

export const LinkListItem = ({
  to,
  liOpts,
  linkOpts,
  children,
}: LinkListItem) => {
  return (
    <li {...liOpts}>
      <Link to={to} {...linkOpts}>
        {children}
      </Link>
    </li>
  );
};
