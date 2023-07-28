import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer-type';
import { AppRoute } from '../../const';

type FavoriteItemProps = {
  content: OfferType;
}

const COEF = 15;

function FavoriteCard({ content }: FavoriteItemProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {content.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer}>
          <img className="place-card__image" src= {content.previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{content.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${content.rating * COEF}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to ={AppRoute.Offer}>{content.title}</Link>
        </h2>
        <p className="place-card__type">{content.type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
