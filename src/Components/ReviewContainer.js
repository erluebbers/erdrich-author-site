import '../Components.css';
import React from "react";
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"

function ReviewContainer() {

  return (
    <div>
      <ReviewForm />
      <ReviewList />
    </div>
  );

}

export default ReviewContainer;