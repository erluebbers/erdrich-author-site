import '../Components.css';
import React from "react"

function Book( {book, setBooks} ) {
  const { id, title, image, description, likes, pages } = book

  function handleLike() {
    fetch(`http://localhost:3000/books/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ likes: likes + 1})
    })
    fetch("http://localhost:3000/books")
      .then(r => r.json())
      .then(data => setBooks(data))
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <img 
        src={image}
        className="book-avatar"
      />
      <p className="description">{description}</p>
      <span>Pages: {pages}</span> 
      <br/>
      <span>Likes: {likes}</span> <button onClick={handleLike}>Like {"♥"}</button>
    </div>
  );
}

export default Book;