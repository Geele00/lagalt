import "./style.scss";
import { useAuth } from "src/auth/AuthProvider";
import { Logo } from "src/components/Logo/Logo";
import { NavLink } from "src/components/NavLink/NavLink";
import { IMenu } from "./types";

export const Menu = ({ activeOverlay, overlayDispatch }: IMenu) => {
  const { authState } = useAuth();

  // Fix button
  return (
    <nav
      className="menu"
      aria-haspopup="menu"
      aria-selected={activeOverlay === "menu"}
    >
      <button
        className="menu__hamburger-icon"
        onClick={() => overlayDispatch("menu")}
        aria-hidden
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <Logo />

      <ul className="menu__dropdown" role="menubar">
        <NavLink to="/">Forsiden</NavLink>

        <NavLink
          to="/$username/nytt-prosjekt"
          linkProps={{ params: { username: authState.username } }}
        >
          Nytt prosjekt
        </NavLink>

        <NavLink
          to="/$username"
          linkProps={{ params: { username: authState.username } }}
        >
          Min side
        </NavLink>

        {!authState.token ? (
          <>
            <NavLink to="/logg-inn">Logg inn</NavLink>
            <NavLink to="/ny-bruker">Ny bruker</NavLink>
          </>
        ) : (
          <NavLink to="/logg-ut">Logg ut</NavLink>
        )}

        <NavLink to="/">Hjelp</NavLink>
      </ul>
    </nav>
  );
};
