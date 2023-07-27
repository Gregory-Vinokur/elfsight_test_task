import React from 'react';
import styles from './Error.module.scss';

type ErrorProps = {
  error: string;
};

const Error = ({ error }: ErrorProps) => {
  return <div className={styles.error}>{error}</div>;
};

export default Error;
