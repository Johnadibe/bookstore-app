import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction' // eslint-disable-line no-param-reassign
        ? 'Under construction'
        : state.categories;
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
