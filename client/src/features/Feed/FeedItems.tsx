import { memo } from "react";
import { ProjectPreview } from "src/components/ProjectPreview/ProjectPreview";
import { IProjectPageData } from "../Search/Search.types";

interface Props extends IProjectPageData {
  isPlaceholderData: boolean;
}

const FeedItems = memo(({ data, isPlaceholderData }: Props) => {
  return (
    <>
      {data?.pages.map((page) =>
        page.content.map((project) => (
          <li className="feed__project-preview-item" key={project.projectId}>
            {!isPlaceholderData && <ProjectPreview project={project} />}
          </li>
        ))
      )}
    </>
  );
});

export default FeedItems;
