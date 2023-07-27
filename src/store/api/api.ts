import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICharacterCard from './../../interfaces/ICharacterCard';
import ICharacterModalCard from './../../interfaces/ICharacterModalCard';

interface GetCardsRequest {
  results: ICharacterCard[];
}
const BaseUrl = 'https://rickandmortyapi.com/api';
const CharacterUrl = '/character';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (build) => ({
    getAllCards: build.query<GetCardsRequest, string>({
      query: (search = '') => ({
        url: CharacterUrl,
        params: {
          name: search,
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
