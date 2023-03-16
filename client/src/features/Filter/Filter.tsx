import "./Filter.style.scss";
import { IFilter } from "./Filter.types";

export const Filter = ({ activeOverlay, toggleOverlay }: IFilter) => {
  return (
    <section className="filter">
      <button
        className="filter__header-toggle"
        onPointerUp={() => toggleOverlay({ overlay: "filter", type: "toggle" })}
        title="Filter"
      >
        <span aria-hidden></span>
      </button>

      <div className="filter__body" aria-expanded={activeOverlay === "filter"}>
        <ul className="filter__body__main">
          <li>
            <p>Koding</p>
          </li>
          <li>
            <p>Fotografi</p>
          </li>
          <li>
            <p>Tegning</p>
          </li>
          <li>
            <p>Keramikk</p>
          </li>
          <li>
            <p>Arkitektur</p>
          </li>
          <li>
            <p>Billedkunst</p>
          </li>
          <li>
            <p>Animasjon</p>
          </li>
          <li>
            <p>UX Design</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
