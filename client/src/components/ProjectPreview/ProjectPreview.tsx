import { IProjectPreview } from "./types";
import "./style.scss";

export const ProjectPreview = ({ title, description }: IProjectPreview) => {
  return (
    <article className="project-preview">
      <section className="project-preview__main">
        <h2>{title}</h2>

        <p>{description}</p>

        <footer>
          <p>Likes</p>
          <p>Comments</p>
          <p>10 hours ago</p>
          <p>Favourite</p>
        </footer>
      </section>

      <section className="project-preview__right">
        <img />
        <ul></ul>
      </section>
    </article>
  );
};
