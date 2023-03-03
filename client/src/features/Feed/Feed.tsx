import "./style.scss";
import { useQuery, useMutation } from "src/utils/tanstack";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "src/auth";
import { queryClient } from "src/index";
import { fetchProjects } from "src/api/v1";
import { ProjectPreview } from "src/components";
import { INewProject } from "src/types/entities/Project";
import { useInfiniteQuery } from "@tanstack/react-query";

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
      queryClient.invalidateQueries(["/projects"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const makeDummies = () => {
    newProjectMutation.mutate(newProject("New project title 1"));
    newProjectMutation.mutate(newProject("New project title 2"));
    newProjectMutation.mutate(newProject("New project title 3"));
    newProjectMutation.mutate(newProject("New project title 4"));
    newProjectMutation.mutate(newProject("New project title 5"));
    newProjectMutation.mutate(newProject("New project title 6"));
    newProjectMutation.mutate(newProject("New project title 7"));
    newProjectMutation.mutate(newProject("New project title 11"));
    newProjectMutation.mutate(newProject("New project title 21"));
    newProjectMutation.mutate(newProject("New project title 31"));
    newProjectMutation.mutate(newProject("New project title 41"));
    newProjectMutation.mutate(newProject("New project title 51"));
    newProjectMutation.mutate(newProject("New project title 61"));
    newProjectMutation.mutate(newProject("New project title 111"));
    newProjectMutation.mutate(newProject("New project title 211"));
    newProjectMutation.mutate(newProject("New project title 311"));
    newProjectMutation.mutate(newProject("New project title 411"));
    newProjectMutation.mutate(newProject("New project title 511"));
    newProjectMutation.mutate(newProject("New project title 611"));
    newProjectMutation.mutate(newProject("New project title 1111"));
    newProjectMutation.mutate(newProject("New project title 2111"));
    newProjectMutation.mutate(newProject("New project title 3111"));
    newProjectMutation.mutate(newProject("New project title 4111"));
    newProjectMutation.mutate(newProject("New project title 5111"));
    newProjectMutation.mutate(newProject("New project title 6111"));
    newProjectMutation.mutate(newProject("New project title 1112"));
    newProjectMutation.mutate(newProject("New project title 2112"));
    newProjectMutation.mutate(newProject("New project title 3112"));
    newProjectMutation.mutate(newProject("New project title 4112"));
    newProjectMutation.mutate(newProject("New project title 5112"));
    newProjectMutation.mutate(newProject("New project title 6112"));
  };

  // Implement pagination on scroll
  // onScroll => setPage(prev => Math.max(prev - 1, 0))
  const {
    data: projectsPage,
    error,
    isLoading,
    isPreviousData,
  } = useQuery({
    queryKey: ["/projects", authState],
    queryFn: () => {
      const { token } = authState;

      const params = `?size=${pageSize}&sort=createdAt&page=${page}`;
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      return token ? fetchProjects(headers, params) : null;
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
      <button onClick={makeDummies}>New Project</button>
    </div>
  );
};
