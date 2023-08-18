import { Helmet } from 'react-helmet-async';
import AppHeader from '../../components/app-header/app-header';
import FavoriteCardList from '../../components/favorite-card-list/favorite-card-list';
import { useAppSelector } from '../../hooks';

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(({ offerList }) => offerList);
  const favoriteOffers = useAppSelector(({ offerList }) => offerList).filter((offer: { isFavorite: boolean}) => offer.isFavorite);
  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <AppHeader
        offers = {offers}
        isAuthorization
      />
      {favoriteOffers.length === 0 ?
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteCardList />
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
