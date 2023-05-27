import { useState } from "react";
import { useDispatch } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";

import { setSearchQuery } from "./searchbarSlice";

const Searchbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchKey, setsearchKey] = useState("");

  const params = { q: searchKey };

  const handleChange = (e) => {
    setsearchKey(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchKey.length > 0) {
      dispatch(setSearchQuery(searchKey));
      navigate({ pathname: "/pencarian", search: `?${createSearchParams(params)}` });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center justify-between gap-2 rounded-2xl bg-primary px-3 py-2 text-white outline-none"
    >
      <input
        placeholder="Search"
        className="w-full bg-inherit bg-[url('/src/assets/search.webp')] bg-contain bg-right bg-no-repeat placeholder-white outline-none"
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" hidden />
    </form>
  );
};
export default Searchbar;
