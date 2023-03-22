interface ISkillCircle {
  color: string;
  title: string;
  className: string;
}

export const SkillCircle = ({ color, title, className }: ISkillCircle) => {
  return (
    <li title={title} className={`${className} skill-circle`}>
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8" fill={color} />
      </svg>
    </li>
  );
};
