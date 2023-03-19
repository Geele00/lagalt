import { useNavigate } from "@tanstack/react-router";
import { Dispatch } from "react";
import { useAuth } from "src/auth/Auth.Provider";
import { OverlayOptions } from "../Header.types";
import "./ProfileButton.style.scss";

interface IProps {
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}

export const ProfileButton = ({ activeOverlay, toggleOverlay }: IProps) => {
  const { signOut, authState } = useAuth();

  const nav = useNavigate();
  const username = authState.username || "";

  return (
    <div className="header__profile">
      <button
        data-visible={activeOverlay === null}
        className="profile-button"
        onPointerUp={() => nav({ to: "/$username", params: { username } })}
      >
        <div
          className={"profile-button__logo"}
          data-signed-in={authState.signedIn}
        >
          <div className={"profile-button__logo_top"}></div>
          <div className={"profile-button__logo_bottom"}></div>
        </div>
      </button>
    </div>
  );
};

// <ul>
//   <li>bla</li>
//   <li>bla</li>
//   <li>bla</li>
//   <li>bla</li>
//   <li>bla</li>
// </ul>
