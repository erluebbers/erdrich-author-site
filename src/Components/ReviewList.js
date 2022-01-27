import '../Components.css';
import React, { useState, useEffect} from "react";
import Review from "./Review"

function ReviewList() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(r =r.json())
      .then(data => setReviews(data))
  })

  const displayReviews = reviews.map(review => {
    return <Review review={review}/>
  })


  return (
    <div>
      {displayReviews}
    </div>
  );
}

export default ReviewList;