/* eslint-disable react/prop-types */
import './ReviewCard.css'
import StarFilled from '../assets/green-star.svg'
import StarEmpty from '../assets/gray-star.svg'

export function ReviewCard({ review }) {
  return (
    <div className='review'>
      <div className='review-header'>
        <p className='review-name'>{review.name}</p>
        <p className='review-date'>{
          new Date(review.created_at).toLocaleString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })
        }</p>
      </div>

      <div className='review-star'>
        {Array.from({ length: review.stars }).map((_, index) => (
          <img key={index} src={StarFilled} alt="Estrela" />
        ))}
        {Array.from({ length: 5 - review.stars }).map((_, index) => (
          <img key={index} src={StarEmpty} alt="Estrela" />
        ))}
      </div>

      <div className='review-description'>
        {review.description}
      </div>
    </div>
  )
}