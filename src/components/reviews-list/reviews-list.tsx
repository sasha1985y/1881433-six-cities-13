import { Review } from '../../types/offer-type';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      { reviews.map((review) => <ReviewsItem key={review.id} review={review} />) }
    </ul>
  );
}
