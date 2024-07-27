import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/filterSlice";
import { TextField, Box } from "@mui/material";

const ContactFilter = ({ filter }) => {
  const searchId = nanoid();
  const dispatch = useDispatch();

  const handleFilterChange = (ev) => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  return (
    <Box sx={{ my: 2 }}>
      <TextField
        label="Find contact"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        fullWidth
      />
    </Box>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
