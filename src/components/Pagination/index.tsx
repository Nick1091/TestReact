import ReactPaginate from 'react-paginate';
import { IPaginationProps } from '../../interfaces';
import styles from './Pagination.module.scss';

export const Pagination: React.FC<IPaginationProps> = ({ setArtPAge, ArtPage, pageCount }) => {
  const handlePageClick = (event: { selected: number }) => {
    setArtPAge(event.selected);
  };

  return (
    <div className={styles.pagination__container}>
      <div className={styles.pagination__wrapper}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName={styles.pagination}
          pageLinkClassName={styles.page_link}
          previousClassName={[styles.page_item, styles.page_prev_item].join(' ')}
          previousLinkClassName={styles.page_link}
          nextClassName={styles.page_item}
          nextLinkClassName={styles.page_link}
          activeClassName={styles.active}
          pageClassName={styles.page_item}
          breakClassName={styles.page_item}
          breakLinkClassName={styles.page_link}
        />
      </div>
    </div>
  );
};
