import { useEffect, useState } from 'react';
import { ArtData } from '../../common/index';
import Picture from '../Pictures';
import { Pagination } from '../Pagination';
import { FormContainer } from '../FormContainer';
import styles from './Main.module.scss';

export function Main() {
  const itemsAtPage = 4;
  const [Data, setArtData] = useState(ArtData.slice(0, itemsAtPage));
  const [ArtPage, setArtPAge] = useState(0);

  useEffect(() => {
    const data = ArtData.slice(ArtPage * itemsAtPage, ArtPage * itemsAtPage + itemsAtPage);
    setArtData(data);
  }, [ArtPage]);

  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={[styles.main__header, styles.main__title].join(' ')}>
          <h1 className={styles.main__header_title}>Artworks</h1>
          <p className={styles.main__header_count}>{ArtData.length}</p>
        </div>
        <FormContainer />
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
