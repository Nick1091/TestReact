/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ArtData } from '../../common/index';
import { useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
import Picture from '../Pictures';
import { Pagination } from '../Pagination';
import arrow from '../../assets/icons/Arrow_down.svg';

enum Categories {
  Sculpture = 'Sculpture',
  Architecture = 'Architecture',
  Landscape = 'Landscape',
  GraphicArt = 'Graphic art',
  Portrait = 'Portrait',
}

export function Main() {
  const itemsAtPage = 4;
  const [Data, setArtData] = useState(ArtData.slice(0, itemsAtPage));
  const [ArtPage, setArtPAge] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenName, setIsOpenName] = useState(false);
  const [Category, setCategory] = useState('Category');
  const [Name, setName] = useState('Name');
  const textInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const data = ArtData.slice(ArtPage * itemsAtPage, ArtPage * itemsAtPage + itemsAtPage);
    setArtData(data);
  }, [ArtPage]);

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
    <main className={styles.main}>
      <div className={styles.main__container}>
        {/*  */}
        <div className={[styles.main__header, styles.main__title].join(' ')}>
          <h1 className={styles.main__header_title}>Artworks</h1>
          <p className={styles.main__header_count}>{ArtData.length}</p>
        </div>
        {/*  */}
        <form className={styles.form} onSubmit={(e) => handleChange(e)}>
          <div className={styles.radio__multiselect}>
            {/* <div className="selectBox"> */}
            <div
              role="button"
              aria-hidden="true"
              className={styles.selectBox}
              // onChange={(event) => event.preventDefault()}
              onClick={() => setIsOpen(!isOpen)}
            >
              <p>{Category}</p>
              <img className={isOpen ? styles.img_rotate : ''} src={arrow} alt="Arrow down" />
            </div>
            <div className={styles.radio__overSelect}>
              <div className={isOpen ? styles.radios__visible : styles.radios__hide}>
                <div className={styles.radios__overlay}>
                  <input
                    type="radio"
                    id="one"
                    checked={Category === Categories.Sculpture}
                    onChange={() => setCategory('Sculpture')}
                  />
                  <label htmlFor="one">Sculpture</label>
                  <input
                    type="radio"
                    id="two"
                    checked={Category === Categories.Architecture}
                    onChange={() => setCategory('Architecture')}
                  />
                  <label htmlFor="two">Architecture</label>
                  <input
                    type="radio"
                    id="three"
                    checked={Category === Categories.Landscape}
                    onChange={() => setCategory('Landscape')}
                  />
                  <label htmlFor="three">Landscape</label>
                  <input
                    type="radio"
                    id="four"
                    checked={Category === Categories.GraphicArt}
                    onChange={() => setCategory('Graphic art')}
                  />
                  <label htmlFor="four">Graphic art</label>
                  <input
                    type="radio"
                    id="five"
                    checked={Category === Categories.Portrait}
                    onChange={() => setCategory('Portrait')}
                  />
                  <label htmlFor="five">Portrait</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dropdown__textfield}>
            <div
              role="button"
              aria-hidden="true"
              className={styles.selectBox}
              // onChange={(event) => event.preventDefault()}
              onClick={() => setIsOpenName(!isOpenName)}
            >
              <p>{Name}</p>
              <img className={isOpenName ? styles.img_rotate : ''} src={arrow} alt="Arrow down" />
            </div>
            <div className={styles.textfield}>
              <div className={isOpenName ? styles.textfield__visible : styles.textfield__hidden}>
                <input
                  type="text"
                  ref={textInput}
                  onClick={handleClick}
                  placeholder="Start type a name"
                />
              </div>
            </div>
          </div>
        </form>
        {/*  */}
        <div className={styles.main__pictures}>
          {Data.map((item) => {
            return <Picture key={item.id} pictures={item} />;
          })}
        </div>
        <Pagination
          setArtPAge={setArtPAge}
          ArtPage={ArtPage}
          pageCount={Math.ceil(ArtData.length / itemsAtPage)}
        />
      </div>
    </main>
  );
}
