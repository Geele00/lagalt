import { useMutation } from "@tanstack/react-query";
import { fetchProjects } from "src/api/v1/projects/projects";
import { useAuth } from "src/auth/AuthProvider";
import { queryClient } from "src/index";
import { INewProject } from "src/types/entities/Project";

const newProject = (title: string) => {
  return {
    ownerId: 1,
    title,
    description:
      "Dette er en middels lang prosjektbeskrivelse med tilfeldig innhold. En middels lang prosjektbeskrivelse med tilfeldig innhold er det dette.",
  };
};

export const NyttProsjekt = () => {
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

  const makeDummies = () => {
    for (let i = 0; i < 100; i++) {
      newProjectMutation.mutate(newProject("New project title " + i));
    }
  };

  return <button onClick={makeDummies}>Spawn projects</button>;
};
