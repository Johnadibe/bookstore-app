import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book';
import Form from '../Form';

function Books() {
  const books = useSelector((state) => state.books.books);
  return (
    <div className="booklists">
      {books.length > 0 ? books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      )) : <h3 className="no-books">No books found</h3>}
      <Form />
    </div>
  );
}

export default Books;
