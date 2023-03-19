import "./Menu.style.scss";
import { Logo } from "src/components/Logo/Logo";
import { NavLink } from "src/components/NavLink/NavLink";
import { useRouterContext } from "@tanstack/react-router";
import { useEffect } from "react";
import { IMenu, INavItem, AuthState } from "./Menu.types";
import { useAuth } from "src/auth/Auth.Provider";

const navData: INavItem[] = [
  {
    title: "Forsiden",
    to: "/",
  },
  {
    title: "Nytt prosjekt",
    to: "/$username/nytt-prosjekt",
    condition: AuthState.loggedIn,
  },
  {
    title: "Min side",
    to: "/$username",
    condition: AuthState.loggedIn,
    params: {
      username: true,
    },
  },
  {
    title: "Hjelp",
    to: "/hjelp",
  },
  {
    title: "Ny bruker",
    to: "/ny-bruker",
    condition: AuthState.loggedOut,
  },
  {
    title: "Logg inn",
    to: "/logg-inn",
    condition: AuthState.loggedOut,
  },
  {
    title: "Logg ut",
    to: "/logg-ut",
    condition: AuthState.loggedIn,
  },
];

export const Menu = ({ activeOverlay, toggleOverlay }: IMenu) => {
  const { authState } = useAuth();
  const { state } = useRouterContext();
  const { username, signedIn } = authState;

  useEffect(() => {
    if (state.status === "pending") {
      toggleOverlay({ type: "close", overlay: null });
    }
  }, [state]);

  return (
    <nav className="main-header__menu" aria-haspopup="menu">
      <button
        className="main-header__menu__hamburger"
        aria-hidden
        onPointerUp={() => toggleOverlay({ overlay: "menu", type: "toggle" })}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <Logo />

      <ul
        className="main-header__menu__dropdown"
        role="menubar"
        aria-expanded={activeOverlay === "menu"}
      >
        {navData.map((navItem) => {
          const { condition, to, params, title } = navItem;

          const requiresSignedIn = condition === AuthState.loggedIn;
          const requiresSignedOut = condition === AuthState.loggedOut;

          if (requiresSignedIn && !signedIn) return null;
          if (requiresSignedOut && signedIn) return null;

          return (
            <NavLink
              key={to}
              to={to}
              linkProps={params?.username ? { params: { username } } : {}}
            >
              {title}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
