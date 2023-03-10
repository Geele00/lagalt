import "./NyttProsjekt.scss";
import { useMutation } from "@tanstack/react-query";
import { fetchProjects } from "src/api/v1/projects/projects";
import { useAuth } from "src/auth/AuthProvider";
import { queryClient } from "src/index";
import { INewProject } from "src/types/entities/Project";

const NyttProsjekt = () => {
  const { authState } = useAuth();

  const newProjectMutation = useMutation({
    mutationFn: (newProject: INewProject) => {
      const { token } = authState;

      if (!token) throw new Error("No token error blabla");

      return fetchProjects({
        method: "POST",
        body: JSON.stringify(newProject),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          // filterOpts
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["/feed"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <form className="new-project">
      <fieldset className="new-project__create" spellCheck={false}>
        <legend>Lag et nytt prosjekt</legend>

        <hr />

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

        <hr />

        <div className="new-project__create__add-users">
          <label>Legg til brukere</label>
          <input />
        </div>

        <hr />

        <div className="new-project__create__skills">
          <label>Ønskede kvalifikasjoner</label>
          <input />
        </div>

        <hr />

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
