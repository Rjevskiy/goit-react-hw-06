import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

import "./SearchBox.css";

const SearchBox = () => {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts..."
    />
  );
};

export default SearchBox;



