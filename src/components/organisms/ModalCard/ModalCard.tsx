import ButtonCard from './../../molecules/button-card/ButtonCard';
import close from '../../../assets/close.svg';
import styles from './ModalCard.module.scss';
import Modal from '../../templates/Modal/Modal';
import ProgressBar from './../../molecules/progress-bar/ProgressBar';
import ICharacterModalCard from '../../../interfaces/ICharacterModalCard';

const ModalCard = ({
  id,
  card,
  onClose,
}: {
  id: number | null;
  card: ICharacterModalCard;
  onClose: () => void;
}) => {
  return (
    <Modal className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modalContent}>
        {!id && <ProgressBar />}
        {id && (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{card.name}</h2>
              <button className={styles.modalClose} onClick={onClose}>
                <img
                  src={close}
                  alt="close button"
                  className={styles.closeItem}
                />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.modalImage}
                  src={card.image}
                  alt={card.name}
                />
              </div>
              <div className={styles.cardButtons}>
                <ButtonCard
                  className={styles.cardButton}
                  counter={card.status}
                />
                <ButtonCard
                  className={styles.cardButton}
                  counter={card.species}
                />
                <ButtonCard
                  className={styles.cardButton}
                  counter={card.gender}
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <span>
                <b>Last location:</b> {card.location.name}
              </span>
              {card.type && (
                <span>
                  <b>Type:</b> {card.type}
                </span>
              )}
              {card.origin.name && (
                <span>
                  <b>Origin:</b> {card.origin?.name}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalCard;
