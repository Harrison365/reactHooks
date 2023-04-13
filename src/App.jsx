import "./App.css";
import BooksGrid from "./components/BooksGrid";
import Header from "./components/Header";
import QueryBar from "./components/QueryBar";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("quilting");
  const [show, setShow] = useState(10);
  return (
    <div className="App">
      <Header title="Book Store" />
      <QueryBar setQuery={setQuery} />
      Show:
      <button
        onClick={() => {
          setShow(5);
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          setShow(10);
        }}
      >
        10
      </button>
      <BooksGrid query={query} show={show} />
    </div>
  );
}

export default App;
