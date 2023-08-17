import {createReducer} from '@reduxjs/toolkit';
import { selectCity, pushToOfferList } from './actions';
import { AllOffer, OfferType } from '../types/offer-type';
import { CITIES } from '../const';
import { OFFERS, ALLOFFERS } from '../mocks/offers';

const [Paris] = CITIES;

type State = {
  city: string;
  offerList: OfferType[];
  allOfferList: AllOffer[];
}

const initState: State = {
  city: Paris,
  offerList: OFFERS.filter(({ city }) => city.name === Paris),
  allOfferList: ALLOFFERS.filter(({ city }) => city.name === Paris)
};

const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(pushToOfferList, (state, action) => {
      state.offerList = action.payload;
    });
});

export { reducer };
