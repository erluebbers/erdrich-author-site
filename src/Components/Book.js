import '../Components.css';
import React from "react"

function Book( {book} ) {
  const { id, title, image, description, likes, pages } = book

  return (
    <div className="card">
      <h2>{title}</h2>
      <img 
        src={image}
        className="book-avatar"
      />
      <p className="description">{description}</p>
      <span>Pages: {pages}</span> <span>Likes: {likes}</span>
    </div>
  );
}

export default Book;