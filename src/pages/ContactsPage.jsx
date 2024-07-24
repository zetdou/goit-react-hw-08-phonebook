import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchContacts } from "../redux/operations/contactsOperation";
import { selectLoading } from "../redux/selectors/contactsSelector";
import ContactForm  from "../components/ContactForm";
import ContactFilter from "../components/ContactFilter";
import ContactList from "../components/ContactList";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <ContactForm />
            <ContactFilter />
            <div>{isLoading && "Request in progress..."}</div>
            <ContactList />
        </>
    )
}