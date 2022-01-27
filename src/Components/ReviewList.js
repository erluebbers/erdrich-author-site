import '../Components.css';
import React from "react";
import Review from "./Review"

function ReviewList( {reviews} ) {
  const displayReviews = reviews.map(review => {
    return <Review review={review} key={review.id}/>
  })

  return (
    <div>
      {displayReviews}
    </div>
  );
}

export default ReviewList;