import React, { useEffect } from 'react';
import styles from './SearchBar.module.scss';
import search from '../../../assets/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchBarValue,
  setSearchTerm,
} from '../../../store/SearchBar/SearchBarSlice';
import { IState } from '../../../interfaces/IState';
import Input from '../../atoms/input/Input';
import Icon from './../../atoms/icon/Icon';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchTerm, searchBarValue } = useSelector(
    (state: IState) => state.search
  );

  useEffect(() => {
    dispatch(setSearchBarValue(searchTerm));
  }, [dispatch, searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchBarValue(event.target.value));
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (searchBarValue !== searchTerm) {
      dispatch(setSearchTerm(searchBarValue));
    }
  };

  return (
    <form className={styles.searchBar} onSubmit={handleFormSubmit}>
      <Icon source={search} />
      <Input
        className={styles.searchInput}
        type="text"
        value={searchBarValue}
        onChange={handleInputChange}
        placeholder="Search by name"
      />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
