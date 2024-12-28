import React from "react";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <p>Showing results for: {query}</p>
      {/* Add dynamic search result logic here */}
    </div>
  );
}

export default SearchResults;

