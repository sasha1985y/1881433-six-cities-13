import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS, REVIEWS, ALLOFFERS } from './mocks/offers';
import { POINTS, CITY } from './mocks/points';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
        offers={OFFERS}
        points={POINTS}
        city={CITY}
        reviews={REVIEWS}
        allOffers={ALLOFFERS}
      />
    </Provider>
  </React.StrictMode>
);
