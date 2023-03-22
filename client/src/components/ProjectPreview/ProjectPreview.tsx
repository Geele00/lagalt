import "./ProjectPreview.style.scss";
import { Link } from "@tanstack/react-router";
import { IProjectPreview } from "./ProjectPreview.types";
import { SkillCircle } from "../SkillCircle/SkillCircle";

export const ProjectPreview = ({ title, description }: IProjectPreview) => {
  return (
    <article className="project-preview">
      <header>
        <div className="project-preview__">
          <SkillCircle
            color="#d3d3d3"
            title="Test"
            className="project-preview__circle"
          />
        </div>
      </header>
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
  );
};
