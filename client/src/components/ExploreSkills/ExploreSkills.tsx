import { useQuery } from "@tanstack/react-query";
import { useAuth } from "src/auth/Auth.Provider";
import { SkillSearchRes } from "src/types/models/Skill";
import "./ExploreSkills.style.scss";

export const ExploreSkills = ({ activeOverlay }: any) => {
  const { authState } = useAuth();
  const onPointerUp = (e: any) => {
    console.log();
  };

  const filters = {
    addedBy: "Developer",
  };

  const queryKey = ["/skills", "default", { filters, token: authState.token }];

  const { data } = useQuery<SkillSearchRes[]>({
    queryKey,
    enabled: !!authState.token,
  });

  return (
    <ul className="test33">
      {data &&
        data.map((skill) => (
          <li key={skill.skillId + "explore"} onPointerUp={onPointerUp}>
            <button>
              <p>{skill.name}</p>
            </button>
          </li>
        ))}
    </ul>
  );
};
