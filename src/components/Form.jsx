import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import '../styles/Form.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="add-book">
      <h3 className="add-new-book">Add new Book</h3>
      <form className="form">
        <input
          type="text"
          className="form__input"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className="form__input"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label htmlFor="categories">
          <select
            className="categories_select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option> Category </option>
            <option value="Fiction"> Fiction </option>
            <option value="Action"> Action </option>
            <option value="Suspense"> Suspense </option>
            <option value="Programming">Computer Programming</option>
            <option value="Adventure"> Adventure </option>
            <option value="Science Fiction"> Science Fiction </option>
            <option value="History"> History </option>
            <option value="Thriller"> Thriller </option>
            <option value="Economics"> Economics </option>
          </select>
        </label>
        <button
          type="button"
          className="btn-add"
          value
          onClick={handleAddBook}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
