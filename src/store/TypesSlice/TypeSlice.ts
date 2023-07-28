import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITypesState {
  typesArr: string[]
}

const typesSlice = createSlice({
  name: 'types',
  initialState: {
    typesArr: []
  } as ITypesState,
  reducers: {
    setTypes(state, action: PayloadAction<string[]>) {
      state.typesArr = action.payload;
    }
  },
});

export const { setTypes } = typesSlice.actions;

export default typesSlice.reducer;