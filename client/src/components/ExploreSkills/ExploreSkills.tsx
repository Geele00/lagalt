import "./ExploreSkills.style.scss";

const skills = [
  {
    name: "Koding",
    value: "coding",
  },
  {
    name: "Fotografi",
    value: "photography",
  },
  {
    name: "Tegning",
    value: "drawing",
  },
  {
    name: "Keramikk",
    value: "ceramics",
  },
  {
    name: "Arkitektur",
    value: "architecture",
  },
  {
    name: "Billedkunst",
    value: "visual-art",
  },
  {
    name: "Animasjon",
    value: "animation",
  },
];

export const ExploreSkills = ({ activeOverlay }: any) => {
  return (
    <div className="explore-skills" aria-expanded={activeOverlay === "search"}>
      <ul>
        {skills.map((skill) => (
          <li key={skill.value}>
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
