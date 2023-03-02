import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const book = {
      item_id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h3 className="add-new-book">Add new Book</h3>
      <form className="form">
        <input
          type="text"
          className="form__input"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </form>
      <button
        type="button"
        className="btn-add"
        value
        onClick={handleAddBook}
      >
        Add Book
      </button>
    </>
  );
}

export default Form;
