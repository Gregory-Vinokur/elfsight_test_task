import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
  return (
    <div className={styles.indicator} role="progressbar">
      <div className={styles.spinner}></div>
      <div className={styles.text}>Progressing...</div>
    </div>
  );
};

export default ProgressBar;
