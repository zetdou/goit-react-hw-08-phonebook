import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      {name} - {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
