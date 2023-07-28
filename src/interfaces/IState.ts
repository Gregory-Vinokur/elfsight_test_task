import ICharacterCard from './ICharacterCard';

export interface IState {
  pagination: {
    currentPage: number;
  };
  filter: {
    status: string;
    species: string;
    gender: string;
    type: string;
  };
  search: {
    searchTerm: string;
    searchBarValue: string;
    searchResults: ICharacterCard[];
    isLoading?: boolean;
  };
  types: {
    typesArr: string[]
  }
}
