import "./style.scss";
import { IFilter } from "./types";

export const Filter = ({ activeOverlay, overlayDispatch }: IFilter) => {
  return (
    <section className="filter">
      <button
        className="filter__header-toggle"
        onClick={() => overlayDispatch("filter")}
      >
        <span>Filter</span>
        <i></i>
      </button>

      <div className="filter__body" aria-selected={activeOverlay === "filter"}>
        <button
          className="filter__body-toggle"
          role="Exit filter menu"
          onClick={() => overlayDispatch("filter")}
        ></button>
        <div className="filter-main">
          <section className="filter-main__pop-menu">
            <label>
              <input type="radio" name="pop-filter" value="new" />
              <p>Nytt</p>
            </label>
            <label>
              <input
                type="radio"
                name="pop-filter"
                value="popular"
                defaultChecked={true}
              />
              <p>Pop</p>
            </label>
            <label>
              <input type="radio" name="pop-filter" value="idk" />
              <p>Idk</p>
            </label>
          </section>
          <section>Industrier</section>
          <section>Roller</section>
        </div>
      </div>
    </section>
  );
};
