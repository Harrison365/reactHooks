import { useState, useEffect } from "react";
import { getPublishersBooks } from "../api/apiCalls";

export default function useGoogleBooks(publisher) {
  const [publisherBooks, setPublisherBooks] = useState([]);
  const [publisherLoading, setPublisherLoading] = useState(true);
  useEffect(() => {
    setPublisherLoading(true);
    getPublishersBooks(publisher, 3).then((resultBooks) => {
      setPublisherBooks(resultBooks);
      setPublisherLoading(false);
    });
  }, [publisher]);

  return { publisherBooks, publisherLoading };
}
