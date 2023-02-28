import { Project } from "src/types/entities/Project";
import { defaultOptions } from "src/api/v1/defaults";

const projectsUri = import.meta.env.VITE_API_V1_URL + "/projects";

export const fetchProjects = async (
  fetchOptions?: RequestInit
): Promise<Project[]> => {
  const res = await fetch(projectsUri, {
    ...defaultOptions,
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const createProject = (project: Project) =>
  fetchProjects({
    method: "POST",
    body: JSON.stringify(project),
  });
