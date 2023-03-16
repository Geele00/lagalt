import "./NyttProsjekt.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "src/api/v1/projects/projects";
import { useAuth } from "src/auth/Auth.Provider";
import { INewProject } from "src/types/entities/Project";
import { HrDivider } from "src/components/HrDivider/HrDivider";

const NyttProsjekt = () => {
  const { authState } = useAuth();
  const queryClient = useQueryClient();

  const newProjectMutation = useMutation({
    mutationFn: (newProject: INewProject) => {
      const { token } = authState;
      if (!token) throw new Error("Authentication failed");
      return createProject(newProject, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["/projects"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <form className="new-project">
      <fieldset className="new-project__create" spellCheck={false}>
        <legend>Lag et nytt prosjekt</legend>

        <HrDivider />

        <div className="new-project__create__name">
          <label>Prosjektnavn</label>
          <input />
        </div>

        <div className="new-project__create__industry">
          <label>Industri</label>
          <select>
            <option>Velg</option>
            <option>Design</option>
            <option>Programmering</option>
          </select>
        </div>

        <div className="new-project__create__description">
          <label>Beskrivelse</label>
          <textarea />
        </div>

        <HrDivider />

        <div className="new-project__create__add-users">
          <label>Legg til brukere</label>
          <input />
        </div>

        <HrDivider />

        <div className="new-project__create__skills">
          <label>Ønskede kvalifikasjoner</label>
          <input />
        </div>

        <HrDivider />

        <div className="new-project__create__location">
          <label>Fysisk tilstedeværelse kreves</label>

          <select>
            <option>Nei</option>
            <option>Oslo</option>
            <option>Bergen</option>
          </select>
        </div>
      </fieldset>
    </form>
  );
};

export default NyttProsjekt;
