import React, { useState } from "react";
import useSearchAllFromApi from "../../../Hooks/use-search-all-from-api";
import BootstrapForm from "../../Forms/bootstrap-form";

function UserSearch() {
  const [query, setQuery] = useState("");
  function startSearch(e) {
    e.preventDefault();
    const userQuery = document.querySelector("#user-search").value.trim();

    if (userQuery) {
      setQuery(userQuery);
    }
  }
  return (
    <>
      <BootstrapForm onSubmit={startSearch}>
        <input
          type="text"
          id="user-search"
          placeholder="Search username"
        ></input>
      </BootstrapForm>
      {query && <SearchResults query={query} />}
    </>
  );
}

export default UserSearch;

function SearchResults({ query }) {
  const results = useSearchAllFromApi(query);

  return (
    <div className="absolute raised full-width">
      {results && (
        <ul>
          {results.map((result) => {
            return <SearchResult data={result} />;
          })}
        </ul>
      )}
    </div>
  );
}

function SearchResult({ data }) {
  return <li>{data.name}</li>;
}
