import { useRef, useState } from "react";
import "./FilterItem.scss";

interface IFilterItem {
  selectedFilter: string;
  onPointerUp: any;
  itemName: string;
}

export const FilterItem = ({
  selectedFilter,
  onPointerUp,
  itemName,
}: IFilterItem) => {
  const inputRef = useRef(null);

  return (
    <li aria-selected={selectedFilter === itemName}>
      <button onPointerUp={onPointerUp} role="radio" name={itemName}>
        {itemName}
      </button>
    </li>
  );
};

// <div className="feed__filter_dropdown_item">
//   <label
//     aria-selected={selected === inputRef.current}
//     htmlFor={`popfilter-${itemName}`}
//   >
//     {itemName}
//   </label>
//   <input
//     ref={inputRef}
//     type="radio"
//     name="feed-popfilter"
//     id="popfilter-test"
//     value={itemName}
//     defaultChecked={defaultChecked}
//   />
// </div>
