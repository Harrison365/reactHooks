import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import useGoogleBooks from "../hooks/useGoogleBooks";
import usePublisherBooks from "../hooks/usePublishersBooks";
import Modal from "react-modal";
import "./BooksGrid.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function BooksGrid({ query, show }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPublisher, setSelectedPublisher] = useState("Lucky Spool");
  const { books, error, isLoading } = useGoogleBooks(query, show);
  const { publisherBooks, publisherLoading } =
    usePublisherBooks(selectedPublisher);

  function closeModal() {
    setIsOpen(false);
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <main className="books__grid">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Publishers other books"
        ariaHideApp={false}
      >
        <div>
          <h2>More books by {selectedPublisher}</h2>
          {publisherLoading ? (
            <p style={{ color: "black" }}>Loading...</p>
          ) : (
            <ul>
              {publisherBooks
                ? publisherBooks.map((publisherBook, index) => {
                    return (
                      <li key={index}>
                        {publisherBook.volumeInfo.title} (
                        {publisherBook.volumeInfo.authors
                          ? publisherBook.volumeInfo.authors[0]
                          : "-"}
                        )
                      </li>
                    );
                  })
                : null}
            </ul>
          )}
        </div>
      </Modal>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            details={book}
            title={book.volumeInfo.title}
            imgUrl={book.volumeInfo}
            setIsOpen={setIsOpen}
            setSelectedPublisher={setSelectedPublisher}
          />
        );
      })}
    </main>
  );
}
