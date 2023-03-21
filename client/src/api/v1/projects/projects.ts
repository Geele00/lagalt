import { INewProject, IProjectsPage } from "src/types/models/Project";

const projectsUri = import.meta.env.VITE_API_V1_URL + "/projects";

export const fetchProjects = async (
  fetchOptions?: RequestInit,
  params: string = ""
): Promise<IProjectsPage> => {
  const res = await fetch(`${projectsUri}${params}`, {
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const updateProject = async (updates: any, token: string) => {
  const res = await fetch(`${projectsUri}/109`, {
    method: "PUT",
    body: JSON.stringify(updates),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
};

export const createProject = async (newProject: INewProject, token: string) => {
  const res = await fetch(`${projectsUri}`, {
    method: "POST",
    body: JSON.stringify(newProject),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};
