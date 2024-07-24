import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/filterSlice";

const ContactFilter = ({ filter }) => {
  const searchId = nanoid();
  const dispatch = useDispatch();

  const handleFilterChange = (ev) => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  return (
    <div>
      <label htmlFor={searchId}>
        Find contact
      </label>
      <input
        type="text"
        id={searchId}
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
