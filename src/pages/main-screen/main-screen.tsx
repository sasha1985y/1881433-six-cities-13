import { Helmet } from 'react-helmet-async';
import CardList from '../../components/card-list/card-list';
import { OfferType } from '../../types/offer-type';
import AppHeader from '../../components/app-header/app-header';
import { AppRoute } from '../../const';
import AppNavItem from '../../components/app-nav-item/app-nav-item';

type MainScreenProps = {
  offers: OfferType[];
}

function MainScreen({
  offers
}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <AppHeader
        offers={offers}
        isAuthorization
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <AppNavItem title='Paris' path={AppRoute.NotFound} isActive />
              <AppNavItem title='Cologne' path={AppRoute.NotFound} />
              <AppNavItem title='Brussels' path={AppRoute.NotFound} />
              <AppNavItem title='Amsterdam' path={AppRoute.NotFound} />
              <AppNavItem title='Hamburg' path={AppRoute.NotFound} />
              <AppNavItem title='Dusseldorf' path={AppRoute.NotFound} />
            </ul>
          </section>
        </div>
        {offers.length === 0 ?
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div> :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">888 places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <CardList offers={offers} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>}
      </main>
    </div>

  );
}

export default MainScreen;
