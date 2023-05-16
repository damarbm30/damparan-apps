import { search } from "~/assets";

const Search = () => {
  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-2xl bg-primary px-3 py-2 text-white outline-none sm:w-fit">
      <input
        placeholder="Search"
        className="bg-inherit placeholder-white outline-none"
      />
      <img src={search} alt="search" />
    </div>
  );
};
export default Search;
