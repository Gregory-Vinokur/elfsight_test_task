import React from 'react';
import styles from './Icon.module.scss';

type IconProps = {
  source: string;
};

const Icon = ({ source }: IconProps) => {
  return <img className={styles.icon} src={source}></img>;
};

export default Icon;
