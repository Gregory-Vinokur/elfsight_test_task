export default interface ICharacterCard {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  location: {
    name: string
  };
}
