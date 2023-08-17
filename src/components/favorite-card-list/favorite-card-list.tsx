import FavoriteCard from '../favorite-card/favorite-card';
import { Places } from '../../const';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';

function FavoriteCardList(): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  const handleCardHover = (offerId: string) => {
    setActiveCard(offerId);
  };
  const favorites = useAppSelector(({ offerList }) => offerList).filter((offer: { isFavorite: boolean}) => offer.isFavorite);
  return (
    <ul className="favorites__list">
      {Object.values(Places).map((city) =>
        favorites.filter(
          (favorite) =>
            favorite.city.name.toLowerCase() === city.toLowerCase()
        ).length ? (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {favorites
                  .filter(
                    (favorite) =>
                      favorite.city.name.toLowerCase() === city.toLowerCase()
                  )
                  .map((favorite) => (
                    <FavoriteCard
                      content={favorite}
                      key={favorite.id}
                      onMouseOver={() => handleCardHover(favorite.id)}
                      active={activeCard === favorite.id}
                    />
                  ))}
              </div>
            </li>
          ) : null
      )}
    </ul>
  );
}

export default FavoriteCardList;
