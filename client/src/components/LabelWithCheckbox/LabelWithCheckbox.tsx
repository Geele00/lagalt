import "./style.scss";
import { ILabelWithCheckbox } from "./types";

export const LabelWithCheckbox = (props: ILabelWithCheckbox) => {
  return (
    <label
      className={`${props.className} label-with-checkbox `}
      {...props.labelProps}
    >
      <div>{props.label}</div>
      <input type="checkbox" name={props.label} />
    </label>
  );
};
