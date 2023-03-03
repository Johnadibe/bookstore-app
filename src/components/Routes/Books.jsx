import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Book';
import Form from '../Form';
import { getBooks } from '../../redux/books/booksSlice';

function Books() {
  const booksArr = useSelector((state) => state.books.books);
  const booksStatus = useSelector((state) => state.books.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [booksStatus, dispatch]);

  return (
    <div className="booklists">
      <h1>Lists of Books</h1>
      {booksArr.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default Books;
