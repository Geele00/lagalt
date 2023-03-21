import "./ProfileMenu.style.scss";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "src/auth/Auth.Provider";
import { NavLink } from "src/components/NavLink/NavLink";
import { useOverlay } from "src/features/Overlay/Overlay.Provider";
import { useTheme } from "src/features/Theme/Theme.Provider";

export const ProfileMenu = () => {
  const { authState } = useAuth();
  const { activeOverlay, toggleOverlay } = useOverlay();
  const { toggleTheme, mode } = useTheme();
  const nav = useNavigate();

  const username = authState.username;

  const dropDownOrSignIn = () => {
    authState.signedIn
      ? toggleOverlay({ overlay: "profile-menu", type: "toggle" })
      : nav({ to: "/logg-inn" });
  };

  return (
    <nav className="profile-menu" aria-haspopup="menu" aria-label="Profile">
      <button
        data-visible={activeOverlay === null}
        className="profile-menu-button"
        onPointerUp={dropDownOrSignIn}
      >
        <div
          className={"profile-menu-button__logo"}
          data-signed-in={authState.signedIn}
        >
          <div className={"profile-menu-button__logo_top"}></div>
          <div className={"profile-menu-button__logo_bottom"}></div>
        </div>
      </button>

      <ul
        className="profile-menu__nav"
        aria-expanded={activeOverlay === "profile-menu"}
      >
        <NavLink
          to="/$username"
          className="profile-menu__nav-item"
          linkProps={{ params: { username } }}
        >
          <img src="/images/envelope.svg" />
          <span>Profil</span>
        </NavLink>

        <li className="profile-menu__nav-item theme-toggle">
          <img src="/images/moon-half.svg" />
          <label>
            <span>Dark mode</span>
            <input
              type="checkbox"
              onInput={() => toggleTheme({ type: "toggle" })}
              defaultChecked={mode === "dark-mode"}
            />
          </label>
        </li>

        <NavLink
          to="/$username/instillinger"
          className="profile-menu__nav-item"
          linkProps={{ params: { username } }}
        >
          <img src="/images/wrench.svg" />
          <span>Innstillinger</span>
        </NavLink>

        <NavLink to="/logg-ut" className="profile-menu__nav-item">
          <img src="/images/logout.svg" />
          <span>Logg ut</span>
        </NavLink>
      </ul>
    </nav>
  );
};
