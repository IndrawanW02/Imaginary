import React, { useState, useEffect } from "react";

function Gallery() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/search?query=${query}`
      );
      const result = await response.json();
      await setResults(result);
      setLoading(false);
    } catch (error) {
      console.log("Internal server error");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    setQuery(query);
    fetchData(query);
  }, [location.search]);

  return (
    <>
      <h1>Gallery</h1>

      {loading ? (
        <h2>Loading results for: {query}...</h2>
      ) : (
        <>
          <h1>Search result for: {query}</h1>
          {results.length > 0 ? (
            results.map((result) => (
              <img
                key={result.id}
                alt={result.alt}
                src={result.src.small}
              ></img>
            ))
          ) : (
            <h3>No results found</h3>
          )}
        </>
      )}
      <h2>Photos provided by Pexels</h2>
    </>
  );
}

export default Gallery;
