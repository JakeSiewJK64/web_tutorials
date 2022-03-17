import React, { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";

export default function Books() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  
  const { books, hasMore, loading, error } = useBookSearch({
    query: query,
    page: page,
  });
  
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPage(1);
  }

  return (
    <div>
      <input type={"text"} value={query} onChange={handleSearch}></input>
      {books.map((book, i) => {
        if (books.length === i + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        }
        return <div key={book}>{book}</div>;
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </div>
  );
}
