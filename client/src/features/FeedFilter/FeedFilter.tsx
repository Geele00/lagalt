import { FormEvent, useRef } from "react";
import { uncheckCheckbox } from "src/utils";
import { IFeedFilter } from "./types";
import "./style.scss";
import { LabelWithCheckbox } from "src/components/LabelWithCheckbox/LabelWithCheckbox";

const classN = "feed-filter";

export const FeedFilter = ({ filterName }: IFeedFilter) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const onFormInput = (e: FormEvent) => {
    console.log(e.target);
    // Change filter
  };

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
        <LabelWithCheckbox className={classN} label="Blabla" />

        <LabelWithCheckbox className={classN} label="Blabla2" />

        <LabelWithCheckbox className={classN} label="Blabla3" />
      </form>
    </div>
  );
};
