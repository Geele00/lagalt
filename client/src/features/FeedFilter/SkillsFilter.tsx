import { LabelWithCheckbox } from "src/components/LabelWithCheckbox/LabelWithCheckbox";
import { FeedFilter } from "./FeedFilter";

export const SkillsFilter = () => {
  return (
    <FeedFilter filterName="Alle">
      <LabelWithCheckbox
        className={`feed-filter__label-with-checkbox`}
        label="blabla"
      />
      <LabelWithCheckbox
        className={`feed-filter__label-with-checkbox`}
        label="Blabla2"
      />
      <LabelWithCheckbox
        className={`feed-filter__label-with-checkbox`}
        label="Blabla3"
      />
    </FeedFilter>
  );
};
