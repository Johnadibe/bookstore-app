import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import ProgressBar from './ProgressBar';
import Chapter from './Chapter';
import '../styles/Book.css';

function Book(props) {
  const {
    id, title, author, category,
  } = props;
  const limit = Math.floor(Math.random() * 100);

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <div className="book-card">
        <div className="book-card__info">
          <p className="category-name">{category}</p>
          <h3 className="book__card__title">
            {title}
          </h3>
          <p className="book__card__author">
            {author}
          </p>
          <div className="book-card__actions">
            <button type="button">Comment</button>
            <div className="divider" />
            <button
              type="button"
              onClick={handleRemoveBook}
              className="btn-remove"
            >
              Remove
            </button>
            <div className="divider" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="chapters">
          <ProgressBar limit={limit} />
          <Chapter />
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
