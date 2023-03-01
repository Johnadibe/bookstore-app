import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter( // eslint-disable-line no-param-reassign
        (book) => book.id !== action.payload.id,
      );
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
