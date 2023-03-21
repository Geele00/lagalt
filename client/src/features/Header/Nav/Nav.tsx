import "./Nav.style.scss";
import { Logo } from "src/components/Logo/Logo";
import { NavLink } from "src/components/NavLink/NavLink";
import { AuthState } from "./Nav.types";
import { useAuth } from "src/auth/Auth.Provider";
import { useOverlay } from "src/features/Overlay/Overlay.Provider";

import { navItems } from "./Nav.items";

export const Nav = () => {
  const { activeOverlay, toggleOverlay } = useOverlay();

  const { authState } = useAuth();
  const { username, signedIn } = authState;

  return (
    <nav className="main-header__nav" aria-haspopup="menu" aria-label="Main">
      <button
        className="main-header__nav__hamburger"
        aria-hidden
        onPointerUp={() => toggleOverlay({ overlay: "nav", type: "toggle" })}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <Logo />

      <ul
        className="main-header__nav__dropdown"
        role="menubar"
        aria-expanded={activeOverlay === "nav"}
      >
        {navItems.map((navItem) => {
          const { condition, to, params, title } = navItem;

          const requiresSignedIn = condition === AuthState.loggedIn;
          const requiresSignedOut = condition === AuthState.loggedOut;

          if (requiresSignedIn && !signedIn) return null;
          if (requiresSignedOut && signedIn) return null;

          return (
            <NavLink
              className="main-header__nav__dropdown-item"
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
