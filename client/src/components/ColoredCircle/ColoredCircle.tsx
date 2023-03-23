interface IColoredCircle {
  color: string;
}

export const ColoredCircle = ({ color }: IColoredCircle) => {
  return (
    <svg viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="8" fill={color} />
    </svg>
  );
};
