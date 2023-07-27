import React, { useState } from 'react';
import styles from './CardHomePage.module.scss';
import ButtonCard from '../../molecules/button-card/ButtonCard';
import CardTemplate from '../../templates/Card/CardTemplate';
import ModalCard from './../ModalCard/ModalCard';
import Blackout from '../../../layouts/blackout/Blackout';
import ICharacterCard from './../../../interfaces/ICharacterCard';
import { useLazyGetCardQuery } from '../../../store/api/api';
import ICharacterModalCard from '../../../interfaces/ICharacterModalCard';

const Card = ({
  id,
  name,
  status,
  species,
  image,
  gender,
  location,
}: ICharacterCard) => {
  const [selectedCard, setSelectedCard] = useState<ICharacterModalCard | null>(
    null
  );
  const [cardId, setCardId] = useState<number | null>(null);
  const [searchPhotoById] = useLazyGetCardQuery();

  const handleCardClick = async (card: ICharacterModalCard | null) => {
    setSelectedCard(card);
    const response = await searchPhotoById(id ?? '');
    const selectedCardId = response.data?.id ?? null;
    setCardId(selectedCardId);
  };

  return (
    <>
      <CardTemplate
        onClick={() =>
          handleCardClick({
            id,
            name,
            status,
            species,
            image,
            gender,
            location,
          })
        }
      >
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image}></img>
        </div>
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>{name}</h2>
          <div className={styles.cardButtons}>
            <ButtonCard counter={status} />
            <ButtonCard counter={species} />
            <ButtonCard counter={gender} />
          </div>
          <div className={styles.cardFooter} role="status">
            <span>Last location: {location.name}</span>
          </div>
        </div>
      </CardTemplate>
      {selectedCard && (
        <>
          <Blackout onClose={() => setSelectedCard(null)} />
          <ModalCard
            id={cardId}
            card={selectedCard}
            onClose={() => setSelectedCard(null)}
          />
        </>
      )}
    </>
  );
};

export default Card;
