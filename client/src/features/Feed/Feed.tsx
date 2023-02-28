import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "src/api/v1";
import { useMemo } from "react";
import { useAuth } from "src/auth";
import { ProjectPreview } from "src/components";
import "./style.scss";

export const Feed = () => {
  const { authState } = useAuth();

  const { data, error, isLoading } = useQuery({
    queryKey: ["/projects", authState],
    queryFn: () => {
      const { token } = authState;

      return token
        ? fetchProjects({
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              // filterOpts
            },
          })
        : null;
    },
  });

  console.log(data);

  const feedItems = useMemo(() => {
    return data?.map((project) => (
      <ProjectPreview
        className="feed__project-preview"
        title={project.title}
        description={project.description}
        key={project.id}
      />
    ));
  }, [data, error]);

  return isLoading ? (
    <div>Loading gif</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <main className="feed" role="feed">
      {feedItems}
    </main>
  );
};
