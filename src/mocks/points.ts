import { City } from '../types/offer-type';
import { Points } from '../types/map';
const POINTS: Points = [
  {
    title: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    lat: 52.3909553943508,
    lng: 4.85309666406198
  },
  {
    title: '8f08224f-69c5-4607-b071-851d0899c5f7',
    lat: 52.3609553943508,
    lng: 4.85309666406198
  },
  {
    title: 'b47ccc24-2ade-4ae7-b511-5f31fc69760e',
    lat: 52.3909553943508,
    lng: 4.929309666406198
  },
  {
    title: '35c70a76-3e30-4e5a-b261-8d187029155d',
    lat: 52.3809553943508,
    lng: 4.939309666406198
  }
];

const CITY: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.4,
    longitude: 4.9,
    zoom: 10
  }
};

export {
  POINTS,
  CITY,
};
