import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch({ query, page }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setMore] = useState(false);

  let cancel;
  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: page },
      cancelToken: axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prevBooks) => {
          return [...new Set([...prevBooks, ...res.data.docs.map((b) => b.title)])]; // return just unique values
        });
        setMore(res.data.docs.length > 0);
        setLoading(false);
        console.log(res);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, page]); // activates based on changes to query and page
  return { loading, error, books, hasMore };
}
