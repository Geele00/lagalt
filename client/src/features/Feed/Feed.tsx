import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { fetchProjects } from "src/api/v1/projects";
import { ProjectPreview } from "src/components";
import { useUser } from "src/index";
import { placeholderProjects } from "./placeholderProjects";

export const Feed = () => {
  const user = useUser();

  useEffect(() => {
    user.logIn({ username: "wes", uuid: "2983usdljk" });
  }, []);

  // const { data, error, isLoading, isSuccess } = useQuery({
  //   queryKey: ["/projects"],
  //   queryFn: fetchProjects,
  // });

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
