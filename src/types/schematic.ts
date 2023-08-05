import { AppRoute, OfferСatalogueType } from '../const';

export type SchematicClassOptions = Record<AppRoute, {
  pageClass:string;
  mainClass:string;
  isNavVisible: boolean;
}>

export type СatalogueClassOptions = Record<OfferСatalogueType,{
  placeListClass: string;
  placeCardClass: string;
  placeCardImageWrapperClass: string;
  imageWith: number;
  imageHeight: number;
  placeCardInfoClass: string;
  placeCardBookmarkButtonClass: string;
}>
