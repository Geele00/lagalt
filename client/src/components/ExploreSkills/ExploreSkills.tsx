import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "src/auth/Auth.Provider";
import { SkillSearchRes } from "src/types/models/Skill";
import "./ExploreSkills.style.scss";

export const ExploreSkills = () => {
  const { authState } = useAuth();
  const nav = useNavigate();

  const onPointerUp = (e: any) => {
    const skillName = e.target.dataset.name;

    nav({ to: "/felt/$skill", params: { skill: skillName } });
  };

  const filters = {
    addedBy: "Developer",
  };

  const queryKey = ["/skills", "default", { filters, token: authState.token }];

  const { data } = useQuery<SkillSearchRes[]>({
    queryKey,
    enabled: !!authState.token,
  });

  console.log(data);

  return (
    <>
      <h2 className="search__results__suggestions-title">Utforsk</h2>
      <ul className="search__results__suggestions">
        {data &&
          data.map((skill) => (
            <li key={skill.skillId + "explore"} onPointerUp={onPointerUp}>
              <button data-name={skill.name.toLowerCase()}>
                <p>{skill.name}</p>
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};
