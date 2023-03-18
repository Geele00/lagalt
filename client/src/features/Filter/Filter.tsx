import "./Filter.style.scss";
import { IFilter } from "./Filter.types";
import { filters as filterData } from "./filterData";

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
          {filterData.map((filter) => (
            <li key={filter.value}>
                <p>{filter.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
