import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../redux/selectors/contactsSelector";
import ContactForm from "../components/ContactForm";
import ContactFilter from "../components/ContactFilter";
import ContactList from "../components/ContactList";
import { setFilter } from "../redux/slices/filterSlice";
import {
  addContact,
  removeContact,
  fetchContacts,
} from "../redux/operations/contactsOperation";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import toast, { Toaster } from "react-hot-toast";

export default function Contacts() {
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const filter = useSelector((state) => state.filter || "");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      toast.error(error, {
        duration: 3000,
        position: "bottom-center",
      });
    }
  }, [error]);

  const addNewContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleFilterChange = (ev) => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  const removeExistingContact = (id) => {
    dispatch(removeContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
      </HelmetProvider>
      <ContactForm onSubmit={addNewContact} />
      <ContactFilter filter={filter} onChange={handleFilterChange} />
      <div>
        {isLoading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </div>
      <ContactList
        contacts={filteredContacts}
        onDelete={removeExistingContact}
      />
    </>
  );
}
