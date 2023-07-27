import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './SearchBar/SearchBarSlice';
import { rickAndMortyApi } from './api/api';

const store = configureStore({
  reducer: {
    search: searchReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), rickAndMortyApi.middleware],
});

export default store;
