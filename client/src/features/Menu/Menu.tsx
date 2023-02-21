import { FormEvent, forwardRef, useImperativeHandle, useRef } from "react";
import { LinkListItem } from "src/components";
import "./style.scss";

const dropDownLinkSharedProps = { liOpts: { role: "menuitem" } };

export const Menu = forwardRef(({}, forwardedRef) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const onInput = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
  };

  // ~ Close input after clicked. Check if possible with tanstack
  // (checkboxRef.current as HTMLInputElement).checked = false;
  // console.log(target.checked);

  useImperativeHandle(
    forwardedRef,
    () => {
      return {
        unCheck() {
          if (checkboxRef.current) checkboxRef.current.checked = false;
        },
      };
    },
    []
  );

  const username = "weskeiser";

  return (
    <nav className="menu" aria-haspopup="menu">
      <input
        type="checkbox"
        id="burger-checkbox"
        onInput={onInput}
        ref={checkboxRef}
        name="testName"
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
