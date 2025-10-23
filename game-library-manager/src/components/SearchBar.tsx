import useGameLibrary from "../hooks/useGameLibrary";

const SearchBar = () => {
  const { handleSearchChange } = useGameLibrary();

  return (
    <div>
      <input
        className="rounded-lg border solid border-red-950 outline-4 outline-offset-4 outline-red-950 p-2"
        type="text"
        placeholder="Search games..."
        onChange={(e) => handleSearchChange(e)}
      />
    </div>
  );
};

export default SearchBar;
