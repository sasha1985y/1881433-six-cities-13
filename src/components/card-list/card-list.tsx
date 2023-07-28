import {useState} from 'react';
import { OfferType } from '../../types/offer-type';
import Card from '../card/card';

type CardListProps = {
  offers: OfferType[];
}


function CardList({ offers }: CardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  const handleCardHover = (offerId: string) => {
    setActiveCard(offerId);
  };
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <Card content={offer} key={offer.id}
          onMouseOver={() => handleCardHover(offer.id)}
          active={activeCard === offer.id}
        />
      ))}
    </div>
  );
}

export default CardList;
