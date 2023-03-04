import "./style.scss";
import { useEffect, useMemo, useRef } from "react";
import { useAuth } from "src/auth";
import { ProjectPreview } from "src/components";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchFeed } from "src/api/v1/feed";
import { NyttProsjekt } from "src/routes/$username/nytt-prosjekt/NyttProsjekt";

export const Feed = () => {
  const { authState } = useAuth();

  const {
    isFetching,
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    isInitialLoading,
  } = useInfiniteQuery({
    queryKey: ["/feed", "/projects", authState],
    queryFn: ({ pageParam = 0 }) => {
      const { token } = authState;

      const params = `?size=22&sort=projectId&page=${pageParam}`;
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      return token ? fetchFeed(headers, params) : null;
    },
    getNextPageParam: (lastPage, pages) => pages.length,
  });

  const feedItems = useMemo(
    () =>
      data?.pages.map((page) =>
        page?.content.map((project) => (
          <ProjectPreview
            className="feed__project-preview"
            title={project.title}
            description={project.description}
            key={project.id + project.title}
          />
        ))
      ),
    [data]
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const onScroll = (e: Event) => {
    const lastItem = containerRef?.current?.lastChild as HTMLButtonElement;

    if (!lastItem) return;

    const { top } = lastItem.getClientRects()[0];

    const hasPassedBoundary = top < window.innerHeight * 2;

    if (hasPassedBoundary && !isFetching) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return isInitialLoading ? (
    <div>Loading gif</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="feed" role="feed" ref={containerRef}>
      <NyttProsjekt />
      {feedItems}
    </div>
  );
};
