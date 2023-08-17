import { useAppDispatch } from '../../hooks/index.ts';
import { selectCity, pushToOfferList } from '../../store/actions';

type citiesListProps = {
  cities: string[];
}

export default function CitiesList({ cities }: citiesListProps) {
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      { cities.map((city) => (
        <li key={ city } className="locations__item">
          <a
            className="locations__item-link tabs__item"
            href="#"
            onClick={ () => {
              dispatch(selectCity(city));
              dispatch(pushToOfferList(city));
            }}
          >
            <span>{ city }</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
