import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    // Call the onSearch callback with the new search term
    onSearch(newSearchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search songs..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
