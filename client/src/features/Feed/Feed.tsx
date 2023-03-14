import "./Feed.style.scss";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { useAuth } from "src/auth/Auth.Provider";
import { ProjectPreview } from "src/components/ProjectPreview/ProjectPreview";
import { INewProject } from "src/types/entities/Project";
import { createProject } from "src/api/v1/projects/projects";
import { queryClient } from "src/index";
import { IProjectsPage } from "src/types/entities/Project";

const pageSize = 20;

const apiUri = import.meta.env.VITE_API_V1_URL;

const Feed = () => {
  const { authState } = useAuth();

  const queryKey = [`/feed`, authState, "/projects"];

  // ~~~ Query logic

  const { isFetching, data, error, fetchNextPage, isInitialLoading } =
    useInfiniteQuery<IProjectsPage>({
      queryKey,

      meta: { params: `?size=${pageSize}&sort=createdAt,desc` },

      onSuccess: async (res) => {
        const lastPage = res.pages.at(-1);

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

  const newProjectMutation = useMutation({
    mutationFn: (newProject: INewProject) => {
      const { token } = authState;
      if (!token) throw new Error("No token error blabla");
      return createProject(newProject, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
    onError: (err) => {
      console.log(err);
    },
  });

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

  return (
    <>
      <div className="feed" role="feed" ref={containerRef}>
        {isInitialLoading ? "Loading gif" : error ? "Error" : <>{feedItems}</>}
      </div>
    </>
  );
};

export default Feed;
