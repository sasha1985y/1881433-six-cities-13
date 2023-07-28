import { OfferType } from '../../types/offer-type';
import FavoriteCard from '../favorite-card/favorite-card';
import { Places } from '../../const';

type FavoriteCardListProps = {
  offers: OfferType[];
}

function FavoriteCardList({ offers }: FavoriteCardListProps): JSX.Element {
  const favorites = offers.filter((offer: { isFavorite: boolean}) => offer.isFavorite);
  return (
    <ul className="favorites__list">
      {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Paris.toLowerCase()).length ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{Places.Paris}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Paris.toLowerCase())
              .map((favorite) => (
                <FavoriteCard content={favorite} key={favorite.id} />
              ))}
          </div>
        </li> :
        null}
      {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Amsterdam.toLowerCase()).length ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{Places.Amsterdam}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Amsterdam.toLowerCase())
              .map((favorite) => (
                <FavoriteCard content={favorite} key={favorite.id} />
              ))}
          </div>
        </li> :
        null}
      {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Brussels.toLowerCase()).length ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{Places.Brussels}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Brussels.toLowerCase())
              .map((favorite) => (
                <FavoriteCard content={favorite} key={favorite.id} />
              ))}
          </div>
        </li> :
        null}
      {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Cologne.toLowerCase()).length ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{Places.Cologne}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Cologne.toLowerCase())
              .map((favorite) => (
                <FavoriteCard content={favorite} key={favorite.id} />
              ))}
          </div>
        </li> :
        null}
      {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Dusseldorf.toLowerCase()).length ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{Places.Dusseldorf}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Dusseldorf.toLowerCase())
              .map((favorite) => (
                <FavoriteCard content={favorite} key={favorite.id} />
              ))}
          </div>
        </li> :
        null}
      {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Hamburg.toLowerCase()).length ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{Places.Hamburg}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favorites.filter((favorite) => favorite.city.name.toLowerCase() === Places.Hamburg.toLowerCase())
              .map((favorite) => (
                <FavoriteCard content={favorite} key={favorite.id} />
              ))}
          </div>
        </li> :
        null}
    </ul>
  );
}

export default FavoriteCardList;
