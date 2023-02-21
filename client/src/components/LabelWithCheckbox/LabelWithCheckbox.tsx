import "./style.scss";

interface ILabelWithCheckbox {
  className: string;
  label: string;
  labelProps?: any;
}

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
