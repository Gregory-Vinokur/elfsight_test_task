import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilterState {
  status: string;
  species: string;
  gender: string;
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    status: '',
    species: '',
    gender: ''
  } as IFilterState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setSpecies(state, action: PayloadAction<string>) {
      state.species = action.payload;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    }
  },
});

export const { setStatus, setSpecies, setGender } = filterSlice.actions;

export default filterSlice.reducer;