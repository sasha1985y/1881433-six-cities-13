import { getShortDate, getFullDate } from '../utilites.ts';
import { Review } from '../../types/offer-type.ts';
import { COEF } from '../../const.ts';

type ReviewsItemProps = {
  review: Review;
}

export default function ReviewsItem({ review }: ReviewsItemProps) {
  const { id, user, rating, comment, date } = review;
  return (
    <li key={ id } className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={ user.avatarUrl }
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          { user.name }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ rating * COEF }%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { comment }
        </p>
        <time className="reviews__time" dateTime={ getFullDate(date) }>{ getShortDate(date) }</time>
      </div>
    </li>
  );
}
