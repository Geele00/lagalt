import "./style.scss";
import { useEffect, useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAuth } from "src/auth/AuthProvider";
import { fetchFeed } from "src/api/v1/feed/feed";
import { ProjectPreview } from "src/components/ProjectPreview/ProjectPreview";
import NyttProsjekt from "src/routes/$username/nytt-prosjekt/NyttProsjekt";

const Feed = () => {
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

      const params = `?size=22&sort=createdAt&page=${pageParam}`;
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
            key={project.projectId + project.title}
          />
        ))
      ),
    [data]
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const reachedFinalPage = useMemo(() => {
    console.log(data);
    return !!data?.pages.at(-1)?.last;
  }, [data]);

  const onScroll = (e: Event) => {
    if (isFetching) return;
    if (reachedFinalPage) return;

    const { lastChild } = containerRef?.current as HTMLDivElement;
    if (!lastChild) return;

    const { top } = (lastChild as HTMLLIElement).getClientRects()[0];

    const hasPassedBoundary = top < window.innerHeight * 2;

    if (!hasPassedBoundary) return;

    fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <NyttProsjekt />
      {isInitialLoading ? (
        <div>Loading gif</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className="feed" role="feed" ref={containerRef}>
          {feedItems}
        </div>
      )}
    </>
  );
};

export default Feed;
