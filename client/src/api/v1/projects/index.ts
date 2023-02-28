import { Project } from "src/types/entities/Project";

const projectsUri = import.meta.env.VITE_API_V1_URL + "/projects";

const defaultOptions: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
};

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
