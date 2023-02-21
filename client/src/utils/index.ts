import { RefObject } from "react";

// For computers, not mobile. Remember to test.
export const uncheckCheckbox = (ref: RefObject<any>) => {
  ref.current.checked = false;
};
