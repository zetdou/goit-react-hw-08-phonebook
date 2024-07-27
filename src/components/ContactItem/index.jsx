import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { ListItem, ListItemText, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <Tooltip title="Delete contact">
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }>
      <ListItemText primary={name} secondary={number} />
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
