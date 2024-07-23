import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";
import Filter from "./ContactFilter";
import ContactList from "./ContactList";
import styles from "../styles/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  removeContact,
  fetchContacts,
} from "../redux/operations/contactsOperation";
import { setFilter } from "../redux/slices/filterSlice";
import { useAuth } from "../hooks";
import { PrivateRoute } from "./route/PrivateRoute";
import { RestrictedRoute } from "./route/RestrictedRoute";
import { refreshUser } from "../redux/operations/authOperation";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route 
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route 
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// const App = () => {
//   const {
//     loading,
//     error,
//     items: contacts,
//   } = useSelector((state) => state.contacts);
//   const filter = useSelector((state) => state.filter);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   useEffect(() => {
//     if (error !== null) {
//       alert(error);
//     }
//   }, [error]);

//   const addNewContact = (newContact) => {
//     dispatch(addContact(newContact));
//   };

//   const handleFilterChange = (ev) => {
//     dispatch(setFilter(ev.currentTarget.value));
//   };

//   const removeExistingContact = (id) => {
//     dispatch(removeContact(id));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );

//   return (
//     <>
//       <h1 className={styles.firstHeading}>Phonebook</h1>
//       <ContactForm onSubmit={addNewContact} />
//       <h2 className={styles.secondHeading}>Contacts</h2>
//       <Filter filter={filter} onChange={handleFilterChange} />
//       <ContactList
//         contacts={filteredContacts}
//         onDelete={removeExistingContact}
//       />
//     </>
//   );
// };

// export default App;
