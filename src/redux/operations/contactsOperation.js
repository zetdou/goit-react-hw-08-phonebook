import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../lib/client";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const { data } = await client.get("/contacts");
  return data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, { getState, rejectWithValue }) => {
    try {
      const { contacts } = getState();
      if (contacts.items.some((contact) => contact.name === newContact.name)) {
        return rejectWithValue(`${newContact.name} is already in contacts!`);
      }
      const { data } = await client.post("/contacts", newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id) => {
    await client.delete(`/contacts/${id}`);
    return id;
  },
);
