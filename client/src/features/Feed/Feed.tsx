import "./Feed.style.scss";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAuth } from "src/auth/Auth.Provider";
import { ProjectPreview } from "src/components/ProjectPreview/ProjectPreview";
import { IProjectsPage } from "src/types/entities/Project";
import LoadingScreen from "src/components/LoadingScreen/LoadingScreen";
import { ErrorComponent } from "@tanstack/react-router";

const pageSize = 20;

const apiUri = import.meta.env.VITE_API_V1_URL;

const Feed = () => {
  const { authState } = useAuth();

  const queryKey = [`/feed`, authState, "/projects"];

  // ~~~ Query logic

  const { isFetching, data, error, fetchNextPage, isInitialLoading } =
    useInfiniteQuery<IProjectsPage>({
      queryKey,
      enabled: !!authState.token,

      meta: {
        params: `?size=${pageSize}&sort=createdAt,desc`,
        token: authState.token,
      },

      onSuccess: async (data) => {
        const lastPage = data.pages.at(-1);

        if (!lastPage) return;

        const projectIds = lastPage?.content.map(
          (project) => project.projectId
        );

        console.log(projectIds);

        fetch(`${apiUri}/users/history`, {
          method: "POST",
          body: JSON.stringify(projectIds),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authState.token}`,
          },
        });
      },

      onError: (err) => {
        console.log(err);
      },
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
    return !!data?.pages.at(-1)?.last;
  }, [data]);

  // ~~~ Scrolling

  const onScroll = useCallback(() => {
    if (!!isFetching) return;
    if (!!reachedFinalPage) return;
    if (!containerRef.current?.lastChild) return;

    const lastChild = containerRef.current.lastChild as HTMLLIElement;
    const { top } = lastChild.getBoundingClientRect();

    const hasPassedBoundary = top < window.innerHeight * 2;
    if (!hasPassedBoundary) return;

    fetchNextPage();
  }, [isFetching, reachedFinalPage, containerRef, fetchNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const loadingScreen = useMemo(() => {
    if (!isInitialLoading) return null;
    return <LoadingScreen />;
  }, [isInitialLoading]);

  const errorScreen = useMemo(() => {
    if (!error) return null;
    return <ErrorComponent error={error} />;
  }, [isInitialLoading]);

  return (
    <>
      {loadingScreen ?? errorScreen ?? (
        <div className="feed" role="feed" ref={containerRef}>
          {feedItems}
        </div>
      )}
    </>
  );
};

export default Feed;
