import { IPage } from "./Page";

export interface IProject {
  projectId: number;
  title: string;
  description: string;
}

export interface INewProject {
  // can remove ownerId when we can retrieve owner from uid in db
  ownerId: number;
  title: string;
  description: string;
}

export type IProjectsPage = IPage<IProject>;
