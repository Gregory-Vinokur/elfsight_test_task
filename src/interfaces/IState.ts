import ICharacterCard from './ICharacterCard';

export interface IState {
  search: {
    searchTerm: string;
    searchBarValue: string;
    searchResults: ICharacterCard[];
    isLoading?: boolean;
  }
}
