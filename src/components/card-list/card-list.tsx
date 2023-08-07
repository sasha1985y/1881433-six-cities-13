import {useState} from 'react';
import { OfferType } from '../../types/offer-type';
import Card from '../card/card';

type CardListProps = {
  offers: OfferType[];
  citiesOrNear: string;
  classOrEmpty: string;
}

function CardList({ offers, citiesOrNear, classOrEmpty }: CardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  const handleCardHover = (offerId: string) => {
    setActiveCard(offerId);
  };

  return (
    <div className={`${citiesOrNear}__places-list places__list ${classOrEmpty}`}>
      {offers.map((offer) => (
        <Card content={offer} key={offer.id}
          onMouseOver={() => handleCardHover(offer.id)}
          active={activeCard === offer.id}
          citiesOrNear={citiesOrNear}
        />
      ))}
    </div>
  );
}

export default CardList;
