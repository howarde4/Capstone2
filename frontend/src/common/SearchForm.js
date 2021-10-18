import React, { useState } from "react";

function SearchForm({ searchFor, onSearchChange }) {
  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
    onSearchChange(evt.target.value);
  }

  return (
      <div className="SearchForm mb-4">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
              className="form-control form-control-lg flex-grow-1"
              name="searchTerm"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={handleChange}
          />
        </form>
      </div>
  );
}

export default SearchForm;
