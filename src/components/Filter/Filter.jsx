import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import c from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const findContact = e => {
    dispatch(filterAction(e.currentTarget.value));
  };

  return (
    <label className={c.filterLabel}>
      <p className={c.filterTitle}>Find contacts by Name</p>
      <input
        className={c.filterInput}
        value={filter}
        name="filter"
        onChange={findContact}
        type="input"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
