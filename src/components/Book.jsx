import React from 'react';
import { PropTypes } from 'prop-types';

function Book(props) {
  const { title, author } = props;
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
        <button type="button" className="btn-remove">Remove Book</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
