import "./ProjectPreview.style.scss";
import { IProjectPreview } from "./types";
import { Link } from "@tanstack/react-router";

export const ProjectPreview = ({
  title,
  description,
  className,
}: IProjectPreview) => {
  return (
    <article className={`${className} project-preview`}>
      <section className="project-preview__main">
        <h2>{title}</h2>

        <p>{description}</p>

        <footer>
          <Link>
            <figure>
              <img src="/images/light-bulb.svg" alt="Likes" />
              <figcaption>20</figcaption>
            </figure>
          </Link>

          <Link>
            <figure>
              <img
                src="/images/comment.svg"
                alt="Comment bubble"
                id="comment-bubble"
              />
              <figcaption>20</figcaption>
            </figure>
          </Link>

          <Link>
            <img src="/images/bookmark-simple.svg" alt="Bookmark" />
          </Link>

          <p>10 timer siden</p>
        </footer>
      </section>

      <section className="project-preview__right"></section>
    </article>
  );
};
