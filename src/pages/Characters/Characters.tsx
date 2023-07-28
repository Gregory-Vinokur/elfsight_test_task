import { useEffect } from 'react';
import styles from './Characters.module.scss';
import Card from '../../components/organisms/CardHomePage/CardHomePage';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import Header from '../../components/molecules/header/Header';
import ProgressBar from '../../components/molecules/progress-bar/ProgressBar';
import { useSelector } from 'react-redux';
import { useGetAllCardsQuery } from '../../store/api/api';
import { IState } from '../../interfaces/IState';
import Pagination from './../../components/organisms/Pagination/Pagination';
import Filter from './../../components/organisms/Filter/Filter';

const Characters = () => {
  const { searchTerm } = useSelector((state: IState) => state.search);
  const { currentPage } = useSelector((state: IState) => state.pagination);
  const { status } = useSelector((state: IState) => state.filter);
  const { species } = useSelector((state: IState) => state.filter);
  const { gender } = useSelector((state: IState) => state.filter);
  const { data, isFetching } = useGetAllCardsQuery({
    search: searchTerm,
    page: currentPage,
    status,
    species,
    gender,
  });

  useEffect(() => {
    if (!isFetching && currentPage !== 1) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [currentPage, isFetching]);

  return (
    <>
      <Header title="Characters" />
      <SearchBar />
      <Filter />
      {isFetching && <ProgressBar />}
      {!isFetching && (
        <div data-testid="cards__container" className={styles.cardsContainer}>
          {data?.results.length === 0 ? (
            <p className={styles.noResultText}>No results</p>
          ) : (
            data?.results.map((card) => <Card {...card} key={card.id} />)
          )}
        </div>
      )}
      <Pagination totalPages={data?.info.pages} />
    </>
  );
};

export default Characters;
