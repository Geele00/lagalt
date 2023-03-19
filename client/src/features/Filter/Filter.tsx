import { useOverlay } from "src/features/OverlayContext/OverlayProvider";
import "./Filter.style.scss";
import { filters as filterData } from "./filterData";

export const Filter = () => {
  const { activeOverlay, toggleOverlay } = useOverlay();

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
