import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import AppPrivateRoute from '../app-private-route/app-private-route';
import { OfferType, City } from '../../types/offer-type';
import { Points } from '../../types/map';

type AppScreenProps = {
  offers: OfferType[];
  points: Points;
  city: City;
}

function App({
  offers,
  points,
  city
}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Favorites}
            element={
              <AppPrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesScreen
                  offers = {offers}
                />
              </AppPrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen offers={offers} />}
          />
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen
                offers = {offers}
                points = {points}
                city = {city}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
