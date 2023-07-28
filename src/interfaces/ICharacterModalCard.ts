import ICharacterCard from './ICharacterCard';

export default interface ICharacterModalCard extends ICharacterCard {
  gender: string;
  episode?: string[];
  created?: string;
}