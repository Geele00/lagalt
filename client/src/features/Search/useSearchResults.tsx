import { Fragment, useMemo } from "react";
import { HrDivider } from "src/components/HrDivider/HrDivider";
import { IPage } from "src/types/models/Page";
import { IProject } from "src/types/models/Project";
import { SearchResult } from "./SearchResult/SearchResult";

type ISearchResults = IPage<IProject>;

interface Props {
  data?: {
    pages: ISearchResults[];
  };
}

function useSearchResults({ data }: Props) {
  const searchResults = useMemo(
    () =>
      data?.pages.map((page) =>
        page?.content.map((searchResult) => (
          <Fragment key={"searchRes" + searchResult.projectId}>
            <SearchResult />
            <HrDivider />
          </Fragment>
        ))
      ),
    [data]
  );

  return searchResults;
}

export default useSearchResults;
