import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './SearchBar/SearchBarSlice';
import { rickAndMortyApi } from './api/api';
import paginationReducer from './Pagination/PaginationSlice';
import filterReducer from './Filter/FilterSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    pagination: paginationReducer,
    filter: filterReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), rickAndMortyApi.middleware],
});

export default store;
