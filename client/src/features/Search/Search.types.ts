import { IPage } from "src/types/models/Page";
import { IProject } from "src/types/models/Project";

export interface ISearchBar {
  className: string;
}

export interface IProjectPageData {
  data?: {
    pages: ProjectPage[];
  };
}

export type ProjectPage = IPage<IProject>;
