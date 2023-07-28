export default interface ICharacterCard {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  type: string;
  location: {
    name: string
  };
  origin: {
    name: string;
    url: string;
  };
}
