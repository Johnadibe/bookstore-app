import React from 'react';

function Form() {
  return (
    <>
      <h3 className="add-new-book">Add new Book</h3>
      <form className="form">
        <input type="text" className="form__input" placeholder="Book title" />
        <input type="text" className="form__input" placeholder="Book author" />
      </form>
      <button type="button" className="btn-add">Add Book</button>
    </>
  );
}

export default Form;
