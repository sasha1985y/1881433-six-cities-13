import { OfferType, AllOffer } from '../types/offer-type';

const offerDescription = {
  description: 'Oh my GOD!!!.',
  bedrooms: 1,
  goods: [
    'Heating',
    'Kitchen',
    'Fridge',
    'Towels',
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: '/img/avatar-angelina.jpg',
    isPro: true
  },
  images: [
    'https://loremflickr.com/320/240?lock=1',
    'https://loremflickr.com/320/240?lock=2',
    'https://loremflickr.com/320/240?lock=3',
    'https://loremflickr.com/320/240?lock=4',
    'https://loremflickr.com/320/240?lock=5',
    'https://loremflickr.com/320/240?lock=6',
  ],
  maxAdults: 20
};

const OFFERS: OfferType[] = [
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

const ALLOFFERS: AllOffer[] = OFFERS.map((offer) => ({ ...offer, ...offerDescription }));

const REVIEWS = [
  {
    id: '0fe2dc82-8f3d-56b2-9551-ca8048a57bff',
    comment:
      'I stayed here for one night and it was an unpleasant experience.',
    date: '2022-04-24T02:35:41.185Z',
    rating: 1,
    user: {
      name: 'Aaron Howell',
      avatarUrl: 'https://i.pravatar.cc/127',
      isPro: true,
    },
  },
  {
    id: '36de3e81-5ebc-539d-bf42-80362ac8c2f0',
    comment:
      'Wow Great!!!.',
    date: '2023-06-05T04:44:04.445Z',
    rating: 2,
    user: {
      name: 'Rachel Little',
      avatarUrl: 'https://i.pravatar.cc/118',
      isPro: false,
    },
  },
  {
    id: 'b07f36e5-e183-51e7-9a18-3bc2cb13b840',
    comment:
      'What an amazing view!',
    date: '2021-11-30T04:35:46.200Z',
    rating: 5,
    user: {
      name: 'Francis Hubbard',
      avatarUrl: 'https://i.pravatar.cc/228',
      isPro: false,
    },
  },
  {
    id: '3b3c662f-6ce1-545b-8b7f-9f0f362d920c',
    comment:
      'Home is amazing.The views of My Vesuvius',
    date: '2021-05-02T21:19:04.666Z',
    rating: 4,
    user: {
      name: 'Sadie Aguilar',
      avatarUrl: 'https://i.pravatar.cc/144',
      isPro: false,
    },
  },
];

export {
  OFFERS,
  ALLOFFERS,
  REVIEWS
};
