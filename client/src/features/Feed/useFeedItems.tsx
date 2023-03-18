
import { useMemo } from 'react';
import { ProjectPreview } from "../../components/ProjectPreview/ProjectPreview";

interface Page {
  content: {
    projectId: number;
    title: string;
    description: string;
  }[];
}

interface Props {
  data?: {
    pages: Page[];
  };
  isPlaceholderData: boolean;
}

function useFeedItems({ data, isPlaceholderData }: Props) {
  const feedItems = useMemo(() =>
    data?.pages.map((page) =>
      page?.content.map((project) => (
        <li
          className="project-preview"
          key={project.projectId}
        >
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
