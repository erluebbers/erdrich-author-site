import '../Components.css';
import React from "react"

function Review( {review} ) {
  const { name, stars, title, post } = review

  return (
    <div>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <small>{stars}</small>
      <p>{post}</p>
    </div>
  );
}

export default Review;