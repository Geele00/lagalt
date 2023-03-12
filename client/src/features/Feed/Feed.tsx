import "./Feed.style.scss";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "src/auth/AuthProvider";
import { fetchFeed } from "src/api/v1/feed/feed";
import { ProjectPreview } from "src/components/ProjectPreview/ProjectPreview";
import NyttProsjekt from "src/routes/$username/nytt-prosjekt/NyttProsjekt";
import { INewProject } from "src/types/entities/Project";
import { fetchProjects } from "src/api/v1/projects/projects";
import { queryClient } from "src/index";

const pageSize = 20;

const newProject = (title: string) => {
  return {
    ownerId: 1,
    title,
    description:
      "Dette er en middels lang prosjektbeskrivelse med tilfeldig innhold. En middels lang prosjektbeskrivelse med tilfeldig innhold er det dette.",
  };
};

const Feed = () => {
  const { authState } = useAuth();

  //const { data: authState } = useQuery(["auth"]);
  ////console.log(data2);
  //console.log(authState);

  //const { isFetching, data, error, fetchNextPage, isInitialLoading } =
  //  useInfiniteQuery({
  //    queryKey: ["/feed", "/projects", authState],
  //    queryFn: ({ pageParam = 0 }) => {
  //      const { token } = authState;
  //
  //      const params = `?size=${pageSize}&sort=createdAt&page=${pageParam}`;
  //      const headers = {
  //        headers: {
  //          "Content-Type": "application/json",
  //          Authorization: `Bearer ${token}`,
  //        },
  //      };
  //
  //      return token ? fetchFeed(headers, params) : null;
  //    },
  //    getNextPageParam: (lastPage) => {
  //      if (lastPage === null) return;
  //
  //      return parseInt(lastPage.number) + 1;
  //    },
  //  });

  const { isFetching, data, error, fetchNextPage, isInitialLoading } =
    useInfiniteQuery([
      `/feed?size=${pageSize}&sort=createdAt`,
      authState,
      "/projects",
    ]);

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
    //console.log(data);
    return !!data?.pages.at(-1)?.last;
  }, [data]);

  const onScroll = useCallback(() => {
    if (isFetching) return;
    if (reachedFinalPage) return;
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

  const newProjectMutation = useMutation({
    mutationFn: (newProject: INewProject) => {
      const { token } = authState;

      if (!token) throw new Error("No token error blabla");

      return fetchProjects({
        method: "POST",
        body: JSON.stringify(newProject),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          // filterOpts
        },
      });
    },
    onSuccess: () => {
      //queryClient.invalidateQueries(["/feed"]);
      queryClient.invalidateQueries([
        `?size=${pageSize}&sort=createdAt`,
        authState,
        "/projects",
      ]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const makeDummies = () => {
    for (let i = 0; i < 100; i++) {
      newProjectMutation.mutate(newProject("New project title " + i));
    }
  };

  return (
    <>
      <button onPointerUp={makeDummies}>Dev: Spawn projects</button>
      <div className="feed" role="feed" ref={containerRef}>
        {isInitialLoading ? "Loading gif" : error ? "Error" : <>{feedItems}</>}
      </div>
    </>
  );
};

export default Feed;
