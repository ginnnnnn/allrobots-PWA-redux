import React from "react";

const SearchBox = ({ searchChange }) => {
  console.log('searchbox')
  return (
    <div className=" pa3">
      <input
        className="pa2 ba b--red bg-light-blue "
        type="search"
        placeholder="type n Search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
