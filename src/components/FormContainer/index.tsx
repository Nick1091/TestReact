import { useRef, useState } from 'react';
import arrow from '../../assets/icons/Arrow_down.svg';
import { RadioMultiselect } from '../RadioMultiselect';
import styles from './FormContainer.module.scss';

export function FormContainer() {
  const [isOpenName, setIsOpenName] = useState(false);
  const [Name, setName] = useState('Name');
  const textInput = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!!textInput.current) {
      setName(textInput.current.value === '' ? 'Name' : textInput.current.value);
    }
  };
  const handleClick = () => {
    if (!!textInput.current) {
      textInput.current.focus();
    }
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleChange(e)}>
      <RadioMultiselect />
      <div className={styles.dropdown__textfield}>
        <div
          role="button"
          aria-hidden="true"
          className={styles.selectBox}
          onClick={() => setIsOpenName(!isOpenName)}
        >
          <p>{Name}</p>
          <img className={isOpenName ? styles.img_rotate : ''} src={arrow} alt="Arrow down" />
        </div>
        <div className={styles.textfield}>
          <div className={isOpenName ? styles.textfield__visible : styles.textfield__hidden}>
            <input
              className={styles.text_input}
              type="text"
              ref={textInput}
              onClick={handleClick}
              placeholder="Start type a name"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
