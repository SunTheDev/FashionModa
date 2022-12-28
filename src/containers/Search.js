import React, { useContext } from "react";
// import { useDispatch } from "react-redux";
import { SearchContext } from "../App";
// import { setSearch } from "../redux/reducers/productReducer";

const Search = () => {
  const { setSearch } = useContext(SearchContext);

  const searchItem = (event) => {
    setSearch(event.target.value);
  };
  // const dispatch = useDispatch();

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbarinput"
        placeholder="Search..."
        onChange={searchItem}
        // onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

export default Search;
