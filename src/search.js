import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
function Search() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h3> Search Recipe Titles</h3>
      {search}
      {query}
      <input
        type="text"
        placeholder="Enter keyword..."
        onChange={updateSearch}
      />
      <button type="submit">
        <a href="/instagram" className="instagram social">
          <FontAwesomeIcon icon={faSearchengin} size="1x" />
        </a>
      </button>
    </form>
  );
}

export default Search;
