import '../Components.css';
import React from "react"

function Review( {review} ) {
  const { name, stars, title, post } = review

  return (
    <div className="post">
      <h2>User: {name}</h2>
      <h3>Title: {title}</h3>
      <small>{stars} {stars === 1 ? "Star" : "Stars"}</small>
      <p>"{post}"</p>
    </div>
  );
}

export default Review;