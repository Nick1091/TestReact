import styles from './RadioInput.module.scss';
type InputDataType = {
  idx: number;
  item: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  Category: string;
};
export const RadioInput: React.FC<InputDataType> = ({ idx, item, setCategory, Category }) => {
  return (
    <>
      <input
        className={styles.radio_input}
        type="radio"
        id={idx + 'id'}
        checked={Category === item}
        onChange={() => setCategory(item)}
      />
      <label htmlFor={idx + 'id'}>{item}</label>
    </>
  );
};
