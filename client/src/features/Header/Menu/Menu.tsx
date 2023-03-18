import "./Menu.style.scss";
import { Logo } from "src/components/Logo/Logo";
import { NavLink } from "src/components/NavLink/NavLink";
import { useRouterContext } from "@tanstack/react-router";
import { useEffect } from "react";
import { IMenu, INavItem, AuthState } from "./Menu.types";
import { useAuth } from "src/auth/Auth.Provider";

const navData: INavItem[] = [{ 
  title: "Forsiden", 
  to: "/",
}, {
  title: "Nytt prosjekt",
  to: "/$username/nytt-prosjekt",
  authState: AuthState.loggedIn,
}, {
  title: "Min side",
  to: "/$username",
  authState: AuthState.loggedIn,
}, {
  title: "Hjelp",
  to: "/hjelp",
}, {
  title: "Ny bruker",
  to: "/ny-bruker",
  authState: AuthState.loggedOut,
}, {
  title: "Logg inn",
  to: "/logg-inn",
  authState: AuthState.loggedOut,
}, {
  title: "Logg ut",
  to: "/logg-ut",
  authState: AuthState.loggedIn,
}];

export const Menu = ({ activeOverlay, toggleOverlay }: IMenu) => {
  const { authState } = useAuth();
  const { state } = useRouterContext();
  const { username } = authState;

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
        {/*
          Dette virker litt snedig og bare stappe inn div'er. 

        */}
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
          if((navItem.authState === AuthState.loggedIn && !username)) return null;
          if((navItem.authState === AuthState.loggedOut && username)) return null;
          return (
              <NavLink
                key={navItem.to}
                to={navItem.to}
                linkProps={navItem.authState == AuthState.loggedIn ? { params: { username }} : {}}
              >
                {navItem.title}
              </NavLink>
            );
          }
        ) 
        }
{/* 
        <NavLink to="/">Forsiden</NavLink>

        <NavLink
          to={username ? "/$username/nytt-prosjekt" : "logg-inn"}
          linkProps={{ params: { username } }}
        >
          Nytt prosjekt
        </NavLink>

        <NavLink
          to={username ? "/$username" : "logg-inn"}
          linkProps={{ params: { username } }}
        >
          Min side
        </NavLink>

        <NavLink to="/">Hjelp</NavLink>

        {!username || username === "anon" ? (
          <>
            <NavLink to="/ny-bruker">Ny bruker</NavLink>
            <NavLink to="/logg-inn">Logg inn</NavLink>
          </>
        ) : (
          <NavLink to="/logg-ut">Logg ut</NavLink>
        )} */}
      </ul>
    </nav>
  );
};
