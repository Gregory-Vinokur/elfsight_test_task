import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilterState {
  status: string;
  species: string;
  gender: string;
  type: string;
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    status: '',
    species: '',
    gender: '',
    type: ''
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
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    }
  },
});

export const { setStatus, setSpecies, setGender, setType } = filterSlice.actions;

export default filterSlice.reducer;