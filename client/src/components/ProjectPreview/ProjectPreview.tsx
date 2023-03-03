import { IProjectPreview } from "./types";
import "./style.scss";
import { forwardRef } from "react";

export const ProjectPreview = ({
  title,
  description,
  className,
  scrollRef,
}: IProjectPreview) => {
  return (
    <article className={`${className} project-preview`} ref={scrollRef}>
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
