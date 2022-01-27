import '../Components.css';
import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"

function ReviewContainer() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(r => r.json())
      .then(data => setReviews(data))
  }, [])


  return (
    <div>
      <ReviewForm />
      <ReviewList reviews={reviews}/>
    </div>
  );

}

export default ReviewContainer;