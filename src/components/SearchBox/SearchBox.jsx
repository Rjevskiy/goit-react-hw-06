import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setSearchType } from '../../redux/contactsSlice';

import './SearchBox.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const searchType = useSelector(state => state.contacts.searchType);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSearchTypeChange = (e) => {
    dispatch(setSearchType(e.target.value));
  };

  return (
    <div className="divSBox">
      <label className="search-label">Пошук контакту:</label>
      <label className="labelRadio">
        <input
          type="radio"
          value="name"
          name="searchType"
          checked={searchType === 'name'}
          onChange={handleSearchTypeChange}
        />
        Введіть ім'я
        <input
          type="radio"
          value="number"
          name="searchType"
          checked={searchType === 'number'}
          onChange={handleSearchTypeChange}
        />
        Введіть номер
      </label>

      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Пошук контакту..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;

