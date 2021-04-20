import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-oasis-89562.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="testimonials my-5">
      <div className="container">
        <div className="section-header text-center">
          <h1>
            What Client Says <br />
            About Us
          </h1>
          <h6>
            The school offers the following services for Teenage first-time
            drivers, new adult learners and existing drivers with lapsed
            licenses
          </h6>
        </div>
        <div className="card-div row mt-5">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
