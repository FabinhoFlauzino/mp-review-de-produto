import { useEffect, useState } from "react";
import "./ReviewSection.css";
import { getReviews } from "../services/ReviewService";
import { ReviewCard } from "./ReviewCard";


export default function ReviewSection() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then(setReviews)
  }, [])

  return (
    <section className="reviews">
      <h3>O que nossos clientes dizem</h3>

      <div className="reviews-container">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
