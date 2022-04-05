import React from "react";

import searchIcon from "../../assets/icon-search.svg";
import "./Search.scss";

const Search = () => {
  return (
    <form className="Search">
      <label for="input"></label>
      <img src={searchIcon} alt="" />
      <input placeholder="Search for movies or TV series" id="input" />
    </form>
  );
};

export default Search;
