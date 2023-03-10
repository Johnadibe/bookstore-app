import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories.length === 0) {
        state.categories.push('Under Construction');
      }
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
