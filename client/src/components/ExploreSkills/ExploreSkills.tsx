import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAuth } from "src/auth/Auth.Provider";
import { useOverlay } from "src/features/Overlay/Overlay.Provider";
import { SkillSearchRes } from "src/types/models/Skill";
import { NavLink } from "../NavLink/NavLink";
import "./ExploreSkills.style.scss";

const filters = {
  addedBy: "Developer",
};

export const ExploreSkills = () => {
  const { authState } = useAuth();
  const { activeOverlay } = useOverlay();

  const queryKey = useMemo(() => {
    return ["/skills", "default", { filters, token: authState.token }];
  }, [authState]);

  const { data } = useQuery<SkillSearchRes[]>({
    queryKey,
    enabled: !!authState.token && activeOverlay === "search",
  });

  return (
    <ul className="explore__skills">
      {data &&
        data.map((skill) => (
          <NavLink
            to="/felt/$skill"
            linkProps={{ params: { skill: skill.name } }}
            data-name={skill.name.toLowerCase()}
            key={skill.skillId + "explore"}
            className=""
          >
            <img src={skill.imageUrl} />
            <p>{skill.name}</p>
          </NavLink>
        ))}
    </ul>
  );
};
