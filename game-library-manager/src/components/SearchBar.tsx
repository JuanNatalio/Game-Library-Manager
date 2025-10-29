import type { FC } from "react";
interface SearchBarProps {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ handleSearchChange }) => {
  return (
    <div>
      <input
        className="rounded-lg border solid border-red-950 outline-4 outline-offset-4 outline-red-950 p-2"
        type="text"
        placeholder="Search games..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
