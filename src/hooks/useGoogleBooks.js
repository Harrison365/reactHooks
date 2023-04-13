import { useState, useEffect } from "react";
import { getBooks } from "../api/apiCalls";

export default function useGoogleBooks(query, show) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getBooks(query, show)
      .then((books) => {
        setBooks(books);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, [query, show]);

  return { books, error, isLoading };
}
