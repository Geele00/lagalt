import { IProject } from "src/types/models/Project";

export interface IProjectPreview {
  project: IProject;
  className?: string;
  isPlaceholderData?: boolean | null;
  short?: boolean;
}
