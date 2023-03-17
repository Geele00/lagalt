import "./ProjectPreview.style.scss";
import { Link } from "@tanstack/react-router";
import { IProjectPreview } from "./ProjectPreview.types";

export const ProjectPreview = ({ title, description }: IProjectPreview) => {
  return (
    <>
      <article className="project-preview__main">
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
      </article>

      <section className="project-preview__right"></section>
    </>
  );
};
