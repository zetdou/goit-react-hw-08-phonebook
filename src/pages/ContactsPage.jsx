import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { selectContacts, selectError, selectLoading } from "../redux/selectors/contactsSelector";
import ContactForm from "../components/ContactForm";
import ContactFilter from "../components/ContactFilter";
import ContactList from "../components/ContactList";
import { setFilter } from "../redux/slices/filterSlice";
import { addContact, removeContact, fetchContacts } from "../redux/operations/contactsOperation";

export default function Contacts() {
  const isLoading = useSelector(selectLoading);
  const { items: contacts } = useSelector(selectContacts);
  const error = useSelector(selectError);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
        alert(error);
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
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm onSubmit={addNewContact} />
      <ContactFilter filter={filter} onChange={handleFilterChange} />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList
        contacts={filteredContacts}
        onDelete={removeExistingContact}
      />
    </>
  );
}
