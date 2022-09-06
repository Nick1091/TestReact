import { useState } from 'react';
import arrow from '../../assets/icons/Arrow_down.svg';
import { RadioInput } from '../RadioInput';
import styles from './RadioMultiselect.module.scss';

const inputsData = ['Sculpture', 'Architecture', 'Landscape', 'Graphic art', 'Portrait'];

export const RadioMultiselect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Category, setCategory] = useState('Category');

  return (
    <div className={styles.radio__multiselect}>
      <div
        role="button"
        aria-hidden="true"
        className={styles.selectBox}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{Category}</p>
        <img className={isOpen ? styles.img_rotate : ''} src={arrow} alt="Arrow down" />
      </div>
      <div className={styles.radio__overSelect}>
        <div className={isOpen ? styles.radios__visible : styles.radios__hide}>
          <div className={styles.radios__overlay}>
            {inputsData.map((item, idx) => {
              return (
                <RadioInput
                  key={idx}
                  idx={idx}
                  item={item}
                  setCategory={setCategory}
                  Category={Category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
