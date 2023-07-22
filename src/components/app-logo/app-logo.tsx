import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type AppLogoProps = {
  isActive ? : boolean;
}

function AppLogo({ isActive }: AppLogoProps): JSX.Element {
  return (
    <Link to={AppRoute.Main}
      className={isActive ? 'header__logo-link header__logo-link--active' : 'header__logo-link'}
    >
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default AppLogo;
