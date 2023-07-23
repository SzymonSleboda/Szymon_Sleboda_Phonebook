import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div className={s.filterBox}>
      <p className={s.filterTitle}>Find contacts by name</p>
      <input
        className={s.filterInput}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
