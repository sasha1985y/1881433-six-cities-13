import { NavLink } from 'react-router-dom';

type AppNavItemProps = {
  title: string;
  path: string;
  isActive ?: boolean;
}

function AppNavItem({ title, path, isActive }: AppNavItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <NavLink to={path}
        className={isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default AppNavItem;
