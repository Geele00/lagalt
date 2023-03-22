import { useMemo } from "react";
import { IPage } from "src/types/models/Page";
import { IProject } from "src/types/models/Project";
import { ProjectPreview } from "../../components/ProjectPreview/ProjectPreview";

type IProjectsPage = IPage<IProject>;

interface Props {
  data?: {
    pages: IProjectsPage[];
  };
  isPlaceholderData: boolean;
}

function useFeedItems({ data, isPlaceholderData }: Props) {
  const feedItems = useMemo(
    () =>
      data?.pages.map((page) =>
        page?.content.map((project) => (
          <li className="feed__project-preview" key={project.projectId}>
            {!isPlaceholderData && (
              <ProjectPreview
                title={project.title}
                description={project.description}
              />
            )}
          </li>
        ))
      ),
    [data, isPlaceholderData]
  );

  return feedItems;
}

export default useFeedItems;
