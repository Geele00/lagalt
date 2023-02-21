import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import "./style.scss";

export const ProsjektSide = () => {
  // const { data } = useQuery(["project"]);
  // const { projectName } = useParams();
  // console.log(projectName);

  return (
    <div className="project-page">
      <h1>Project Title</h1>
      <ul className="project-page__details">
        <li>Project detail</li>
        <li>Project detail</li>
        <li>Project detail</li>
        <li>Project detail</li>
      </ul>
      <p className="project-page__description">Project description</p>
    </div>
  );
};
