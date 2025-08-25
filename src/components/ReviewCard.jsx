import React from "react";
import RatingStars from "./RatingStars";

export default function ReviewCard({ review }) {
  return (
    <article className="review">
      <header className="review__head">
        <div>
          <div className="review__name">{review.name}</div>
          <div className="review__date">{new Date(review.createdAt).toLocaleDateString()}</div>
        </div>
        <RatingStars value={review.rating} readOnly size="sm" />
      </header>
      {review.title && <h4 className="review__title">{review.title}</h4>}
      <p className="review__text">{review.message}</p>
    </article>
  );
}