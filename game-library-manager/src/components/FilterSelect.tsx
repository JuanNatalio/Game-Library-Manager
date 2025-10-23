import { useAtom } from "jotai";
import { selectFilterValueAtom } from "../utils/storage";
import { genreOptions } from "../utils/options";
import useGameLibrary from "../hooks/useGameLibrary";

const FilterSelect = () => {
  const [selectFilterValue] = useAtom(selectFilterValueAtom);
  const { handleFilterChange } = useGameLibrary();

  return (
    <select
      value={selectFilterValue}
      onChange={(e) => {
        handleFilterChange(e.target.value as typeof selectFilterValue);
      }}
    >
      {genreOptions.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default FilterSelect;
