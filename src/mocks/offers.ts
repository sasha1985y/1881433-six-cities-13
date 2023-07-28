import { OfferType } from '../types/offer-type';

export const offers: OfferType[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    previewImage: 'https://13.design.pages.academy/static/hotel/7.jpg',
    city: {
      name: 'Paris',
      location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 }
    },
    location: { latitude: 48.868610000000004, longitude: 2.342499, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 3.9,
  },
  {
    id: '8f08224f-69c5-4607-b071-851d0899c5f7',
    title: 'The house among olive ',
    type: 'hotel',
    price: 205,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Cologne',
      location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 }
    },
    location: { latitude: 50.934361, longitude: 6.943974, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 1.6,
  },
  {
    id: 'b47ccc24-2ade-4ae7-b511-5f31fc69760e',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 198,
    previewImage: 'https://13.design.pages.academy/static/hotel/6.jpg',
    city: {
      name: 'Brussels',
      location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 }
    },
    location: { latitude: 50.849557, longitude: 4.374696999999999, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 1.8,
  },
  {
    id: '35c70a76-3e30-4e5a-b261-8d187029155d',
    title: 'House in countryside',
    type: 'hotel',
    price: 344,
    previewImage: 'https://13.design.pages.academy/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 }
    },
    location: { latitude: 52.36354, longitude: 4.889976, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 3,
  },
];
