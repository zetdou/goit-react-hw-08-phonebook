import React, { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations/contactsOperation";
import { TextField, Button, Tooltip, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      }),
    );
    setName("");
    setNumber("");
  };

  const nameId = nanoid();
  const numId = nanoid();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        id="name"
        label="Name"
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <TextField
        id="number"
        label="Phone number"
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleChange}
      />
      <Tooltip title="Add contact">
        <IconButton type="submit" color="primary">
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
