import {
  INewProject,
  IProject,
  IProjectsPage,
} from "src/types/entities/Project";
import { defaultOptions } from "src/api/v1/defaults";

const projectsUri = import.meta.env.VITE_API_V1_URL + "/projects";

export const fetchProjects = async (
  fetchOptions?: RequestInit,
  params: string = "?size=15&sort=creationDateTime&page=0"
): Promise<IProjectsPage> => {
  const res = await fetch(`${projectsUri}${params}`, {
    ...defaultOptions,
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const createProject = (project: INewProject) =>
  fetchProjects({
    method: "POST",
    body: JSON.stringify(project),
  });
