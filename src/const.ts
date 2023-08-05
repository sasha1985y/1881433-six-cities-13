import { SchematicClassOptions, СatalogueClassOptions } from './types/schematic';

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

export enum Places {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

const SchematicClassOptions: SchematicClassOptions = {
  [ AppRoute.Favorites ]: {
    pageClass: 'page',
    mainClass: 'page__main--favorites',
    isNavVisible: true
  },
  [ AppRoute.Login ]: {
    pageClass: 'page--gray page--login',
    mainClass: 'page__main--login',
    isNavVisible: false
  },
  [ AppRoute.Main ] : {
    pageClass: 'page--gray page--main',
    mainClass: 'page__main--index',
    isNavVisible: true
  },
  [ AppRoute.NotFound ]: {
    pageClass: 'page--gray page--login',
    mainClass: 'page__main--login',
    isNavVisible: false
  },
  [ AppRoute.Offer ]: {
    pageClass: 'page',
    mainClass: 'page__main--offer',
    isNavVisible: true
  },
};

enum OfferСatalogueType {
  Main = 'main',
  Near = 'near',
  Favorites = 'favorites',
}

const СatalogueClassOptions: СatalogueClassOptions = {
  [ OfferСatalogueType.Main ]: {
    placeListClass: 'cities__places-list places__list tabs__content',
    placeCardClass: 'cities__card',
    placeCardImageWrapperClass: 'cities__image-wrapper',
    imageWith: 260,
    imageHeight: 200,
    placeCardInfoClass: '',
    placeCardBookmarkButtonClass: ''
  },
  [ OfferСatalogueType.Favorites ]: {
    placeListClass: 'favorites__places',
    placeCardClass: 'favorites__card',
    placeCardImageWrapperClass: 'favorites__image-wrapper',
    imageWith: 150,
    imageHeight: 110,
    placeCardInfoClass: 'favorites__card-info',
    placeCardBookmarkButtonClass: 'place-card__bookmark-button--active'
  },
  [ OfferСatalogueType.Near ]: {
    placeListClass: 'near-places__list places__list',
    placeCardClass: 'near-places__card place-card',
    placeCardImageWrapperClass: 'near-places__image-wrapper',
    imageWith: 260,
    imageHeight: 200,
    placeCardInfoClass: '',
    placeCardBookmarkButtonClass: 'place-card__bookmark-button--active'
  },
};

enum MapType {
  Main = 'main',
  Offer = 'offer',
}

const MapClassOptions = {
  [ MapType.Main ]: 'map-main',
  [ MapType.Offer ]: 'map-offer'
};

enum CardType {
  Cities = 'cities',
  Near = 'near',
  TabsContent = 'tabs__content',
  Empty = ''
}

export const COEF = 15;
export const OFFER_COEF = 30;

export {
  SchematicClassOptions,
  СatalogueClassOptions,
  OfferСatalogueType,
  MapType,
  MapClassOptions,
  CardType
};

