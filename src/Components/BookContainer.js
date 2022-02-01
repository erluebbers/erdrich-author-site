import '../Components.css';
import React, { useState, useEffect } from "react"
import Book from "./Book"

function BookContainer() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(r => r.json())
      .then(data => setBooks(data))
  }, [])

  const displayBooks = books.map(book => {
    return <Book book={book} key={book.id} setBooks={setBooks}/>
  })

  return (
    <div className="Book-container">
      {displayBooks}
    </div>
  );
}

export default BookContainer;