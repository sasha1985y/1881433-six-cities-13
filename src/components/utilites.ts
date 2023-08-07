import {AppRoute, SchematicClassOptions} from '../const';
import dayjs from 'dayjs';

const SHORT_DATE = 'MMM D';
const FULL_DATE = 'YYYY-MM-DD';

const getShortDate = (date: string): string => date ? dayjs(date).format(SHORT_DATE) : '';
const getFullDate = (date: string): string => date ? dayjs(date).format(FULL_DATE) : '';
const getSchematicClassOptions = (pathname: string) => {
  if (pathname.includes(AppRoute.Offer)) {
    return SchematicClassOptions[ AppRoute.Offer ];
  }
  switch (pathname) {
    case AppRoute.Main:
    case AppRoute.Favorites:
    case AppRoute.Login: return SchematicClassOptions[ pathname ];
    default: return SchematicClassOptions[ AppRoute.NotFound ];
  }
};

export {
  getSchematicClassOptions,
  getShortDate,
  getFullDate
};
