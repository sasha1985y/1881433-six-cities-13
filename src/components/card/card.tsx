import { OfferType } from '../../types/offer-type';
import { Link } from 'react-router-dom';
import { AppRoute, COEF } from '../../const';

type CardProps = {
  content: OfferType;
  active: boolean;
  onMouseOver: (offerId: string) => void;
  citiesOrNear: string;
}

function Card({ content, active, onMouseOver, citiesOrNear }: CardProps): JSX.Element {
  const {
    id,
    previewImage,
    isPremium,
    price,
    title,
    type,
    rating,
  } = content;

  return (
    <article className={active ? `${citiesOrNear}__card place-card--active` : `${citiesOrNear}__card place-card`}
      onMouseOver={() => onMouseOver(id)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${citiesOrNear}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating * COEF}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `${ AppRoute.Offer }/${ id }` }>{ title }</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
