import { OfferType } from '../../types/offer-type';
import FavoriteCard from '../favorite-card/favorite-card';
import { Places } from '../../const';

type FavoriteCardListProps = {
  offers: OfferType[];
}

const cities = [
  { name: Places.Paris, id: 1 },
  { name: Places.Cologne, id: 2 },
  { name: Places.Brussels, id: 3 },
  { name: Places.Amsterdam, id: 4 },
  { name: Places.Hamburg, id: 5 },
  { name: Places.Dusseldorf, id: 6 }
];


function FavoriteCardList({ offers }: FavoriteCardListProps) {
  const favorites = offers.filter(({ isFavorite }) => isFavorite);
  return (
    <ul className="favorites__locations-list tabs__list">
      {cities.map((city) => {
        const cityFavorites = favorites.filter((favorite) => favorite.city.name.toLowerCase() === city.name.toLowerCase());
        return cityFavorites.length ? (
          <li key={city.id} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city.name}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {cityFavorites.map((favorite) => (
                <FavoriteCard content={favorite} key={favorite.id} />
              ))}
            </div>
          </li>
        ) : null;
      })}
    </ul>
  );
}

export default FavoriteCardList;
