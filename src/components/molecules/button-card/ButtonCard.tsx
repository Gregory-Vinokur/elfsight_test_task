import Button from '../../atoms/button/Button';
import React from 'react';
import styles from './ButtonCard.module.scss';
import Span from './../../atoms/typography/Span';
import Icon from './../../atoms/icon/Icon';

type ButtonCardProps = {
  source?: string;
  counter: number | string;
  className?: string;
};

const ButtonCard = ({ source, counter, className }: ButtonCardProps) => {
  return (
    <Button className={styles.cardButton}>
      {source && <Icon source={source} />}
      <Span className={className ? className : styles.cardButtonCounter}>
        {counter}
      </Span>
    </Button>
  );
};

export default ButtonCard;
