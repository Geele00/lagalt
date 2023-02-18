import { useState } from "react";
import { IFeedFilter } from ".";
import { FilterItem } from "./FilterItem";

export const FeedFilter = ({ filterName }: IFeedFilter) => {
  // const defaultInputRef = useRef<HTMLInputElement>(null);
  // const [selected, setSelected] = useState();
  // const onFormInput = (e: any) => {
  //   setSelected(e.target);
  // };

  const [selectedFilter, setSelectedFilter] = useState("Pop");

  const onPointerUp = (e: any) => {
    setSelectedFilter(e.target.name);
  };

  return (
    <div className="feed__filter">
      <input className="feed__filter_toggle" type="checkbox" />
      <div className="feed__filter_visual">
        <div>
          <p>{selectedFilter}</p>
          <i></i>
        </div>
      </div>

      <ul className="feed__filter_dropdown" role="radiogroup">
        <FilterItem
          selectedFilter={selectedFilter}
          onPointerUp={onPointerUp}
          itemName="Populært"
        />
        <FilterItem
          selectedFilter={selectedFilter}
          onPointerUp={onPointerUp}
          itemName="Nytt"
        />
        <FilterItem
          selectedFilter={selectedFilter}
          onPointerUp={onPointerUp}
          itemName="Testie"
        />
      </ul>
    </div>
  );
};
