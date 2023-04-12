import { useState, useEffect } from "react";
import { getBooks } from "../api/apiCalls";

export default function useGoogleBooks(query) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getBooks(query)
      .then((books) => {
        setBooks(books);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [query]);

  return { books, error, isLoading };
}
