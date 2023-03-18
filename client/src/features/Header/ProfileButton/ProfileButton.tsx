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

  const signedInUsername = authState.username;

  const isSignedIn =
    !!signedInUsername && signedInUsername !== "anon" && "signed-in";

  const paramsUsername =
    !!signedInUsername && signedInUsername !== "anon"
      ? signedInUsername
      : "logg-inn";

  return (
    <div className="header__profile">
      <button
        data-visible={activeOverlay === null ? true : false}
        className="profile-button"
        onPointerUp={() =>
          nav({ to: "/$username", params: { username: paramsUsername } })
        }
      >
        <div className={`profile-button__logo ${isSignedIn}`}>
          <div className={`profile-button__logo_top ${isSignedIn}`}></div>
          <div className={`profile-button__logo_bottom ${isSignedIn}`}></div>
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
