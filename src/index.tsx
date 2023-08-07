import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS, REVIEWS, ALLOFFERS } from './mocks/offers';
import { POINTS, CITY } from './mocks/points';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={OFFERS}
      points={POINTS}
      city={CITY}
      reviews={REVIEWS}
      allOffers={ALLOFFERS}
    />
  </React.StrictMode>
);
