import "./style.scss";
import { useQuery, useMutation } from "src/utils/tanstack";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "src/auth";
import { queryClient } from "src/index";
import { fetchProjects } from "src/api/v1";
import { ProjectPreview } from "src/components";
import { INewProject } from "src/types/entities/Project";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchFeed } from "src/api/v1/feed";

const newProject = (title: string) => {
  return {
    ownerId: 1,
    title,
    description: "Descirptionsdlkfja",
  };
};

const pageSize = 30;

export const Feed = () => {
  const { authState } = useAuth();

  const [page, setPage] = useState(0);

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
      queryClient.invalidateQueries(["/feed"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const makeDummies = () => {
    for (let i = 0; i < 20; i++) {
      newProjectMutation.mutate(newProject("New project title " + i));
    }
  };

  // Implement pagination on scroll
  // onScroll => setPage(prev => Math.max(prev - 1, 0))
  const {
    data: projectsPage,
    error,
    isLoading,
    isPreviousData,
  } = useQuery({
    queryKey: ["/feed", "/projects", authState],
    queryFn: () => {
      const { token } = authState;

      const params = `?size=${pageSize}&sort=createdAt&page=${page}`;
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      return token ? fetchFeed(headers, params) : null;
    },
    keepPreviousData: true,
  });

  console.log(projectsPage);

  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   fetchPreviousPage,
  // } = useInfiniteQuery({
  //   queryKey: ["/projects", authState],
  //   getNextPageParam: (lastPage, pages) => lastPage?;
  //   queryFn: () => {
  //     const { token } = authState;
  //
  //     const params = `?size=${pageSize}&sort=createdAt&page=${page}`;
  //     const headers = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //
  //     return token ? fetchProjects(headers, params) : null;
  //   },
  // });

  const scrollRef = useRef<HTMLButtonElement>(null);

  const feedItems = useMemo(() => {
    const projects = projectsPage?.content;
    if (!projects) return null;

    const lastIndex = projects.length - 1;

    return projects.map((project, idx) => {
      if (idx !== lastIndex)
        return (
          <ProjectPreview
            className="feed__project-preview"
            title={project.title}
            description={project.description}
            key={project.id + project.title}
          />
        );

      return (
        <ProjectPreview
          className="feed__project-preview"
          title={project.title}
          description={project.description}
          key={project.id + project.title}
          scrollRef={scrollRef}
        />
      );
    });
  }, [projectsPage]);

  const [offsetTop, setOffsetTop] = useState(0);

  const onScroll = (e: any) => {
    const lastItem = scrollRef?.current;
    if (!lastItem) return;

    if (lastItem.offsetTop < offsetTop) return;

    const { top, height } = lastItem.getClientRects()[0];

    if (top < height * 5 + window.innerHeight) {
      setOffsetTop((prev) => prev + lastItem.offsetTop);
      console.log(offsetTop);
      // refetch logic
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return isLoading ? (
    <div>Loading gif</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="feed" role="feed">
      {feedItems}
      <button onClick={makeDummies}>Spawn projects</button>
    </div>
  );
};
