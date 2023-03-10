import "./Menu.style.scss";
import { useAuth } from "src/auth/AuthProvider";
import { Logo } from "src/components/Logo/Logo";
import { NavLink } from "src/components/NavLink/NavLink";
import { IMenu } from "./types";

export const Menu = ({ activeOverlay, toggleOverlay }: IMenu) => {
  const { authState } = useAuth();

  console.log(activeOverlay);

  return (
    <nav className="main-header__menu" aria-haspopup="menu">
      <button
        className="main-header__menu__hamburger"
        aria-hidden
        onPointerUp={() => toggleOverlay({ overlay: "menu", action: "toggle" })}
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

        {authState.type !== "user" ? (
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
