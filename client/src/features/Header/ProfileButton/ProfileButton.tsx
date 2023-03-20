import { useAuth } from "src/auth/Auth.Provider";
import { NavLink } from "src/components/NavLink/NavLink";
import { useOverlay } from "src/features/Overlay/Overlay.Provider";
import { useTheme } from "src/features/Theme/Theme.Provider";
import "./ProfileButton.style.scss";

export const ProfileButton = () => {
  const { authState } = useAuth();
  const { activeOverlay, toggleOverlay } = useOverlay();
  const { toggleTheme, mode } = useTheme();

  const username = authState.username || "";

  return (
    <nav className="header__profile" aria-haspopup="menu" aria-label="Profile">
      <button
        data-visible={activeOverlay === null}
        className="header__profile-button"
        onPointerUp={() =>
          toggleOverlay({ overlay: "profile-menu", type: "toggle" })
        }
      >
        <div
          className={"header__profile-button__logo"}
          data-signed-in={authState.signedIn}
        >
          <div className={"header__profile-button__logo_top"}></div>
          <div className={"header__profile-button__logo_bottom"}></div>
        </div>
      </button>

      <ul
        className="header__profile__nav"
        aria-expanded={activeOverlay === "profile-menu"}
      >
        <NavLink to="/" className="header__profile__nav-item">
          Profil
        </NavLink>
        <NavLink to="/" className="header__profile__nav-item">
          Bla
        </NavLink>
        <li className="header__profile__nav-item toggle-opt">
          <input
            type="checkbox"
            onPointerUp={() => toggleTheme({ type: "toggle" })}
            value={mode}
          />
          <label>Dark mode</label>
        </li>
        <NavLink to="/" className="header__profile__nav-item">
          Innstillinger
        </NavLink>
        <NavLink to="/" className="header__profile__nav-item">
          Logg ut
        </NavLink>
      </ul>
    </nav>
  );
};
