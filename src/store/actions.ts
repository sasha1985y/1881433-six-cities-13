import { createAction } from '@reduxjs/toolkit';
import { OFFERS } from '../mocks/offers';

const selectCity = createAction('selectCity', (city: string) => ({
  payload: city
}));

const pushToOfferList = createAction('pushToOfferList', (offerCity: string) => ({
  payload: OFFERS.filter(({ city }) => city.name === offerCity)
}));

export {
  selectCity,
  pushToOfferList
};
