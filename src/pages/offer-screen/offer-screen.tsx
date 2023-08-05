import { Helmet } from 'react-helmet-async';
import AppHeader from '../../components/app-header/app-header';
import { OfferType, City, Review, AllOffer } from '../../types/offer-type';
import { OFFER_COEF, CardType } from '../../const';
import { Navigate, useParams } from 'react-router-dom';
import AppCommentForm from '../../components/app-comment-form/app-comment-form';
import { Points } from '../../types/map';
import { AppRoute, MapClassOptions, MapType } from '../../const';
import Map from '../../components/map/map';
import ReviewsList from '../../components/reviews-list/reviews-list';
import OfferImageList from '../../components/offrer-image-list/offrer-image-list';
import CardList from '../../components/card-list/card-list';


type OfferScreenProps = {
  offers: OfferType[];
  allOffers: AllOffer[];
  points: Points;
  city: City;
  reviews: Review[];
}

function OfferScreen({
  offers,
  allOffers,
  points,
  city,
  reviews
}: OfferScreenProps): JSX.Element {
  const { offerId } = useParams();
  const fullOffer = allOffers.find(({ id }) => id === offerId) as AllOffer;
  if (!fullOffer) {
    return (
      <Navigate to={ AppRoute.NotFound } />
    );
  }


  const {
    title,
    rating,
    isPremium,
    price,
    host,
    goods,
    description,
    images,
    bedrooms,
    maxAdults,
    type,
  } = fullOffer;
  const { name, avatarUrl, isPro } = host;

  return (
    <div className="page">
      <Helmet>
        <title>Предложение</title>
      </Helmet>
      <AppHeader
        offers={offers}
        isAuthorization
      />
      <main className="page__main page__main--offer"/>
      <section className="offer">
        <div className="offer__gallery-container container">
          <OfferImageList images={images} />
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              {isPremium && 'Premium'}
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: rating * OFFER_COEF}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms}
              </li>
              <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((good: string) => (
                  <li key={good} className="offer__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {name}
                </span>
                <span className="offer__user-status">
                  {isPro && 'Pro'}
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={ reviews } />
              <AppCommentForm />
            </section>
          </div>
        </div>
        <section className="offer__map map">
          <Map
            city={ city }
            points={ points.filter((point) => point.title !== offerId) }
            selectedPoint={ undefined }
            mapClass={ MapClassOptions[ MapType.Offer ] }
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <CardList
            offers={offers.filter((offer) => offer.id !== offerId)}
            citiesOrNear={CardType.Near}
            classOrEmpty={CardType.Empty}
          />
        </section>
      </div>
      <main/>
    </div>
  );
}

export default OfferScreen;
