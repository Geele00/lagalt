import { FormEvent, forwardRef, useImperativeHandle, useRef } from "react";
import { LinkListItem } from "./LinkListItem";

export const Menu = forwardRef(({}, forwardedCheckboxRef) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const onInput = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;

    console.log(target.checked);
  };

  useImperativeHandle(
    forwardedCheckboxRef,
    () => {
      return {
        setCheck(bool: boolean) {
          (checkboxRef.current as HTMLInputElement).checked = bool;
        },
      };
    },
    []
  );

  const username = "weskeiser";

  const dropDownLinkSharedProps = { liOpts: { role: "menuitem" } };

  return (
    <nav className="menu" aria-haspopup="menu">
      <input
        type="checkbox"
        id="burger-checkbox"
        onInput={onInput}
        ref={checkboxRef}
      />

      <i className="menu__hamburger-icon" aria-hidden>
        <div></div>
        <div></div>
        <div></div>
      </i>

      <ul className="menu__dropdown" role="menubar">
        <LinkListItem to="/" {...dropDownLinkSharedProps}>
          Til forsiden
        </LinkListItem>

        <LinkListItem to="logg-inn" {...dropDownLinkSharedProps}>
          Logg inn
        </LinkListItem>

        <LinkListItem to="/" {...dropDownLinkSharedProps}>
          Hjelp
        </LinkListItem>

        <LinkListItem
          to="$username"
          {...dropDownLinkSharedProps}
          linkOpts={{ params: { username } }}
        >
          Min side
        </LinkListItem>
      </ul>
    </nav>
  );
});
