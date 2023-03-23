import "./useSearchResults.style.scss";
import { useMemo } from "react";
import { HrDivider } from "src/components/HrDivider/HrDivider";
import { ProjectPreview } from "src/components/ProjectPreview/ProjectPreview";
import { IProjectPageData } from "../Search.types";

export const useSearchResults = (data: IProjectPageData["data"]) => {
  const results = useMemo(
    () => (
      <ol className="search-results" id="search-dropdown">
        {data?.pages.map((page) =>
          page?.content.map((searchResult) => (
            <li
              key={"searchRes" + searchResult.projectId}
              className="search_dropdown__results"
            >
              <ProjectPreview project={searchResult} short />
              <HrDivider />
            </li>
          ))
        )}
      </ol>
    ),
    [data]
  );

  return results;
};
