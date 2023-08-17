import { Helmet } from 'react-helmet-async';
import CardList from '../../components/card-list/card-list';
import AppHeader from '../../components/app-header/app-header';
import { MapClassOptions, MapType, CITIES } from '../../const';
import Map from '../../components/map/map';
import { CardType } from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';


function MainScreen(): JSX.Element {
  const pickedCityName = useAppSelector(({ city }) => city);
  const pickedCityOffers = useAppSelector(({ offerList }) => offerList);
  const offersMarkers
    = pickedCityOffers.map(({ title, location }) => ({
      title,
      lat: location.latitude,
      lng: location.longitude
    }));

  const pickedCityOffersCount = pickedCityOffers.length;
  const [ offer ] = pickedCityOffers;
  const pickedCity = offer?.city;
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <AppHeader
        isAuthorization
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={ CITIES } />
          </section>
        </div>
        {pickedCityOffers.length === 0 ?
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
                <b className="places__found">{ pickedCityOffersCount ? pickedCityOffersCount : 'No' } places to stay in { pickedCityName }</b>
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
                { !!pickedCityOffersCount &&
              <CardList
                offers={ pickedCityOffers }
                citiesOrNear={CardType.Cities}
                classOrEmpty={CardType.TabsContent}
              /> }
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    points = { offersMarkers }
                    city={ pickedCity }
                    selectedPoint={undefined}
                    mapClass={ MapClassOptions[ MapType.Main ] }
                  />
                </section>
              </div>
            </div>
          </div>}
      </main>
    </div>

  );
}

export default MainScreen;
