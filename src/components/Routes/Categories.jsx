import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categorySlice';

function Categories() {
  const status = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const statusCheck = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <button
        type="button"
        className="btn-check-status"
        onClick={statusCheck}
      >
        Check Status
      </button>
      <h4>{status}</h4>
    </div>

  );
}

export default Categories;
