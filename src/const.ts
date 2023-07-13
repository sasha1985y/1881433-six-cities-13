export const Setting = {
  FavoritesCount: 4,
  PlacesFound: 311
};

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Main = '/',
  NotFound = '/not-found-screen',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
