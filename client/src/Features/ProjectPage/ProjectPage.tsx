import { useParams } from "@tanstack/react-router";

export const ProjectPage = () => {
  const { projectId } = useParams();

  console.log(projectId);

  return (
    <main className="project-page">
      <h1>Project Title</h1>
      <ul className="project-page__details">
        <li>Project detail</li>
        <li>Project detail</li>
        <li>Project detail</li>
        <li>Project detail</li>
      </ul>
      <p className="project-page__description">Project description</p>
    </main>
  );
};
