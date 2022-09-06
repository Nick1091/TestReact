import React from 'react';
import { IArtsData } from '../../interfaces';
import styles from './Picture.module.scss';
import DeleteIcon from '../../assets/icons/Delete.svg';

const Picture: React.FC<IArtsData> = ({ pictures }) => {
  return (
    <div className={styles.picture__container}>
      <button onClick={(e) => e.preventDefault()}>
        <img src={DeleteIcon} alt="Delete" />
      </button>
      <div className={styles.picture__painting}>
        <img className={styles.painting} src={pictures.painting} alt={pictures.title} />
      </div>
      <div className={styles.picture__description}>
        <img className={styles.picture__photo} src={pictures.photo} alt={pictures.author} />
        <div className={styles.picture__titles}>
          <p className={styles.picture__author}>{pictures.author}</p>
          <p className={styles.picture__title}>{pictures.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Picture;
