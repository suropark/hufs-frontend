import React from 'react';
// import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onChange, placeholder }) => {
  return (
    <div className="Search">
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
      <span className="SearchSpan">{/* <FaSearch /> */}</span>
    </div>
  );
};

export default SearchBar;
