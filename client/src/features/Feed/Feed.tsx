import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "src/api/v1/projects";
import { useMemo } from "react";
import { useAuth } from "src/auth/AuthProvider";
import { ProjectPreview } from "src/components";
import { placeholderProjects } from "./placeholderProjects";
import "./style.scss";

export const Feed = () => {
  const { authState } = useAuth();

  const user = useAuth();

  // const { data, error, isLoading, isSuccess } = useQuery({
  //   queryKey: ["/projects"],
  //   queryFn: () =>
  //     fetchProjects({
  //       // custom if logged in
  //       // filterOpts
  //     }),
  // });
  //
  const feedItems = useMemo(() => {
    // return (
    //   <p>Error</p> ??
    //   placeholderProjects.map((project) => (
    //     <ProjectPreview
    //       title={project.title}
    //       description={project.description}
    //       key={project.id}
    //     />
    //   ))
    // );

    // if (!data) return <p>Error</p>;
    // return data.map((project) => (
    return placeholderProjects.map((project) => (
      <ProjectPreview
        className="feed__project-preview"
        title={project.title}
        description={project.description}
        key={project.id}
      />
    ));
  }, []);

  return (
    <section className="feed" role="feed">
      {feedItems}
    </section>
  );

  // return isLoading ? (
  //   <div>Loading gif</div>
  // ) : error ? (
  //   <div>Error</div>
  // ) : (
  //   <main className="feed" role="feed">
  //     {feedItems}
  //   </main>
  // );
};
