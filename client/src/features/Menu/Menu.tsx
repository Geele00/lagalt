import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { useAuth } from "src/auth";
import { NavLink } from "src/components";
import { uncheckCheckbox } from "src/utils";
import "./style.scss";

export const Menu = forwardRef(({}, forwardedRef) => {
  const { authState } = useAuth();

  const username = "weskeiser";

  const checkboxRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    forwardedRef,
    () => {
      return { unCheck: () => uncheckCheckbox(checkboxRef) };
    },
    []
  );

  const closeMenu = useCallback(
    () => uncheckCheckbox(checkboxRef),
    [checkboxRef.current]
  );

  return (
    <nav className="menu" aria-haspopup="menu">
      <input
        type="checkbox"
        id="burger-checkbox"
        ref={checkboxRef}
        name="testName"
      />

      <i className="menu__hamburger-icon" aria-hidden>
        <div></div>
        <div></div>
        <div></div>
      </i>

      <ul className="menu__dropdown" role="menubar">
        <NavLink to="/" closeMenu={closeMenu}>
          Til forsiden
        </NavLink>

        {!authState.token && (
          <>
            <NavLink to="/logg-inn" closeMenu={closeMenu}>
              Logg inn
            </NavLink>
            <NavLink to="/ny-bruker" closeMenu={closeMenu}>
              Ny bruker
            </NavLink>
          </>
        )}

        <NavLink to="/" closeMenu={closeMenu}>
          Hjelp
        </NavLink>

        <NavLink
          to="/$username"
          closeMenu={closeMenu}
          linkProps={{ params: { username } }}
        >
          Min side
        </NavLink>
      </ul>
    </nav>
  );
});
