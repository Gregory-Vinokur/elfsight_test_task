import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICharacterCard from './../../interfaces/ICharacterCard';
import ICharacterModalCard from './../../interfaces/ICharacterModalCard';

interface GetCardsRequest {
  info: {
    pages: number;
  };
  results: ICharacterCard[];
}
const BaseUrl = 'https://rickandmortyapi.com/api';
const CharacterUrl = '/character';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (build) => ({
    getAllCards: build.query<GetCardsRequest, { search: string; page: number; status: string; species: string; gender: string; type: string }>({
      query: ({ search = '', page = 1, status = '', species = '', gender = '', type = '' }) => ({
        url: CharacterUrl,
        params: {
          name: search,
          page,
          status,
          species,
          gender,
          type
        },
      }),
    }),
    getCard: build.query<ICharacterModalCard, number>({
      query: (id) => ({
        url: `${CharacterUrl}/${id.toString()}`,
      }),
    }),
  }),
});


export const { useGetAllCardsQuery, useGetCardQuery, useLazyGetCardQuery } =
  rickAndMortyApi;
