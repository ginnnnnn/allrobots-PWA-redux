import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className=" pa3">
      <input
        className="pa2 ba b--red bg-light-blue "
        type="search"
        placeholder="type n Search"
        onChange={searchChange}
        aria-label='Search Robots'
      />
    </div>
  );
};

export default SearchBox;
