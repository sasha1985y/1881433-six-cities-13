import { City } from '../types/offer-type';
import { Points } from '../types/map';
const POINTS: Points = [
  {
    title: 'Lebanon North Korea',
    lat: 52.3909553943508,
    lng: 4.85309666406198
  },
  {
    title: 'St. Lucia',
    lat: 52.3609553943508,
    lng: 4.85309666406198
  },
  {
    title: 'Lithuania Sudan',
    lat: 52.3909553943508,
    lng: 4.929309666406198
  },
  {
    title: 'Gabon Denmark',
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
