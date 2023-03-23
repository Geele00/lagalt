import "./ProjectPreview.style.scss";
import { Link } from "@tanstack/react-router";
import { IProjectPreview } from "./ProjectPreview.types";
import { ColoredCircle } from "src/components/ColoredCircle/ColoredCircle";
import { useState } from "react";
import { HrDivider } from "../HrDivider/HrDivider";

export const ProjectPreview = ({ project, short }: IProjectPreview) => {
  const [isDescVisible, setIsDescVisible] = useState(!short);

  return (
    <article className="project-preview">
      <header className="project-preview__header">
        <section className="project-preview__header__data">
          <p>For 10 timer siden av ~/</p>
          <Link to="$username" params={{ username: "bla" }}>
            username
          </Link>
        </section>

        <ul className="project-preview__header__skill-matches">
          <li>
            <ColoredCircle color="#8da8d2" />
          </li>
          <li>
            <ColoredCircle color="green" />
          </li>
          <li>
            <ColoredCircle color="coral" />
          </li>
        </ul>
      </header>

      <HrDivider />

      <section
        className="project-preview__main"
        data-desc-hidden={!isDescVisible}
      >
        <hgroup>
          <h1>TIalksjdflkasdjflkajsdflkjasdflkjasdf{project.title}TLE</h1>

          <p aria-hidden={!isDescVisible} id="preview-desc">
            {project.description}{" "}
            alksjdflkasdjflkajsdflkjasdflkjasdfalksjdflkasdjflkajsdflkjasdflkjasdfalksjdflkasdjflkajsdflkjasdflkjasdfalksjdflkasdjflkajsdflkjasdflkjasdf
          </p>
        </hgroup>

        <img
          src="/images/comment.svg"
          alt="Comment bubble"
          id="comment-bubble"
        />
      </section>

      <HrDivider />

      <footer className="project-preview__footer">
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

        {short && (
          <button
            aria-expanded={isDescVisible}
            aria-controls="preview-desc"
            className="project-preview__footer__expand-btn"
            onPointerUp={() => setIsDescVisible((prev) => !prev)}
          >
            arrowdn
          </button>
        )}
      </footer>
    </article>
  );
};
