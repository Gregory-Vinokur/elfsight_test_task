import React from 'react';
import styles from './Label.module.scss';

type LabelProps = {
  children?: React.ReactNode;
};

const Label = ({ children }: LabelProps) => {
  return <label className={styles.label}>{children}</label>;
};

export default Label;
