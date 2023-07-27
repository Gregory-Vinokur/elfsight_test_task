import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPaginationState {
  currentPage: number
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1
  } as IPaginationState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    }
  },
});

export const { setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;