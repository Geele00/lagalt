import { FormEvent, useRef, useState } from "react";
import { uncheckCheckbox } from "src/utils";
import { IFeedFilter } from "./types";
import "./style.scss";
import { queryClient } from "src/index";

const classN = "feed-filter";

const onFormInput = (e: FormEvent) => {
  // Change filter. With auth state?

  // queryClient.invalidateQueries(["feed"]);

  console.log(e.target);
};

export const FeedFilter = ({ filterName, children }: IFeedFilter) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <div className={classN} onMouseLeave={() => uncheckCheckbox(checkboxRef)}>
      <input className={`${classN}_toggle`} type="checkbox" ref={checkboxRef} />
      <div className={`${classN}_visual`}>
        <div>
          <p>{filterName}</p>
          <i></i>
        </div>
      </div>

      <form className={`${classN}_dropdown`} onInput={onFormInput}>
        {children}
      </form>
    </div>
  );
};
