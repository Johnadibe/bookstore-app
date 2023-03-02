import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book(props) {
  const { id, title, author } = props;

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-card">
      <div className="book-card__info">
        <h3 className="book__card__title">
          {title}
        </h3>
        <p className="book__card__author">
          {author}
        </p>
      </div>
      <div className="book-card__actions">
        <button
          type="button"
          onClick={handleRemoveBook}
          className="btn-remove"
        >
          Remove Book
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
