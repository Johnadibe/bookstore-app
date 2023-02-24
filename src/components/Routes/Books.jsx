import React, { useState } from 'react';
import Book from '../Book';
import Form from '../Form';

function Books() {
  const [books] = useState([
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
  ]);
  return (
    <div className="booklists">
      {
        books.map((book) => (<Book key={book.id} title={book.title} author={book.author} />
        ))
}
      <Form />
    </div>
  );
}

export default Books;
