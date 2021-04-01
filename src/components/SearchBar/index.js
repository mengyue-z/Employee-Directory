import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
  return (
    <form className="search-bar">
      <div className="form-group">
        <input
        placeholder = "Search"
          value={props.search}
          onChange={props.handleInputChange}
        />
      </div>
    </form>
  );
}

export default SearchBar;
