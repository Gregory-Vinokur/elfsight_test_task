import { useDispatch, useSelector } from 'react-redux';
import SelectWithLabel from '../../molecules/select-with-label/SelectWithLabel';
import styles from './Filter.module.scss';
import { IState } from './../../../interfaces/IState';
import {
  setGender,
  setSpecies,
  setStatus,
} from '../../../store/Filter/FilterSlice';
import {
  setSearchBarValue,
  setSearchTerm,
} from '../../../store/SearchBar/SearchBarSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { status, species, gender } = useSelector(
    (state: IState) => state.filter
  );

  const changeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatus(event.target.value));
  };

  const changeSpecies = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSpecies(event.target.value));
  };

  const changeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGender(event.target.value));
  };

  const resetFilters = () => {
    dispatch(setStatus(''));
    dispatch(setSpecies(''));
    dispatch(setGender(''));
    dispatch(setSearchBarValue(''));
    dispatch(setSearchTerm(''));
  };

  return (
    <div className={styles.filters}>
      <SelectWithLabel
        options={[
          { value: 'option1', label: 'Alive' },
          { value: 'option2', label: 'Dead' },
          { value: 'option3', label: 'Unknown' },
        ]}
        text="Status:"
        selectValue={status}
        onChange={changeStatus}
      />
      <SelectWithLabel
        options={[
          { value: 'option1', label: 'Human' },
          { value: 'option2', label: 'Humanoid' },
          { value: 'option3', label: 'Alien' },
          { value: 'option4', label: 'Unknown' },
        ]}
        text="Species:"
        selectValue={species}
        onChange={changeSpecies}
      />
      <SelectWithLabel
        options={[
          { value: 'option1', label: 'Male' },
          { value: 'option2', label: 'Female' },
          { value: 'option3', label: 'Genderless' },
          { value: 'option4', label: 'Unknown' },
        ]}
        text="Gender:"
        selectValue={gender}
        onChange={changeGender}
      />
      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
};

export default Filter;
