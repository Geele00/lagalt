interface ISkillCircle {
  color: string;
  title: string;
}

export const SkillCircle = ({ color, title }: ISkillCircle) => {
  return (
    <li title={title}>
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8" fill={color} />
      </svg>
    </li>
  );
};