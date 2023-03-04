import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aAIHCNfRPNuALA0JXOrN/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await fetch(API);
    return response.json();
  } catch (error) {
    return error.message;
  }
});

const addBooksToAPI = async (book) => {
  await fetch(API, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const removeBooksFromAPI = async (id) => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE',
  });
};

const initialState = {
  books: [],
  status: 'ídle',
  isError: null,
};

/* eslint-disable no-param-reassign */
export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
      addBooksToAPI(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
      removeBooksFromAPI(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        const newArr = [];
        Object.keys(action.payload).forEach((id) => {
          const bookOBj = {
            item_id: id,
            title: action.payload[id][0].title,
            category: '',
            author: action.payload[id][0].author,
          };
          newArr.push(bookOBj);
        });
        state.books = [...newArr];
        newArr.status = 'succeeded';
      })
      .addCase(getBooks.rejected, (state) => {
        state.status = 'failed';
        state.books = [];
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
