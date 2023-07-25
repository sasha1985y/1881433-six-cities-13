import { OfferType } from '../../types/offer-type';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import AppLogo from '../app-logo/app-logo';

type AppHeaderProps = {
  offers: OfferType[];
  isAuthorization: boolean;
}

function AppHeader({
  offers,
  isAuthorization
}: AppHeaderProps): JSX.Element {
  const favorites = offers.filter(({isFavorite}) => isFavorite);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <AppLogo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorization ?
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </Link>
                </li>
                : null}
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}>
                  <span className="header__signout">{isAuthorization ? 'Sign out' : 'Sign in' }</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}

export default AppHeader;
