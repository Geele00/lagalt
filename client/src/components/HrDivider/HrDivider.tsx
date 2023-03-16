import "./HrDivider.style.scss";

interface HrProps {
  height?: string;
  color?: string;
  className?: string;
}

export const HrDivider = ({ height, color, className }: HrProps) => {
  return (
    <hr className={`{${className}} divider_main`} style={{ height, color }} />
  );
};
